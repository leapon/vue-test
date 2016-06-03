import Vue from 'vue'
import store from './vuex/store'
import Barplot from './components/Barplot.vue'

new Vue({
  el: '#plot1',
  store,
  data: {
    plotdata1: [{ "x":["A", "B"], "y":[3, 5], "type":"bar" }],
    layout1: null,
    plotdata2: [{ "x":["Apple", "Orange"], "y":[23, 18], "type":"bar" }],
    layout2: { "width":300, "height":300 }
  },
  components: {
    Barplot
  }
})
