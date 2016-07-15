import Vue from 'vue'
import store from './vuex/store'
import Hello from './components/Hello.vue'

new Vue({
  el: '#component1',
  store,
  data: {
    name: 'guest'
  },
  components: {
    Hello
  }
});
