<template>
  <pre>{{ form|json 4 }}</pre>
</template>

<script>
export default {
  props: [],
  data: function() {
    return {};
  },
  vuex: {
    getters: {
      form: state => state.form
    }
  }
}
</script>

<style>
</style>
