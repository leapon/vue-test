<template>
  <table class="table table-bordered table-striped">
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
// import { setfilter } from '../vuex/actions';

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
      // setfilter
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
