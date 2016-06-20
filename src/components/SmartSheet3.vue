<template>
  <p>{{ label }}</p>
  <p>{{ items|json }}</p>
  <table class="table table-bordered table-striped"">
    <tr>
      <th v-for="column in columns">{{ column.display }}</th>
    </tr>
    <tr v-for="item in items">
      <td v-for="column in columns">
        <template v-if="column.edit">
          <input class="smartsheet-input-cell" v-model="item[column.name]" />
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
  components: {
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style>
.smartsheet-input-cell {
  width: 100%;
  background: transparent;
  font-size: 13px;
  box-sizing: border-box;
}
.smartsheet-input-cell:focus {
  outline: none;
}
</style>
