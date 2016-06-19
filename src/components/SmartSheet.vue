<template>
  <p>{{ label }}</p>
  <table class="table table-bordered table-striped"">
  <tr>
    <th v-for="column in columns">{{ column.display }}</th>
  </tr>
  <tr v-for="item in items">
    <td v-for="column in columns">
      <input class="smartsheet-input-cell" value="{{ item[column.name] }}" />
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
  methods:{
  }
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
