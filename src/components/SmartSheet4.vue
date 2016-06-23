<template>
  <table class="table table-bordered table-striped">
    <tr>
      <th v-for="column in columns">{{ column.display }}</th>
    </tr>
    <tr v-for="item in items">
      <td v-for="column in columns">
        <template v-if="column.edit">
          <input class="smartsheet-input-cell" v-model="item[column.name]" />
        </template>
      </td>
    </tr>
  </table>
  <br/>
  <p>filter: {{ filter|json }}</p>
</template>

<script>
import { setfilter } from '../vuex/actions';

export default {
  props: ['columns', 'items'],
  data: function() {
    return {};
  },
  vuex: {
    getters: {
      filter: state => state.filter
    },
    actions: {
      setfilter
    }
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
