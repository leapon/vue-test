<template>
  <pre>{{ items|json 4 }}</pre>
</template>

<script>
export default {
  props: [],
  data: function() {
    return {};
  },
  vuex: {
    getters: {
      items: state => state.items
    }
  }
}
</script>

<style>
</style>
