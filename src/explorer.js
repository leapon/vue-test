import Vue from 'vue'
import FilterPane from './FilterPane.vue'

var values = [
  { name: "MD" },
  { name: "VA" },
  { name: "DC" }
];

new Vue({
  el: '#side_panel',
  data: {
    fields: [
      {
        name: "gender",
        type: "single",
        values: values
      },
      {
        name: "race",
        type: "multi",
        values: values
      },
      {
        name: "species",
        type: "multi",
        values: values
      }
    ]
  },
  components: { FilterPane }
})
