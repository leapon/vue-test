<template>
  <p>MintForm</p>
  <p>{{ label }}</p>
  <hr/>
  
</template>

<script>
import Vue from 'vue';
import MintUI from 'mint-ui';
Vue.use(MintUI);

module.exports = {
  props: ['label'],
  components: { MintUI },
  methods:{}
}
</script>

<style>
</style>
