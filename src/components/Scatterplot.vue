<template>
  <div class="scatterplot-container">
    <div v-scatterplot :data=data :layout=layout></div>
  </div>
</template>

<script>
function parseJSON(input) {
  var result = null;
  if(typeof input === 'string') {
    try {
      result = JSON.parse(input);
    } catch (e) {}
  } else {
    result = input;
  }
  return result;
}

export default {
  props: ['label', 'data', 'layout'],
  components: {},
  directives: {
    scatterplot: {
      twoWay: true,
      params: ['data', 'layout'],
      bind: function () {
        var self = this;
        var data = parseJSON(this.params.data) || [];
        var layout = parseJSON(this.params.layout) || {
          autosize: false,
          width: 400,
          height: 420
        };
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
.scatterplot-container {
  padding: 10px;
  border: solid 1px #f9f9f9;
  font-size: 1.2em;
}
</style>
