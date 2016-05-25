Vue.config.debug = true

// fields definition
var tableColumns = [
    {
        name: 'name',
        sortField: 'name',
    },
    {
        name: 'email',
        sortField: 'email',
    },
    {
        name: 'nickname',
        sortField: 'nickname',
        callback: 'allCap'
    },
    {
        name: 'birthdate',
        sortField: 'birthdate',
        callback: 'formatDate|D/MM/Y'
    },
    {
        name: 'gender',
        sortField: 'gender',
        titleClass: 'text-center',
        dataClass: 'text-center',
        callback: 'gender'
    },
    {
        name: '__actions',
        dataClass: 'text-center',
    }
]

new Vue({
    el: '#app1',
    data: {
        searchFor: '',
        fields: tableColumns,
        sortOrder: {
            field: 'name',
            direction: 'asc'
        },
        perPage: 10,
        paginationComponent: 'vuetable-pagination',
        paginationInfoTemplate: 'แสดง {from} ถึง {to} จากทั้งหมด {total} รายการ',
        itemActions: [
            { name: 'view-item', label: '', icon: 'glyphicon glyphicon-zoom-in', class: 'btn btn-info', extra: {'title': 'View', 'data-toggle':"tooltip", 'data-placement': "left"} },
            { name: 'edit-item', label: '', icon: 'glyphicon glyphicon-pencil', class: 'btn btn-warning', extra: {title: 'Edit', 'data-toggle':"tooltip", 'data-placement': "top"} },
            //{ name: 'delete-item', label: '', icon: 'glyphicon glyphicon-remove', class: 'btn btn-danger', extra: {title: 'Delete', 'data-toggle':"tooltip", 'data-placement': "right" } }
        ],
        moreParams: [],
    },
    watch: {
        'perPage': function(val, oldVal) {
            this.$broadcast('vuetable:refresh')
        },
        'paginationComponent': function(val, oldVal) {
            this.$broadcast('vuetable:load-success', this.$refs.vuetable.tablePagination)
            this.paginationConfig(this.paginationComponent)
        }
    },
    methods: {
        /**
         * Callback functions
         */
        allCap: function(value) {
            return value.toUpperCase()
        },
        gender: function(value) {
          return value == 'M'
            ? '<span class="label label-info"><i class="glyphicon glyphicon-star"></i> Male</span>'
            : '<span class="label label-success"><i class="glyphicon glyphicon-heart"></i> Female</span>'
        },
        formatDate: function(value, fmt) {
            if (value == null) return ''
            fmt = (typeof fmt == 'undefined') ? 'D MMM YYYY' : fmt
            return moment(value, 'YYYY-MM-DD').format(fmt)
        },
        /**
         * Other functions
         */
        setFilter: function() {
            this.moreParams = [
                'filter=' + this.searchFor
            ]
            this.$nextTick(function() {
                this.$broadcast('vuetable:refresh')
            })
        },
        resetFilter: function() {
            this.searchFor = ''
            this.setFilter()
        },
        preg_quote: function( str ) {
            // http://kevin.vanzonneveld.net
            // +   original by: booeyOH
            // +   improved by: Ates Goral (http://magnetiq.com)
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // *     example 1: preg_quote("$40");
            // *     returns 1: '\$40'
            // *     example 2: preg_quote("*RRRING* Hello?");
            // *     returns 2: '\*RRRING\* Hello\?'
            // *     example 3: preg_quote("\\.+*?[^]$(){}=!<>|:");
            // *     returns 3: '\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:'
            return (str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
        },
        highlight: function(needle, haystack) {
            return haystack.replace(
                new RegExp('(' + this.preg_quote(needle) + ')', 'ig'),
                '<span class="highlight">$1</span>'
            )
        },
        paginationConfig: function(componentName) {
            console.log('paginationConfig: ', componentName)
            if (componentName == 'vuetable-pagination') {
                this.$broadcast('vuetable-pagination:set-options', {
                    wrapperClass: 'pagination',
                    icons: { first: '', prev: '', next: '', last: ''},
                    activeClass: 'active',
                    linkClass: 'btn btn-default',
                    pageClass: 'btn btn-default'
                })
            }
            if (componentName == 'vuetable-pagination-dropdown') {
                this.$broadcast('vuetable-pagination:set-options', {
                    wrapperClass: 'form-inline',
                    icons: { prev: 'glyphicon glyphicon-chevron-left', next: 'glyphicon glyphicon-chevron-right' },
                    dropdownClass: 'form-control'
                })
            }
        }
    },
    events: {
        'vuetable:row-changed': function(data) {
            console.log('row-changed:', data.name)
        },
        'vuetable:row-clicked': function(data, event) {
            console.log('clicked:', data.name)
            data.name = '! '+data.name
            data.nickname = '<i>'+data.nickname+'</i>'
        },
        'vuetable:action': function(action, data) {
            console.log('vuetable:action', action, data)
            if (action == 'view-item') {
                sweetAlert(action, data.name)
            } else if (action == 'edit-item') {
                sweetAlert(action, data.name)
            } else if (action == 'delete-item') {
                sweetAlert(action, data.name)
            }
        },
        'vuetable:load-success': function(response) {
            var data = response.data.data
            console.log(data)
            if (this.searchFor !== '') {
                for (n in data) {
                    data[n].name = this.highlight(this.searchFor, data[n].name)
                    data[n].email = this.highlight(this.searchFor, data[n].email)
                }
            }
        },
        'vuetable:load-error': function(response) {
            if (response.status == 400) {
                sweetAlert('Something\'s Wrong!', response.data.message, 'error')
            } else {
                sweetAlert('Oops', E_SERVER_ERROR, 'error')
            }
        }
    }
})