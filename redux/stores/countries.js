import * as actions from "../actionNames/country"

const countries = (state = { data: [], was_fetched: false }, action) => {
  switch (action.type) {
    case actions.COUNTRIES_SET:
      state.was_fetched = !!action.data
      state.data = action.data || []
      return state
    default:
      return state
  }
}

export default countries
