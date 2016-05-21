<template>
  <leap-header></leap-header>
    <h1>{{ msg }}</h1>
  <leap-footer></leap-footer>
  <hr/>
  
  <div>
    Calendar Select:
    <calendar defaultDate="2016-03-29" dateType="day" dateValue="2016-03-29"></calendar>
  </div>
  <hr/>
  
</template>

<script>
import LeapHeader from './components/LeapHeader.vue'
import LeapFooter from './components/LeapFooter.vue'
import CompA from './components/A.vue'
import CompB from './components/B.vue'
import calendar from 'vue-calendar'

export default {
  data () {
    return {
      msg: 'Nice Vue'
    }
  },
  components: {
    LeapHeader,
    LeapFooter,
    CompA,
    CompB,
    calendar
  }
}
</script>

<style lang="stylus">
font-stack = Helvetica, sans-serif
primary-color = #999
body
  font 100% font-stack
  color primary-color

.logo
  width 40px
  height 40px
</style>
