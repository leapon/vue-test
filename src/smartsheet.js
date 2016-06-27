import Vue from 'vue'
import store from './vuex/store'
import { setitems, setStoreItem } from './vuex/actions'

import SmartSheet from './components/SmartSheet.vue'
import SmartSheetInfo from './components/SmartSheetInfo.vue'
import SmartSheet1 from './components/SmartSheet1.vue'
import SmartSheet2 from './components/SmartSheet2.vue'
import SmartSheet3 from './components/SmartSheet3.vue'
import SmartSheet4 from './components/SmartSheet4.vue'

function modelToColumns() {
  var columns = [];

  return columns;
}

var userModel = {
  firstname: {
    type: 'string'
  },
  lastname: {
    type: 'string'
  },
  email: {
    type: 'string',
    subtype: {
      type: 'email'
    }
  },
  roles: {
    type: 'array',
    subtype: {
      type:'string'
    }
  },
  status: {
    type: 'string',
    values: ['active', 'inactive']
  },
  create_date: {
    type: 'date'
  },
  create_by: {
    type: 'string'
  }
};

// sheet0
var storeItemName = 'items';
var sheet0 = new Vue({
  el: '#sheet0',
  store,
  data: {
    name: storeItemName,
    caption: 'User List',
    columns: [
      { name:'firstname', display:'First Name', type:'string' },
      { name:'lastname', display:'Last Name', type:'string' },
      { name:'roles', display:'Roles', type:'select-multi', values:['user', 'manager', 'admin'] },
      { name:'status', display:'Status', type:'select-one', values:['active', 'inactive'] },
      { name:'create_date', display:'Create Date', type:'date' },
      { name:'create_by', display:'Created By', type:'string' }
    ]
  },
  components: {
    SmartSheet
  }
});

var testUsers = [
  { firstname:'Max', lastname:'Philps', roles:[], status:'active', create_date:'', create_by:'' },
  { firstname:'Bent', lastname:'Aflec', roles:[], status:'active', create_date:'', create_by:'' },
  { firstname:'Zack', lastname:'Milton', roles:[], status:'inactive', create_date:'', create_by:'' }
];
setStoreItem(store, storeItemName, testUsers);

// sheet info0
var info0 = new Vue({
  el: '#info0',
  store,
  data: {
    name: storeItemName
  },
  components: {
    SmartSheetInfo
  }
});

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
    SmartSheet1
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
var sheet3 = new Vue({
  el: '#sheet3',
  store,
  data: {
    label: 'User List',
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

// sheet4
var sheet4 = new Vue({
  el: '#sheet4',
  store,
  data: {
    columns: [
      { name:'firstname', display:'First Name', type:'input' },
      { name:'lastname', display:'Last Name', type:'input' },
      { name:'fullname', display:'Full Name', type:'view' }
    ]
  },
  components: {
    SmartSheet4
  }
});

// sheet info4
var info4 = new Vue({
  el: '#info4',
  store,
  data: {
    name: 'items'
  },
  components: {
    SmartSheetInfo
  }
});

var items = [
  { firstname:'Mary', lastname:'Poppin', fullname:'', roles:[], status:'active', create_date:'', create_by:'' },
  { firstname:'Ben', lastname:'Aflec', fullname:'', roles:[], status:'active', create_date:'', create_by:'' },
  { firstname:'Eric', lastname:'Boldwin', fullname:'', roles:['manager'], status:'inactive', create_date:'', create_by:'' }
];
setitems(store, items);
