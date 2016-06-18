import Vue from 'vue'
import store from './vuex/store'
import MintForm from './components/MintForm.vue'

console.log('in mint_ui page');

new Vue({
  el: '#column1',
  store,
  data: {
    label: 'Test Form',
    value: [],
    options: [
      {
        label: 'disabled option',
        value: 'valueF',
        disabled: true
      },
      {
        label: 'checked disabled',
        value: 'valueE',
        disabled: true
      },
      {
        label: 'optionA',
        value: 'valueA'
      },
      {
        label: 'optionB',
        value: 'valueB'
      }
    ]
  },
  components: {
    MintForm
  }
});
