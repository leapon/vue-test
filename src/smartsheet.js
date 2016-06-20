import Vue from 'vue'
import store from './vuex/store'
import SmartSheet from './components/SmartSheet.vue'
import SmartSheet2 from './components/SmartSheet2.vue'
import SmartSheet3 from './components/SmartSheet3.vue'

// sheet1
var sheet1 = new Vue({
  el: '#sheet1',
  store,
  data: {
    label: 'List of Items',
    columns: [
      { name:'name', display:'Name', edit:'input' },
      { name:'value', display:'Value', edit:'input' },
      { name:'hash1', display:'Hash1', edit:false }
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
  console.log('>>> showSheet1Info:', sheet1.$get('columns'));
  $('#info1').text('showSheet1Info');
}

// sheet2
var sheet2 = new Vue({
  el: '#sheet2',
  store,
  data: {
    label: 'Furniture List',
    columns: [
      { name:'name', display:'Name', edit:'input' },
      { name:'value', display:'Value', edit:'input' },
      { name:'description', display:'Description', edit:'description' }
    ],
    items: [
      { name:'table', value:20 },
      { name:'bench', value:25 },
      { name:'chair', value:22 },
      { name:'shelf', value:38 }
    ]
  },
  components: {
    SmartSheet2
  }
});

// sheet3
var sheet2 = new Vue({
  el: '#sheet3',
  store,
  data: {
    label: 'Furniture List',
    columns: [
      { name:'firstname', display:'First Name', edit:'input' },
      { name:'lastname', display:'Last Name', edit:'input' },
      { name:'fullname', display:'Full Name', edit:false }
    ],
    items: [
      { firstname:'alex', lastname:'tribec' },
      { firstname:'ben', lastname:'aflec' },
      { firstname:'eric', lastname:'boldwin' }
    ]
  },
  components: {
    SmartSheet3
  }
});

