<template>
  <tr>
    <td v-for="column in columns">
      <template v-if="column.edit">
        <input class="smartsheet-input-cell" value="{{ item[column.name] }}" />
      </template>
      <template v-else>
        {{ hash1 }}
      </template>
    </td>
  </tr>
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
