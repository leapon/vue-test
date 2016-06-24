<template>
  <table class="table table-bordered">
    <tr v-for="column in columns">
      <td>{{ column.display }}</td>
      <td>
        <template v-if="column.type == 'input'">
          <input class="smartform-input-cell"
            data-column="{{ column.name }}"
            v-model="form[column.name]"
            @change="formValueChange"/>
        </template>
      </td>
    </tr>
  </table>
  <br/>
</template>

<script>
//import { changeform } from '../vuex/actions';

export default {
  props: ['columns'],
  data: function() {
    return {};
  },
  vuex: {
    getters: {
      form: state => state.form
    },
    actions: {
      // changeform
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
    formValueChange: function(event) {
      console.log('formValueChange:', event);
      var column = $(event.srcElement).attr('data-column');
      var value = event.srcElement.value;
      console.log('formValueChange:', column, value);
      /*
      var index = $(event.srcElement).attr('data-row-index');
      var column = $(event.srcElement).attr('data-column');
      var value = event.srcElement.value;
      changeform(this.$store, index, column, value)
      */
    }
  },
}
</script>

<style>
.smartform-input-cell {
  width: 100%;
  background: transparent;
  font-size: 13px;
  box-sizing: border-box;
}
.smartform-input-cell:focus {
  outline: none;
}
</style>
