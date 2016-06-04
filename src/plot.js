import Vue from 'vue'
import store from './vuex/store'
import BarplotTest from './components/BarplotTest.vue'
import Plot from './components/Plot.vue'
import Barplot from './components/Barplot.vue'
import Piechart from './components/Piechart.vue'
import Scatterplot from './components/Scatterplot.vue'
import Timeplot from './components/Timeplot.vue'
import Histogramplot from './components/Histogramplot.vue'

var randomdata = [];
for (var i = 0; i < 500; i ++) {
	randomdata[i] = Math.random();
}

var layout = {
  width: 360,
  height: 320
};
var categorydata = {
  x: ["Apple", "Orange"],
  y: [23, 18]
};
var piedata = {
  values: [19, 26, 55],
  labels: ['Residential', 'Non-Residential', 'Utility']
};
var scatterdata = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 3, 4, 5, 4, 6, 9, 11, 12]
};
var timedata = {
  x: ['2013-10-04', '2013-11-04', '2013-12-04', '2014-01-01', '2014-02-20'],
  y: [1, 3, 6, 12, 9]
};
var histogramdata = {
  x: randomdata
};

var errordata1 = [{
  x: [0, 1, 2],
  y: [6, 10, 2],
  error_y: {
    type: 'data',
    array: [1, 2, 3],
    visible: true
  },
  type: 'scatter'
}];
var trace1 = {
  x: ['Trial 1', 'Trial 2', 'Trial 3'],
  y: [3, 6, 4],
  name: 'Control',
  error_y: {
    type: 'data',
    array: [1, 0.5, 1.5],
    visible: true
  },
  type: 'bar'
};
var trace2 = {
  x: ['Trial 1', 'Trial 2', 'Trial 3'],
  y: [4, 7, 3],
  name: 'Experimental',
  error_y: {
    type: 'data',
    array: [0.5, 1, 2],
    visible: true
  },
  type: 'bar'
};
var errordata2 = [trace1, trace2];
var grouplayout = {
  barmode: 'group',
  width: 360,
  height: 320
};

new Vue({
  el: '#plot1',
  store,
  data: {
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
    BarplotTest
  }
});


new Vue({
  el: '#plot2',
  store,
  data: {
    layout: layout,
    categorydata: categorydata,
    piedata: piedata,
    scatterdata: scatterdata,
    timedata: timedata,
    histogramdata: histogramdata
  },
  components: {
    Barplot,
    Piechart,
    Scatterplot,
    Timeplot,
    Histogramplot
  }
});

new Vue({
  el: '#plot3',
  store,
  data: {
    layout: layout,
    grouplayout: grouplayout,
    errordata1: errordata1,
    errordata2: errordata2
  },
  components: {
    Plot
  }
});