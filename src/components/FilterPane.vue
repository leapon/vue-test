<template>
  <div>
    <p>Test</p>
    <hr/>
    <div v-for="field in fields">
    
      <test-select2 :label=field.name :values=field.values></test-select2>
      <br/>
      
    </div>
  </div>
</template>

<script>
import TestSelect2 from './TestSelect2.vue'

export default {
  props: ['fields'],
  data () {
    return {
      msg: ''
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
