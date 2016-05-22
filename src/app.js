Vue.use(Keen);

new Vue({
    el: '#keen1',
    components: {
        // all components already registered
    },
    methods: {
      openGithub: function() {
        console.log('in openGithub');
      }
    },
    data: {
      favouriteMonth: '',
      favouriteSimpson: '',
      addedExtendedFamily: false,
      theSimpsons: [
        {
          value: 'maggie',
          text: 'Maggie Simpson',
          image: 'http://i.imgur.com/eK26qtK.jpg'
        }, {
          value: 'lisa',
          text: 'Lisa Simpson',
          image: 'http://i.imgur.com/wIb44g9.jpg'
        }, {
          value: 'bart',
          text: 'Bart Simpson',
          image: 'http://i.imgur.com/XkEz9zg.jpg'
        }, {
          value: 'marge',
          text: 'Marge Simpson',
          image: 'http://i.imgur.com/MuFcpQ4.jpg'
        }, {
          value: 'homer',
          text: 'Homer Simpson',
          image: 'http://i.imgur.com/aYPRWX4.jpg'
        }
      ],
      menuOptions: [
        {
            id: 'edit',
            text: 'Edit',
            icon: 'edit',
            secondaryText: 'Ctrl+E'
        }, {
            id: 'duplicate',
            text: 'Duplicate',
            icon: 'content_copy',
            secondaryText: 'Ctrl+D'
        }, {
            id: 'share',
            text: 'Share',
            icon: 'share',
            secondaryText: 'Ctrl+Shift+S',
            disabled: true
        }, {
            type: 'divider'
        }, {
            id: 'delete',
            text: 'Delete',
            icon: 'delete',
            secondaryText: 'Del'
        }
      ]
    }
});
