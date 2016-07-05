<template>
  <table class="table table-form">
    <tr v-for="column in columns">
      <td class="cell-label">{{ column.display }}</td>
      <td>
        <template v-if="column.type == 'input'">
          <input class="form-control"
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
.table-form td.cell-label {
  padding-top: 15px;
}
.table-form th, .table-form td {
    border-top: none !important;
    border-left: none !important;
}
</style>
