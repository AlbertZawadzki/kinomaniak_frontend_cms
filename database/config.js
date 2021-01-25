import store from "../redux/store"
import { setCsrf, setToken, setUser } from "../redux/actions/request"
import roles from "../data/_role_types.json"

export const BACKEND_URL = "http://localhost:8000/api/" //process.env.DEV ? "localhost:8000/api" : "api"

/**
 * Return current user token
 */
export const getToken = () => {
  if (typeof window === "undefined") {
    return false
  }

  const token =
    window.localStorage.getItem("_token") ||
    store.getState().request.data?.token ||
    "null"

  if (token === "null") {
    return false
  }

  return "_token=" + token
}

/**
 * Definite user logout
 */
export const clearUser = () => {
  const object = {
    id: 0,
    name: "No name",
    role: roles.USER,
    session: null,
  }

  localStorage.setItem("_token", null)
  store.dispatch(setToken(null))
  store.dispatch(setCsrf(null))
  store.dispatch(setUser({ ...object }))
}

/**
 * Set session params
 */
export const setParams = (data = null) => {
  localStorage.setItem("_token", data?._token || null)
  store.dispatch(setToken(data?._token || null))
  store.dispatch(setCsrf(data?.csrf || null))
}

/**
 * All session params
 */
export const getParams = () => {
  return "?" + (getToken() || "")
}
