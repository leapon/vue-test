<template>
  <p>{{ label }}</p>
  <table class="table table-bordered table-striped"">
  <tr>
    <th v-for="column in columns">{{ column.display }}</th>
  </tr>
  <tr v-for="item in items">
    <td v-for="column in columns">
      <template v-if="column.edit">
        <input class="smartsheet-input-cell" value="{{ item[column.name] }}" />
      </template>
      <template v-else>
        {{ hash1 }}
      </template>
    </td>
  </tr>
  </table>
</template>

<script>
export default {
  props: ['label', 'columns', 'items'],
  data: function() {
    return {};
  },
  computed: {
    hash1: function() {
      //console.log('>>> hash1:', this);
      //return this.$get('columns') ;
      return 'hash1';
    },
    sheetdata: function() {
      console.log('>>> in computed sheetdata');
      var data = { msg:'test sheetdata' };
      return data;
    }
  },
  methods: {
    getData: function () {
      var data = { msg:'test' };
      return data;
      /*
      // collect filter values from child components
      var userdata = {};
      for (let child of this.$children) {
        userdata[child.$get('name')] = child.$get('value');
      }
      console.log('>>> apply - userdata:', userdata);
      //this.$dispatch('filter-change', userdata);
      setfilter(this.$store, userdata);
      */
    }
  },
}
</script>

<style>
.smartsheet-input-cell {
  width: 100%;
  background: transparent;
  font-size: 13px;
  box-sizing: border-box;
  border: solid 0px #fff;
}
.smartsheet-input-cell:focus {
  outline: none;
}
</style>
