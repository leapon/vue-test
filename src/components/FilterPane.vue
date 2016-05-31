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
      var data = {};
      for (let child of this.$children) {
        console.log('>>> child:', child.$get('value'));
        data[child.$get('name')] = child.$get('value');
      }
      console.log('>>> filter data:', data);
      return data;
    }
  },
  activate: function (done) {
    console.log('>>> activate');
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
