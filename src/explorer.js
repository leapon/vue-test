import Vue from 'vue'
import FilterPane from './FilterPane.vue'

var values = [
  {"name":"MD"},
  {"name":"VA"},
  {"name":"DC"}
];

new Vue({
  el: '#side_panel',
  data: {
    fields: [
      {
        "name":"gender",
        "values":values
      },
      {
        "name":"race",
        "values":values
      },
      {
        "name":"species",
        "values":values
      }
    ]
  },
  components: { FilterPane }
})
