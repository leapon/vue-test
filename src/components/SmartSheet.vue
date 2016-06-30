<template>
  <table class="table table-bordered">
    <caption>{{ caption }}</caption>
    <tr>
      <th v-for="column in columns">{{ column.display }}</th>
    </tr>
    <tr v-for="(index, item) in items">
      <td v-for="column in columns">
        <template v-if="column.type == 'string'">
          <input class="smartsheet-input-cell"
            data-row-index="{{ index }}"
            data-column="{{ column.name }}"
            v-model="item[column.name]"
            @change="cellChange"/>
        </template>
        <template v-if="column.type == 'date'">
          <input class="smartsheet-input-cell"
            data-row-index="{{ index }}"
            data-column="{{ column.name }}"
            v-model="item[column.name]"
            @change="cellChange"/>
        </template>
        <template v-if="column.type == 'select-one'">
          <select
            class="form-control"
            data-column="{{ column.name }}"
            v-model="item[column.name]"
            @change="cellChange">
            <option v-for="value in column.values">{{ value }}</option>
          </select>
        </template>
        <template v-if="column.type == 'select-multi'">
          <select
            class="form-control"
            data-column="{{ column.name }}"
            v-model="item[column.name]"
            @change="cellChange"
            multiple>
            <option v-for="value in column.values">{{ value }}</option>
          </select>
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
import store from '../vuex/store.js';
import { changeStoreItem } from '../vuex/actions';

export default {
  props: ['name', 'caption', 'columns'],
  data: function() {
    return {};
  },
  vuex: {
    getters: {
      items: state => state.items
    },
    actions: {
      changeStoreItem
    }
  },
  components: {
  },
  computed: {
    /*
    items: function() {
      return store.state[this.name];
    }
    */
  },
  methods: {
    cellChange: function(event) {
      var index = $(event.srcElement).attr('data-row-index');
      var column = $(event.srcElement).attr('data-column');
      var value = event.srcElement.value;
      console.log('>>> cellChange:', this.name, index, column, value);
      /*
      console.log('>>> cellChange:', event.srcElement);
      console.log('>>> cellChange:', this.name, index, column, value);
      changeStoreItem(this.$store, this.name, index, column, value)
      */
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
