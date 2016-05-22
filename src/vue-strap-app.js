Vue.use(VueStrap);

new Vue({
    el: '#strap1',
    components: {
      accordion: VueStrap.accordion
    },
    methods: {
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
      ]
    }
});
