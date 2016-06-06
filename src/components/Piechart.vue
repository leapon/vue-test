<template>
  <div class="piechart-container">
    <div v-piechart="data" :layout=layout></div>
  </div>
</template>

<script>
var defaultLayout = {
  autosize: false,
  width: 360,
  height: 480
};

export default {
  props: ['label', 'data', 'layout'],
  components: {},
  directives: {
    piechart: {
      twoWay: true,
      params: ['layout'],
      update: function (data) {
        data.type = data.type || 'pie';
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
.piechart-container {
  padding: 10px;
  border: solid 1px #f9f9f9;
  font-size: 1.2em;
}
</style>
