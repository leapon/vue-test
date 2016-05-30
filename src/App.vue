<template>
  <div id="app">
  
  <leap-header></leap-header>
    <h1>{{ msg }}</h1>
  <leap-footer></leap-footer>
  
</template>

<script>
import LeapHeader from './components/LeapHeader.vue'
import LeapFooter from './components/LeapFooter.vue'
import CompA from './components/A.vue'
import CompB from './components/B.vue'

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
    CompB
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
