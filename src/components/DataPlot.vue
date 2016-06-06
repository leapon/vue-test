<template>
  <p>{{ filter2 }}</p>
  <p>{{ species_data|json }}</p>
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
        x: ["A", "B"],
        y: [12, 15]
      };
      if (this.filter && this.filter.species) {
        data = { x:[], y:[] };
        for (var species of this.filter.species) {
          data.x.push(species.name);
          data.y.push(Math.floor(Math.random() * 100));
        }
      }
      console.log('>>> data:', data);
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
