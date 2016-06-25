<template>
  <table class="table table-bordered">
    <tr>
      <th v-for="column in columns">{{ column.display }}</th>
    </tr>
    <tr v-for="(index, item) in items">
      <td v-for="column in columns">
        <template v-if="column.type == 'input'">
          <input class="smartsheet-input-cell"
            data-row-index="{{ index }}"
            data-column="{{ column.name }}"
            v-model="item[column.name]"
            @change="cellChange"/>
        </template>
        <template v-if="column.type == 'view'">
          <span
            data-row-index="{{ index }}"
            data-column="{{ column.name }}"
          >{{ item[column.name] }}</span>
        </template>
      </td>
    </tr>
  </table>
  <br/>
</template>

<script>
import { changeitem } from '../vuex/actions';

export default {
  props: ['columns'],
  data: function() {
    return {};
  },
  vuex: {
    getters: {
      items: state => state.items
    },
    actions: {
      changeitem
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
    cellChange: function(event) {
      var index = $(event.srcElement).attr('data-row-index');
      var column = $(event.srcElement).attr('data-column');
      var value = event.srcElement.value;
      changeitem(this.$store, index, column, value)
    }
  }
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
