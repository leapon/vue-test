var vm = new Vue({
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
