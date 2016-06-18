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
    <mt-radio
      title="radio list"
      :value.sync="value2"
      :options="['optionA', 'optionB', 'optionC']">
    </mt-radio>
  </div>
  <br/>
  <div>
    <mt-field label="username" placeholder="Input username"></mt-field>
    <mt-field label="email" placeholder="Input email" type="email"></mt-field>
    <mt-field label="password" placeholder="Input password" type="password"></mt-field>
    <mt-field label="phone" placeholder="Input tel" type="tel"></mt-field>
    <mt-field label="website" placeholder="Input website" type="url"></mt-field>
    <mt-field label="number" placeholder="Input number" type="number"></mt-field>
    <mt-field label="birthday" placeholder="Input birthday" type="date"></mt-field>
    <mt-field label="introduction" placeholder="introduction" type="textarea" rows="4"></mt-field>
  </div>
  <br/>
  <div>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
  <br/>
  <div>
    <mt-range
      :value.sync="rangeValue"
      :min="10"
      :max="90"
      :step="10"
      :bar-height="5">
    </mt-range>
  </div>
  <br/>
  <div>
    <mt-range :value.sync="rangeValue">
      <div slot="start">0</div>
      <div slot="end">100</div>
    </mt-range>
  </div>
  <br/>
</template>

<script>
import Vue from 'vue';
import MintUI from 'mint-ui';
Vue.use(MintUI);

module.exports = {
  props: ['label', 'value', 'value2', 'rangeValue', 'options'],
  components: { MintUI },
  methods:{}
}
</script>

<style>
</style>
