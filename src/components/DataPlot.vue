<template>
  <p>{{ filter2 }}</p>
  <hr/>
  <barplot :data="species_data"></barplot>
</template>

<script>
import Multiselect from 'vue-multiselect'
import Barplot from './Barplot.vue'

export default {
  props: ['dataitems'],
  data () {
    return {
      categorydata: {
        x: ["Pear", "Orange"],
        y: [42, 18]
      }
    }
  },
  computed: {
    filter2: function() {
      return JSON.stringify(this.filter) + '-2';
    },
    dataurl: function() {
      return './lib/data/vuetable-example-users.json' + '?a=1&filter=' + JSON.stringify(this.filter)
    },
    species_data: function() {
      var data = {
        x: ["Melon", "Grape"],
        y: [12, 15]
      };
      return data;
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
    Barplot
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
