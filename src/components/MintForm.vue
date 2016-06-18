<template>
  <p>MintForm</p>
  <p>{{ label }}</p>
  <hr/>
  <div>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
  <hr/>
  <div>
    <mt-button size="small">small</mt-button>
    <mt-button size="normal">normal</mt-button>
    <mt-button size="large">large</mt-button>
  </div>
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
