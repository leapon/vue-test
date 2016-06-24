import Vue from 'vue'
import store from './vuex/store'
import { setform } from './vuex/actions'

import SmartForm1 from './components/SmartForm1.vue'

// form1
var form1 = new Vue({
  el: '#form1',
  store,
  data: {
    columns: [
      { name:'firstname', display:'First Name', type:'input' },
      { name:'lastname', display:'Last Name', type:'input' }
    ]
  },
  components: {
    SmartForm1
  }
});

var form = {
  firstname:'Mary',
  lastname:'Poppin'
};
setform(store, form);
