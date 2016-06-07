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
