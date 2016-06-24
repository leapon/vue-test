<template>
  <table class="table table-bordered table-striped">
    <tr>
      <th v-for="column in columns">{{ column.display }}</th>
    </tr>
    <tr v-for="(index, item) in items">
      <td v-for="column in columns">
        <template v-if="column.edit">
          <input class="smartsheet-input-cell"
            data-row-index="{{ index }}"
            data-column="{{ column.name }}"
            v-model="item[column.name]" 
            @change="cellChange"/>
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
    cellChange: function(event) {
      console.log('>>> cellChange:', event);
      console.log('>>> cellChange:', event.srcElement);
      console.log('>>> cellChange:', event.srcElement.value);
      console.log('>>> cellChange:', $(event.srcElement).attr('data-row-index'));
      console.log('>>> cellChange:', $(event.srcElement).attr('data-column'));
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
}
.smartsheet-input-cell:focus {
  outline: none;
}
</style>
