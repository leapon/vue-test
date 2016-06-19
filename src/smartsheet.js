import Vue from 'vue'
import store from './vuex/store'
import SmartSheet from './components/smartsheet.vue'

new Vue({
  el: '#sheet1',
  store,
  data: {
    label: 'List of Items',
    items: [
      { name:'table', value:20 },
      { name:'bench', value:25 },
      { name:'chair', value:22 }
    ]
  },
  components: {
    SmartSheet
  }
});