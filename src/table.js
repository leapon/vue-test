import Vue from 'vue'
import store from './vuex/store'

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

// vue-tables
var VueTables = require('vue-tables');
var options = {
  compileTemplates: true,
  //highlightMatches: true,
  //pagination: {
  // dropdown:true
  // chunk:5
  // },
  filterByColumn: true,
  texts: {
    filter: "Search:"
  },
  datepickerOptions: {
    showDropdowns: true
  }
};
Vue.use(VueTables.client, options);

console.log('in component1 page');

// vue-table example
new Vue({
    el: '#row1',
    data: {
        columns: [
            'name',
            'nickname',
            'email',
            'birthdate',
            'gender',
            '__actions'
        ],
        itemActions: [
            { name: 'view-item', label: '', icon: 'glyphicon glyphicon-eye-open', class: 'btn btn-default' },
            { name: 'edit-item', label: '', icon: 'glyphicon glyphicon-pencil', class: 'btn btn-default'}
        ]
    },
    methods: {
        viewProfile: function(id) {
            console.log('view profile with id:', id)
        }
    },
    events: {
        'vuetable:action': function(action, data) {
            console.log('vuetable:action', action, data)
            if (action == 'view-item') {
                this.viewProfile(data.id)
            }
        },
        'vuetable:load-error': function(response) {
            console.log('Load Error: ', response)
        }
    }
})

new Vue({
  el: '#row2',
  store,
  data: {
    columns: ['name', 'age'],
    tableData: [{
      name: 'Jack',
      age: 18
    }, {
      name: 'Alex',
      age: 19
    }, {
      name: 'Becky',
      age: 21
    }],
    options: {
      headings: {
        name: 'Name',
        age: 'Age',
        edit: 'Edit',
        delete: 'Delete'
      }
    }
  }
});