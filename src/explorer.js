import Vue from 'vue'
import store from './vuex/store'
import FilterPane from './components/FilterPane.vue'

var values = [
  { name: 'MD' },
  { name: 'VA' },
  { name: 'DC' }
];

new Vue({
  el: '#side_panel',
  store,
  data: {
    fields: [
      {
        name: 'gender',
        label: 'Gender',
        type: 'one',
        values: values
      },
      {
        name: 'race',
        label: 'Race',
        type: 'multi',
        values: values
      },
      {
        name: 'species',
        label: 'Species',
        type: 'multi',
        values: values
      }
    ]
  },
  components: { FilterPane }
})
