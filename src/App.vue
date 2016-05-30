<template>
  <div>
    <leap-header></leap-header>
      <h4 style="padding-left:10px;">body content: {{ msg }}</h4>
    <leap-footer></leap-footer>
  </div>
  <br/><br/>
  <div>
    <h4>Select Test</h4>
    <test-select></test-select>
  </div>
</template>

<script>
import LeapHeader from './components/LeapHeader.vue'
import LeapFooter from './components/LeapFooter.vue'
import TestSelect from './components/TestSelect.vue'

export default {
  data () {
    return {
      msg: 'Nice Vue'
    }
  },
  components: {
    LeapHeader,
    LeapFooter,
    TestSelect
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
