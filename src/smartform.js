import Vue from 'vue'
import store from './vuex/store'
import { setform } from './vuex/actions'

import SmartForm from './components/SmartForm.vue'
import SmartForm1 from './components/SmartForm1.vue'
import SmartForm2 from './components/SmartForm2.vue'
import SmartFormInfo from './components/SmartFormInfo.vue'

// form0
var form0 = new Vue({
  el: '#form0',
  store,
  data: {
    mode: 'inline',
    columns: [
      { name:'firstname', type:'input' },
      { name:'lastname', type:'input' }
    ]
  },
  components: {
    SmartForm
  }
});

// form0b
var form0b = new Vue({
  el: '#form0b',
  store,
  data: {
    columns: [
      { name:'firstname', type:'input' },
      { name:'lastname', type:'input' },
      { name:'gender', type:'select-one', values:['male', 'female'] },
      { name:'course', type:'select-multi', values:['math', 'english', 'pe'] },
      { name:'grade', type:'select-radio', values:['grade1', 'grade2', 'grade3'] },
      { name:'interest', type:'select-checkbox', values:['swimming', 'soccer', 'basketball', 'baseball'] },
      { name:'comment', type:'text' }
    ]
  },
  components: {
    SmartForm
  }
});

// form1
var form1 = new Vue({
  el: '#form1',
  store,
  data: {
    mode: 'inline',
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
      { name:'gender', type:'select-one', values:['male', 'female'] },
      { name:'course', type:'select-multi', values:['math', 'english', 'pe'] },
      { name:'grade', type:'select-radio', values:['grade1', 'grade2', 'grade3'] },
      { name:'interest', type:'select-checkbox', values:['swimming', 'soccer', 'basketball', 'baseball'] },
      { name:'comment', type:'text' }
    ]
  },
  components: {
    SmartForm2
  }
});

var info0 = new Vue({
  el: '#info0',
  store,
  data: {
  },
  components: {
    SmartFormInfo
  }
});

// set form data
var form = {
  firstname: 'Jack',
  lastname: 'Bruce',
  gender: 'male',
  course: ['math', 'pe'],
  grade: 'grade1',
  interest: ['soccer', 'baseball'],
  comment: 'hello world'
};
setform(store, form);
