import Vue from 'vue'
import store from './vuex/store'
import FilterPane from './components/FilterPane.vue'
import ContentPane from './components/ContentPane.vue'

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
  components: {
    FilterPane
  }
})


new Vue({
  el: '#main_panel',
  store,
  data: {
    dataitems:[
        { id:1, name:"jack" },
        { id:2, name:"mary" },
        { id:3, name:"zack" },
        { id:4, name:"alex" },
        { id:5, name:"cathy" }
    ]
  },
  components: {
    ContentPane
  }
})

