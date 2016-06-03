<template>
  <div class="barplot-container">
    <div v-select2=""></div>
  </div>
</template>

<script>
export default {
  props: ['label'],
  components: {},
  directives: {
    select2: {
      twoWay: true,
      params: ['options'],
      bind: function () {
        var self = this
        var plotData = {
          "value": {
            "data": [
              {
                "x": ["Apple", "Orange", "Melon"],
                "y": [12, 15, 27],
                "type": "bar"
              }
            ]
          }
        };
        // draw plot using plotly
        var data = plotData.value.data;
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
  activate: function (done) {
    console.log('>>> activate Barplot');
    done();
  }
}
</script>

<style scoped>
.barplot-container {
  padding: 10px;
  border: solid 1px #f9f9f9;
  font-size: 1.2em;
}
</style>