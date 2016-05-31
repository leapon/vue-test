<template>
    <p>Filter Options</p>
    <hr/>
    <div v-for="field in fields">
      <div v-if="field.type == 'one'">
        <select-one :name=field.name :label=field.label :values=field.values></select-one>
      </div>
      <div v-if="field.type == 'multi'">
        <select-multi :name=field.name :label=field.label :values=field.values></select-multi>
      </div>
      <br/>
    </div>
    <hr/>
    <button v-on:click="apply">Apply</button>
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
  },
  activate: function (done) {
    console.log('>>> activate');
    done();
  },
  methods: {
    apply: function () {
      console.log('>>> apply');
      // collect filter values from child components
      for (let child of this.$children) {
        console.log('>>> child:', child.$get('value'));
      }
    }
  },
  events: {
    'filter-change': function () {
      console.log('>>> filter change event');
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
