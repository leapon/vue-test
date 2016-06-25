import Vue from 'vue'
import store from './vuex/store'
import { setform } from './vuex/actions'

import SmartForm1 from './components/SmartForm1.vue'
import SmartForm2 from './components/SmartForm2.vue'

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

// form2
var form2 = new Vue({
  el: '#form2',
  store,
  data: {
    columns: [
      { name:'firstname', type:'input' },
      { name:'lastname', type:'input' },
      { name:'gender', type:'select', values:['male', 'female'] },
      { name:'comment', type:'text' }
    ]
  },
  components: {
    SmartForm2
  }
});

// set form data
var form = {
  firstname: 'Jack',
  lastname: 'Bruce',
  gender: 'male',
  comment: 'hello world'
};
setform(store, form);
