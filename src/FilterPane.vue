<template>
  <div>
    <p>Test</p>
    <test-select2></test-select2>
    <hr/>
    <p v-for="field in fields">{{ field.name }}</p>
    
  </div>
</template>

<script>
import TestSelect2 from './components/TestSelect2.vue'

export default {
  props: ['fields'],
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
