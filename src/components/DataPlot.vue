<template>
  <p>{{ filter2 }}</p>
  <hr/>
  <div v-for="dataitem in dataitems">
    <p>{{ dataitem.id }} - {{ dataitem.name }}</p>
  </div>
  <hr/>
</template>

<script>
export default {
  props: ['dataitems'],
  data () {
    return {
    }
  },
  computed: {
    filter2: function() {
      return JSON.stringify(this.filter) + '-2';
    },
    dataurl: function() {
      return './lib/data/vuetable-example-users.json' + '?a=1&filter=' + JSON.stringify(this.filter)
    }
  },
  vuex: {
    getters: {
      filter: state => state.filter
    }
  },
  activate: function (done) {
    console.log('>>> activate DataPlot');
    done();
  },
  components: {
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
