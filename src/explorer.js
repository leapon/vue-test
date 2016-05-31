import Vue from 'vue'
import FilterPane from './FilterPane.vue'

new Vue({
  el: '#side_panel',
  data: {
    fields: [
      {
        "name":"gender",
        "values":[
          {"name":"MD"},
          {"name":"VA"}
        ]
      },
      {
        "name":"race",
        "values":[
          {"name":"MD"},
          {"name":"VA"},
          {"name":"DC"}
        ]
      },
      {
        "name":"species",
        "values":[
          {"name":"MD"},
          {"name":"DC"}
        ]
      }
    ]
  },
  components: { FilterPane }
})
