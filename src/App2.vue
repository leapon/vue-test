<template>
  <leap-header></leap-header>
    <h1>{{ msg }}</h1>
  <leap-footer></leap-footer>
  <hr/>

  <alert type="success" >
  <strong>Well Done!</strong>
    You successfully read this important alert message.
  </alert>

  <alert type="info" >
    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
  </alert>

  <alert type="danger" dismissable>
    <strong>Oh snap!</strong> Change a few things up and try submitting again.
  </alert>

  <alert type="warning" dismissable>
    <strong>Warning!</strong> Better check yourself, you're not looking too good.
  </alert>
  <hr/>
  
  <div>
    Calendar Select:
    <calendar defaultDate="2016-03-29" dateType="day" dateValue="2016-03-29"></calendar>
  </div>
  <hr/>
  
  <accordion :one-at-atime="checked">
    <panel header="Panel #1" :is-open="true">
      sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
    </panel>
    <panel header="Panel #2">
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio
    </panel>
    <panel header="Panel #3">
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio
    </panel>
    <panel header="Panel #4">
      Ut enim ad minim veniam, quis nostrud exercitatio
    </panel>
  </accordion>
  
</template>

<script>
import LeapHeader from './components/LeapHeader.vue'
import LeapFooter from './components/LeapFooter.vue'
import CompA from './components/A.vue'
import CompB from './components/B.vue'

import { alert, panel, accordion } from 'vue-strap'
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
    alert,
    panel,
    accordion,
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
