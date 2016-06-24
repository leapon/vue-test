import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// app initial state
const state = {
  count: 0,
  filter: {},
  fields: [],
  users: [],
  // for smartsheet
  columns: [],
  items: []
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
    console.log('>>>', state.items[index]);
    state.items[index].fullname = state.items[index].firstname + ',' + state.items[index].lastname;
  }
}

// create the store
export default new Vuex.Store({
  state,
  mutations
})
