var vm1 = new Vue({
  components: {
    alert: VueStrap.alert,
    datepicker: VueStrap.datepicker
  },
  el: "#strap1",
  data: {
    showRight: false,
    showTop: false,
    disabled: [],
    value: 'Oct/06/2015',
    format: ['MMM/dd/yyyy'],
    reset: true
  }
})

var vm2 = new Vue({
  components: {
    radio: VueStrap.radioBtn,
    radioGroup: VueStrap.radioGroup
  },
  el: "#strap2",
  data: {
    checkboxValue: [],
    radioValue: ''
  }
})
