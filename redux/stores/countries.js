import * as actions from "../actionNames/country"

const countries = (state = { data: [], was_fetched: false }, action) => {
  switch (action.type) {
    case actions.COUNTRIES_SET:
      state.data = action.data
      state.was_fetched = true
      return state
    default:
      return state
  }
}

export default countries
