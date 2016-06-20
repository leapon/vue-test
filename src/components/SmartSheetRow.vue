<template>
  <div class="table-body-row">
    <div class="table-body-cell" v-for="column in columns">
      <template v-if="column.edit">
        <input class="smartsheet-input-cell" v-model="item[column.name]" />
      </template>      
      <template v-else>
        <div class="read-only-cell">{{ description }}</div>
      </template>
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
    description: function() {
      var result = this.item.name + '/' + this.item.value;
      return result;
    }
  },
  methods: {
  }
}
</script>

<style>
.table-body-row {
  /* border: solid 1px #f2f2f2; */
  /* height: 40px; */
  clear: both;
}
.table-body-cell {
  float: left;
  padding: 5px;
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
.read-only-cell {
  width: 120px;
}
</style>
