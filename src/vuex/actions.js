import jquery from 'jquery'

export const increment = ({ dispatch }) => {
  dispatch('INCREMENT')
}

export const decrement = ({ dispatch }) => {
  dispatch('DECREMENT')
}

export const setfilter = ({ dispatch, state }, filter) => {
  dispatch('SETFILTER', filter)
  // async call to get users
  var url = '/lib/data/vuetable-example-users.json';
  jquery.get(url, function(data) {
    dispatch('SETUSERS', data.data);
  });
}

export const setStoreItem = ({ dispatch, state }, name, values) => {
  dispatch('SETSTOREITEM', name, values)
}

export const setitems = ({ dispatch, state }, items) => {
  dispatch('SETITEMS', items)
}

export const changeitem = ({ dispatch, state }, index, column, value) => {
  dispatch('CHANGEITEM', index, column, value)
}

export const setform = ({ dispatch, state }, form) => {
  dispatch('SETFORM', form)
}
export const changeform = ({ dispatch, state }, column, value) => {
  //dispatch('CHANGEITEM', index, column, value)
}
