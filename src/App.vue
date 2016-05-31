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
</template>

<script>
import LeapHeader from './components/LeapHeader.vue'
import LeapFooter from './components/LeapFooter.vue'
import SecondCounter from './components/SecondCounter.vue'
import TestSelect from './components/TestSelect.vue'
import SelectOne from './components/SelectOne.vue'
import SelectMulti from './components/SelectMulti.vue'

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
    SelectMulti
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
