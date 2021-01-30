import * as actions from "../actionNames/request"

const request = (
  state = { data: { token: null, csrf: null, user: null } },
  action,
) => {
  switch (action.type) {
    case actions.TOKEN_SET:
      state.data.token = action.data
      return state
    case actions.CSRF_SET:
      state.data.csrf = action.data
      return state
    case actions.USER_SET:
      state.data.user = action.data
      return state
    default:
      return state
  }
}

export default request
