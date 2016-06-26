import Vue from 'vue'
import Vuex from 'vuex'
import { updateItem } from '../services/support.js'

Vue.use(Vuex)

// app initial state
const state = {
  count: 0,
  filter: {},
  fields: [],
  users: [],
  // for smartsheet
  columns: [],
  items: [],
  // for smartform
  form: {}
}

// define possible mutations
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  },
  SETFILTER (state, filter) {
    state.filter = filter;
    state.fields = [];
    for (var p in filter) {
        state.fields.push(p);
    }
  },
  SETUSERS(state, users) {
    state.users = users;
  },
  SETITEMS(state, items) {
    state.items = items;
  },
  CHANGEITEM(state, index, column, value) {
    state.items[index][column] = value;
    updateItem(state.items[index]);
  },
  SETFORM(state, form) {
    state.form = form;
  },
  SETSTOREITEM(state, name, values) {
    state[name] = values;
  },
  CHANGESTOREITEM(state, name, index, column, value) {
    console.log('>>> CHANGESTOREITEM', name, index, column, value);
    console.log('>>> state[name][index][column]:', state[name][index][column]);
    state[name][index][column] = value;
    //updateItem(state[name][index]);
  }
}

// create the store
export default new Vuex.Store({
  state,
  mutations
})
