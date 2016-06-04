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

console.log('in component1 page');

// vue-table example
new Vue({
    el: '#column1',
    data: {
        columns: [
            'name',
            'nickname',
            'email',
            'birthdate',
            'gender'
            //'__actions'
        ],
        itemActions: [
            { name: 'view-item', label: '', icon: 'zoom icon', class: 'ui teal button' },
            { name: 'edit-item', label: '', icon: 'edit icon', class: 'ui orange button'},
            { name: 'delete-item', label: '', icon: 'delete icon', class: 'ui red button' }
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
  el: '#column2',
  store,
  data: {
  },
  components: {
  }
});