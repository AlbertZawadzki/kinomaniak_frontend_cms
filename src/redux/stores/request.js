import * as actions from "../actionNames/request"

const initCsrf = Math.random().toString(36).substring(7)

const request = (
  state = {
    data: {
      csrf_name: initCsrf,
      user: null,
      country_code: "unknown",
      country: "unknown",
      longitude: "unknown",
      latitude: "unknown",
    },
  },
  action,
) => {
  switch (action.type) {
    case actions.USER_SET:
      state.data.user = action.data
      return state
    case actions.CSRF_NAME_SET:
      state.data.csrf_name = action.data
      return state
    case actions.COUNTRY_CODE_SET:
      state.data.country_code = action.data
      return state
    case actions.COUNTRY_SET:
      state.data.country = action.data
      return state
    case actions.LONGITUDE_SET:
      state.data.longitude = action.data
      return state
    case actions.LATITUDE_SET:
      state.data.latitude = action.data
      return state
    default:
      return state
  }
}

export default request