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
        var self = this;
        console.log('>>> bind this.params.data:', this.params.data);
        var testdata = JSON.parse(this.params.data);
        console.log('>>>', testdata.type);
        // draw plot using plotly
        var data = [testdata];
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
    console.log('>>> activate Barplot component');
    console.log('>>> label:', this.$get('label'));
    console.log('>>> data:', this.$get('data'));
    done();
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