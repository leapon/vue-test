import Vue from 'vue'
import store from './vuex/store'
import StrapForm from './components/StrapForm.vue'

console.log('in vuestrap page');

new Vue({
  el: '#column1',
  store,
  data: {
    label: 'StrapForm',
    states: ['Alabama', 'Alaska', 'Arizona','Maryland', 'Virginia', 'Kentucky', 'DC']
  },
  components: {
    StrapForm
  }
});
