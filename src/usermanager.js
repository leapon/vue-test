import Vue from 'vue'
import store from './vuex/store'
import FilterPane from './components/FilterPane.vue'

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
});
