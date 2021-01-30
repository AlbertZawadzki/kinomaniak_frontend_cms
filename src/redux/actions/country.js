import * as actions from "../actionNames/country"

export const setCountries = (data) => ({
  type: actions.COUNTRIES_SET,
  data: data,
})
