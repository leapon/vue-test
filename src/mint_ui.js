import Vue from 'vue'
import store from './vuex/store'
import MintForm from './components/MintForm.vue'

console.log('in mint_ui page');

new Vue({
  el: '#column1',
  store,
  data: {
  },
  components: {
    MintForm
  }
});
