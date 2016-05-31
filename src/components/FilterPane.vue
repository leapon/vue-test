<template>
  <div>
    <p>Test</p>
    <hr/>
    <div v-for="field in fields">
      <div v-if="field.type == 'one'">
        <select-one :label=field.name :values=field.values></select-one>
      </div>
      <div v-if="field.type == 'multi'">
        <select-multi :label=field.name :values=field.values></select-multi>
      </div>
      <br/>
    </div>
  </div>
</template>

<script>
import SelectMulti from './SelectMulti.vue'
import SelectOne from './SelectOne.vue'

export default {
  props: ['fields'],
  data () {
    return {
      msg: ''
    }
  },
  components: {
    SelectMulti,
    SelectOne
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
