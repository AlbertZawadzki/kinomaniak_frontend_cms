import * as actions from "../actionNames/currency"

const currencies = (state = { data: [], was_fetched: false }, action) => {
  switch (action.type) {
    case actions.CURRENCIES_SET:
      state.data = action.data
      state.was_fetched = true
      return state
    default:
      return state
  }
}

export default currencies
