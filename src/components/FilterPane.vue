<template>
  <div>
    <p>Test</p>
    <hr/>
    <div v-for="field in fields">
      <div v-if="field.type == 'one'">
        <select-one :label=field.name :values=field.values></select-one>
      </div>
      <div v-if="field.type == 'multi'">
        <test-select2 :label=field.name :values=field.values></test-select2>
      </div>
      <br/>
    </div>
  </div>
</template>

<script>
import TestSelect2 from './TestSelect2.vue'
import SelectOne from './SelectOne.vue'

export default {
  props: ['fields'],
  data () {
    return {
      msg: ''
    }
  },
  components: {
    TestSelect2,
    SelectOne
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
