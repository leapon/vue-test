<template>

  <alert type="info" >
    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
  </alert>

  <alert type="danger" dismissable>
    <strong>Oh snap!</strong> Change a few things up and try submitting again.
  </alert>

  <alert type="warning" dismissable>
    <strong>Warning!</strong> Better check yourself, you're not looking too good.
  </alert>
  <hr/>
  
  <accordion :one-at-atime="checked">
    <panel header="Panel #1" :is-open="true">
      sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
    </panel>
    <panel header="Panel #2">
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio
    </panel>
    <panel header="Panel #3">
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio
    </panel>
    <panel header="Panel #4">
      Ut enim ad minim veniam, quis nostrud exercitatio
    </panel>
  </accordion>
  
</template>

<script>
import { alert, panel, accordion } from 'vue-strap'

export default {
  data () {
    return {
      msg: 'Nice Vue'
    }
  },
  components: {
    alert,
    panel,
    accordion
  }
}
</script>

<style>
</style>
