<template>
  <p>{{ filter2 }}</p>
  <hr/>
  <div v-for="dataitem in dataitems">
    <p>{{ dataitem.id }} - {{ dataitem.name }}</p>
  </div>
  <hr/>
  <vuetable
    :api-url="dataurl"
    :fields="columns"
    :item-actions="itemActions"
    pagination-path=""
    :sort-order="sortOrder"
    table-class="table table-bordered table-striped table-hover"
    ascending-icon="glyphicon glyphicon-chevron-up"
    descending-icon="glyphicon glyphicon-chevron-down"
    pagination-class=""
    pagination-info-class=""
    pagination-component-class=""
    :pagination-component="paginationComponent"
    :append-params="moreParams"
    :per-page="perPage"
    wrapper-class="vuetable-wrapper"
    table-wrapper=".vuetable-wrapper"
    loading-class="loading"
  ></vuetable>
</template>

<script>
export default {
  props: ['dataitems'],
  data () {
    return {
      columns: [
          'name',
          'nickname',
          'email',
          'birthdate',
          'gender',
          '__actions'
      ]
    }
  },
  computed: {
    filter2: function() {
      return JSON.stringify(this.filter) + '-2';
    },
    dataurl: function() {
      return './lib/data/vuetable-example-users.json' + '?a=1&filter=' + JSON.stringify(this.filter)
    }
  },
  vuex: {
    getters: {
      filter: state => state.filter
    }
  },
  activate: function (done) {
    console.log('>>> activate UserTable');
    done();
  },
  components: {
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
