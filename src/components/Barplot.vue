<template>
  <div class="barplot-container">
    <div>label: {{ label }}</div>
    <div id="barplot1"></div>
  </div>
</template>

<script>
//var plotly = require('plotly.js');

export default {
  props: ['label'],
  components: {},
  data () {
    return {
    }
  },
  activate: function (done) {
    console.log('>>> activate Barplot');
    /*
    var data = [
      {
        "x": [
          "Female",
          "Male"
        ],
        "y": [
          17,
          22
        ],
        "type": "bar"
      }
    ];
    var layout = null;
    Plotly.plot('#barplot1', data, layout, { displayModeBar:false });
    */
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