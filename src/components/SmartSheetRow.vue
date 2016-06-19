<template>
  <div class="table-body-row">
    <div class="table-body-cell" v-for="column in columns">
      <input class="smartsheet-input-cell" value="{{ column.name }}" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['columns', 'item'],
  data: function() {
    return {};
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>
.table-body-row {
  border: solid 1px #f2f2f2;
  height: 40px;
  padding: 5px;
  clear: both;
}
.table-body-cell {
  float: left;
  border: solid 1px #f2f2f2;
}
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
