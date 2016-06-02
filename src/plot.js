import Vue from 'vue'
import store from './vuex/store'
import SimpleLabel from './components/SimpleLabel.vue'
import SimpleLabel2 from './components/SimpleLabel2.vue'
import Barplot from './components/Barplot.vue'

Vue.directive('my-directive', function (newValue, oldValue) {
  console.log('>>> my-directive update:', newValue, oldValue);
})

new Vue({
  el: '#plot1',
  store,
  data: {
  },
  components: {
    SimpleLabel,
    SimpleLabel2,
    Barplot
  }
})



