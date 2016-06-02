import Vue from 'vue'
import store from './vuex/store'
import SimpleLabel from './components/SimpleLabel.vue'

new Vue({
  el: '#plot1',
  store,
  data: {
  },
  components: {
    SimpleLabel
  }
})



