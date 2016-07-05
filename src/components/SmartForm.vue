<template>
  <form class="{{ form_class }}">
    <template v-for="column in columns">
    <div class="form-group">
      <label for="{{ column.name }}">{{ column.display || column.name }}</label>
      <template v-if="column.type == 'input'">
        <input
          class="form-control"
          data-column="{{ column.name }}"
          v-model="form[column.name]"
          @change="formValueChange"/>
      </template>
      <template v-if="column.type == 'select-one'">
        <select
          class="form-control"
          data-column="{{ column.name }}"
          v-model="form[column.name]"
          @change="formValueChange">
          <option v-for="value in column.values">{{ value }}</option>
        </select>
      </template>
      <template v-if="column.type == 'select-multi'">
        <select
          class="form-control"
          data-column="{{ column.name }}"
          v-model="form[column.name]"
          @change="formValueChange"
          multiple>
          <option v-for="value in column.values">{{ value }}</option>
        </select>
      </template>
      <template v-if="column.type == 'select-checkbox'">
        <div class="checkbox" v-for="value in column.values">
          <label>
            <input type="checkbox"
              name="{{ column.name }}"
              value="{{ value }}"
              data-column="{{ column.name }}"
              v-model="form[column.name]"
              @change="formValueChange" />
            {{ value }}
          </label>
        </div>
      </template>
      <template v-if="column.type == 'select-radio'">
        <div class="radio" v-for="value in column.values">
          <label>
            <input type="radio"
              name="{{ column.name }}"
              value="{{ value }}"
              data-column="{{ column.name }}"
              v-model="form[column.name]"
              @change="formValueChange" />
            {{ value }}
          </label>
        </div>
      </template>
      <template v-if="column.type == 'text'">
        <textarea
          class="form-control"
          data-column="{{ column.name }}"
          v-model="form[column.name]"
          @change="formValueChange"></textarea>
      </template>
    </div>
    </template>
</template>

<script>
// use bootstrap form for layout
//import { changeform } from '../vuex/actions';

export default {
  props: ['columns', 'mode'],
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
    form_class: function() {
      var result = '';
      console.log('compute form_class:', this.mode);
      console.log('compute form_class:', this.$get('mode'));
      if (this.$get('mode') == 'inline') {
        result = 'form-inline';
      }
      return result;
    }
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
  }
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
