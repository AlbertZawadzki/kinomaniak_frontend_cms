import * as actions from "../actionNames/request"

export const setUser = (data) => ({
  type: actions.USER_SET,
  data: data,
})

export const setToken = (data) => ({
  type: actions.TOKEN_SET,
  data: data,
})

export const setCsrf = (data) => ({
  type: actions.CSRF_SET,
  data: data,
})
