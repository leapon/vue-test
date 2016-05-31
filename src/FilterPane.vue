<template>
  <div>
    <test-select2></test-select2>
    <br/>
    <test-select2></test-select2>
    <br/>
    <test-select2></test-select2>
    <br/>
    <test-select2></test-select2>
  </div>
</template>

<script>
import TestSelect2 from './components/TestSelect2.vue'

export default {
  data () {
    return {
      msg: 'Nice Vue'
    }
  },
  components: {
    TestSelect2
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
