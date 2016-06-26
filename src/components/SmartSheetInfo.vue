<template>
  <pre>{{ items|json 4 }}</pre>
  <hr/>
  <pre>{{ items2|json 4 }}</pre>
</template>

<script>
import store from '../vuex/store.js';

export default {
  store,
  props: ['name'],
  data: function() {
    return {};
  },
  vuex: {
    getters: {
      items: state => state.items
    }
  },
  computed: {
    items2: function() {
      return store.state[this.name];
    }
  }
}
</script>

<style>
</style>
