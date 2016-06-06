<template>
  <div class="plot-container">
    <div v-plot="data" :layout=layout></div>
  </div>
</template>

<script>
var defaultLayout = {
  autosize: false,
  width: 360,
  height: 320
};

export default {
  props: ['label', 'data', 'layout'],
  components: {},
  directives: {
    plot: {
      twoWay: true,
      params: ['layout'],
      update: function (data) {
        var layout = this.params.layout || defaultLayout;
        Plotly.plot(this.el, data, layout, { displayModeBar:false });
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.plot-container {
  padding: 10px;
  border: solid 1px #f9f9f9;
  font-size: 1.2em;
}
</style>
