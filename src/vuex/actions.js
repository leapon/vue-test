export const increment = ({ dispatch }) => {
  dispatch('INCREMENT')
}

export const decrement = ({ dispatch }) => {
  dispatch('DECREMENT')
}

export const setfilter = ({ dispatch }, filter) => {
  dispatch('SETFILTER', filter)
}
