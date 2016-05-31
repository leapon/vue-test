<template>
  <div>
    <test-select></test-select>
    <br/>
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
import TestSelect from './components/TestSelect.vue'
import TestSelect2 from './components/TestSelect2.vue'

export default {
  data () {
    return {
      msg: 'Nice Vue'
    }
  },
  components: {
    TestSelect,
    TestSelect2
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
