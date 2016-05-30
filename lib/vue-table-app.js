new Vue({
    el: '#app1',
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
            { name: 'view-item', label: '', icon: 'glyphicon glyphicon-zoom-in', class: 'ui teal button' },
            { name: 'edit-item', label: '', icon: 'glyphicon glyphicon-pencil', class: 'ui orange button'}
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
