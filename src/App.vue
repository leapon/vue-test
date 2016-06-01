<template>
  <div>
    <leap-header></leap-header>
    <br/>
    <h4 style="padding-left:10px;">body content: {{ msg }}</h4>
    <br/>
    <second-counter></second-counter>
    <br/>
    <leap-footer></leap-footer>
  </div>
  <br/><br/>
  <div>
    <h4>Select Test</h4>
    <test-select></test-select>
    <br/>
    <select-one
      :label="Select State"
      :values='[{"name":"MD"},{"name":"VA"}]'
    ></select-one>
    <br/>
    <select-multi
      :label="Select States"
      :values='[{"name":"MD"},{"name":"VA"},{"name":"DC"}]'
    ></select-multi>
  </div>
  <br/><br/>
  <div>
    <manual-counter></manual-counter>
  </div>
  <hr/>
  <div>
    <manual-counter-control></manual-counter-control>
  </div>
  <hr/>
  <div>
    <manual-counter-display></manual-counter-display>
  </div>
</template>

<script>
import LeapHeader from './components/LeapHeader.vue'
import LeapFooter from './components/LeapFooter.vue'
import SecondCounter from './components/SecondCounter.vue'
import TestSelect from './components/TestSelect.vue'
import SelectOne from './components/SelectOne.vue'
import SelectMulti from './components/SelectMulti.vue'
import ManualCounter from './components/ManualCounter.vue'
import ManualCounterControl from './components/ManualCounterControl.vue'
import ManualCounterDisplay from './components/ManualCounterDisplay.vue'

export default {
  data () {
    return {
      msg: 'Nice Vue'
    }
  },
  components: {
    LeapHeader,
    LeapFooter,
    SecondCounter,
    TestSelect,
    SelectOne,
    SelectMulti,
    ManualCounter,
    ManualCounterControl,
    ManualCounterDisplay
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
