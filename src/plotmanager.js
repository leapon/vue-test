import Vue from 'vue'
import store from './vuex/store'
import FilterPane from './components/FilterPane.vue'
import UserTable from './components/UserTable.vue'

var VueResource = require('vue-resource');
Vue.use(VueResource);

// require or import Vuetable and optional VuetablePagination component
import Vuetable from './vue-table-components/Vuetable.vue';
import VuetablePagination from './vue-table-components/VuetablePagination.vue';
import VuetablePaginationDropdown  from './vue-table-components/VuetablePaginationDropdown.vue';
import VuetablePaginationBootstrap from './vue-table-components/VuetablePaginationBootstrap.vue';

// register components to Vue
Vue.component('vuetable', Vuetable);
Vue.component('vuetable-pagination', VuetablePagination)
Vue.component('vuetable-pagination-dropdown', VuetablePaginationDropdown)
Vue.component('vuetable-pagination-bootstrap', VuetablePaginationBootstrap)

console.log('in user manager page');

var values = [
  { name: 'MD' },
  { name: 'VA' },
  { name: 'DC' }
];

var vmSide = new Vue({
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
});

var vmMain = new Vue({
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
    UserTable
  }
});
