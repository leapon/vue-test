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
  computed: {
    filterdata: function() {
      var userdata = {};
      for (let child of this.$children) {
        console.log('>>> child:', child.$get('value'));
        userdata[child.$get('name')] = child.$get('value');
      }
      console.log('>>> filter userdata:', userdata);
      return userdata;
    }
  },
  activate: function (done) {
    console.log('>>> activate FilterPane');
    done();
  },
  methods: {
    apply: function () {
      // collect filter values from child components
      var userdata = {};
      for (let child of this.$children) {
        userdata[child.$get('name')] = child.$get('value');
      }
      console.log('>>> apply - userdata:', userdata);
      this.$dispatch('filter-change', userdata);
    }
  },
  events: {
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
