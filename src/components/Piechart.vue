<template>
  <div class="piechart-container">
    <div v-piechart :data=data :layout=layout></div>
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
      params: ['data', 'layout'],
      bind: function () {
        var self = this;
        var data = this.params.data || {};
        data.type = 'pie';
        var layout = this.params.layout || defaultLayout;
        Plotly.plot(this.el, [data], layout, { displayModeBar:false });
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
