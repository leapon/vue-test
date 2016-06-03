import Vue from 'vue'
import store from './vuex/store'
import Barplot from './components/Barplot.vue'

new Vue({
  el: '#plot1',
  store,
  data: {
  },
  components: {
    Barplot
  }
})
