<template>
  <div class="barplot-container">
    <div v-barplot :data=data></div>
  </div>
</template>

<script>
export default {
  props: ['label', 'data'],
  components: {},
  directives: {
    barplot: {
      twoWay: true,
      params: ['data'],
      bind: function () {
        // draw plot using plotly
        var data = [
          {
            "x": ["Apple", "Orange", "Melon"],
            "y": [12, 15, 27],
            "type": "bar"
          }
        ];
        var layout = {
          autosize: false,
          width: 400,
          height: 420
        }
        Plotly.plot(this.el, data, layout, { displayModeBar:false });
      }
    }
  },
  data () {
    return {
    }
  },
}
</script>

<style scoped>
.barplot-container {
  padding: 10px;
  border: solid 1px #f9f9f9;
  font-size: 1.2em;
}
</style>
