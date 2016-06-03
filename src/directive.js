import Vue from 'vue'
import store from './vuex/store'
import SimpleLabel from './components/SimpleLabel.vue'
import SimpleLabel2 from './components/SimpleLabel2.vue'
import BarplotPre from './components/BarplotPre.vue'

Vue.directive('my-directive', function (newValue, oldValue) {
  //console.log('>>> my-directive update:', newValue, oldValue);
})

new Vue({
  el: '#plot1',
  store,
  data: {
  },
  components: {
    SimpleLabel,
    SimpleLabel2,
    BarplotPre
  }
})

// directive for applying select2
Vue.directive('select', {
  twoWay: true,
  priority: 1000,
  params: ['options'],
  bind: function () {
    var self = this
    $(this.el)
      .select2({
        data: this.params.options
      })
      .on('change', function () {
        self.set(this.value)
      })
  },
  update: function (value) {
    $(this.el).val(value).trigger('change')
  },
  unbind: function () {
    $(this.el).off().select2('destroy')
  }
})

var vm = new Vue({
  el: '#select2_test',
  data: {
    result_value: 1,
    options: [
      { id: 1, text: 'hello' },
      { id: 2, text: 'what' },
      { id: 3, text: 'world' }
    ]
  }
})

var vm = new Vue({
  el: '#select2_test2',
  data: {
    result_value: 2,
    options: [
      { id: 1, text: 'hello' },
      { id: 2, text: 'what' },
      { id: 3, text: 'world' }
    ]
  }
})

// barplot directive
Vue.directive('barplot', {
  twoWay: true,
  priority: 1000,
  params: [],
  bind: function () {
    var self = this
    console.log('>>> barplot directive bind');
    var plotData = {
        "value": {
            "data": [
                {
                    "x": [
                        "Female",
                        "Male"
                    ],
                    "y": [
                        17,
                        22
                    ],
                    "type": "bar"
                }
            ]
        }
    };
    // draw plot using plotly
    var data = plotData.value.data;
    var layout = plotData.layout;
    Plotly.plot(this.el, data, layout, { displayModeBar:false });
  }
})

var vm = new Vue({
  el: '#plot_test1',
  data: {
    plotvalue: 200,
    plotdata: [
      { id: 1, text: 'hello' },
      { id: 2, text: 'what' },
      { id: 3, text: 'world' }
    ]
  }
})

