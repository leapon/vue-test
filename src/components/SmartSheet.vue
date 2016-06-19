<template>
  <p>{{ label }}</p>
  <table class="table table-bordered table-striped"">
  <tr>
    <th v-for="column in columns">{{ column.display }}</th>
  </tr>
  <tr v-for="item in items">
    <td>
      {{ item.name }}
    </td>
    <td>
      {{ item.value }}
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
</style>
