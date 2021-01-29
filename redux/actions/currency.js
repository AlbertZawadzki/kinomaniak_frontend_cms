import * as actions from "../actionNames/currency"

export const setCurrencies = (data) => ({
  type: actions.CURRENCIES_SET,
  data: data,
})
