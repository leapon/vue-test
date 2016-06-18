import Vue from 'vue'
import store from './vuex/store'
import BootForm from './components/BootForm.vue'

console.log('in mint_ui page');

new Vue({
  el: '#column1',
  store,
  data: {
    label: 'Boot Form',
    value: [],
    options: []
  },
  components: {
    BootForm
  }
});
