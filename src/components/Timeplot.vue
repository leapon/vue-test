<template>
  <div class="timeplot-container">
    <div v-timeplot="data" :layout=layout></div>
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
    timeplot: {
      twoWay: true,
      params: ['layout'],
      update: function (data) {
        data.type = data.type || 'scatter';
        var layout = this.params.layout || defaultLayout;
        Plotly.newPlot(this.el, [data], layout, { displayModeBar:false });
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
.timeplot-container {
  padding: 10px;
  border: solid 1px #f9f9f9;
  font-size: 1.2em;
}
</style>
