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
    }
});
