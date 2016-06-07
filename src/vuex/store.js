import Vue from 'vue'
import Vuex from 'vuex'
import jquery from 'jquery'

Vue.use(Vuex)

// app initial state
const state = {
  count: 0,
  filter: {},
  fields: [],
  users: []
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
    /*
    // async call to get users
    var url = '/lib/data/vuetable-example-users.json';
    jquery.get(url, function(data) {
      console.log('>>> data:', data);
      state.dispatch({
        type: SETUSERS,
        payload: data.data
      });
    });
    */
  },
  SETUSERS(state, users) {
    state.users = users;
  }
}

// create the store
export default new Vuex.Store({
  state,
  mutations
})
