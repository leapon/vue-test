import Vue from 'vue'
import store from './vuex/store'
import Barplot from './components/Barplot.vue'

new Vue({
  el: '#plot1',
  store,
  data: {
    fields: [
      {
        name: 'gender',
        label: 'Gender'
      }
    ],
    plotdata1: [{ "x":["A", "B"], "y":[3, 5], "type":"bar" }]
  },
  components: {
    Barplot
  }
})
