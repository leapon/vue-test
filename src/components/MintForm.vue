<template>
  <p>{{ label }}</p>
  <hr/>
  <div>
    <mt-checklist
      :value.sync="value"
      :options="options">
    </mt-checklist>
  </div>
  <br/>
  <div>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
  <hr/>
</template>

<script>
import Vue from 'vue';
import MintUI from 'mint-ui';
Vue.use(MintUI);

module.exports = {
  props: ['label', 'value', 'options'],
  components: { MintUI },
  methods:{}
}
</script>

<style>
</style>
