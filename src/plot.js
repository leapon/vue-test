import Vue from 'vue'
import store from './vuex/store'
import Barplot from './components/Barplot.vue'
import Scatterplot from './components/Scatterplot.vue'

var layout = {
  width: 360,
  height: 320
};
var categorydata = [{
  x: ["Apple", "Orange"],
  y: [23, 18]
}];
var scatterdata = [{
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 3, 4, 5, 4, 6, 9, 11, 12]
}];

new Vue({
  el: '#plot1',
  store,
  data: {
    layout: { "width":360, "height":320 },
    categorydata: [{ "x":["Apple", "Orange"], "y":[23, 18]}],
    scatterdata: [{
      x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      y: [0, 3, 4, 5, 4, 6, 9, 11, 12]
    }],
    // test
    layout1: null,
    layout2: { "width":300, "height":300 },
    layout3: { "width":420, "height":400 },
    plotdata1: [{ "x":["A", "B"], "y":[3, 5], "type":"bar" }],
    plotdata2: [{ "x":["Apple", "Orange"], "y":[23, 18], "type":"bar" }],
    scatter1: [{
      x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      y: [0, 3, 4, 5, 4, 6, 9, 11, 12],
      type: 'scatter'
    }]
  },
  components: {
    Barplot,
    Scatterplot
  }
})
