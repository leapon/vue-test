import Vue from 'vue'
import store from './vuex/store'
import SmartSheet from './components/SmartSheet.vue'

var sheet1 = new Vue({
  el: '#sheet1',
  store,
  data: {
    label: 'List of Items',
    columns: [
      { name:'name', display:'Name' },
      { name:'value', display:'Value' }
    ],
    items: [
      { name:'table', value:20 },
      { name:'bench', value:25 },
      { name:'chair', value:22 }
    ]
  },
  components: {
    SmartSheet
  }
});

$('#btnSheet1').click(showSheet1Info);

function showSheet1Info() {
  console.log('>>> showSheet1Info');
  $('#info1').text('showSheet1Info');
}