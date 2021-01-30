import * as actions from "../actionNames/currency"

const currencies = (state = { data: [], was_fetched: false }, action) => {
  switch (action.type) {
    case actions.CURRENCIES_SET:
      state.was_fetched = !!action.data
      state.data = action.data || []
      return state
    default:
      return state
  }
}

export default currencies
