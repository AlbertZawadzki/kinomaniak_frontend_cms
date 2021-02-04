import store from "../redux/store"
import axios from "axios"
import { addNotification } from "../redux/actions/notification"
import { setCountry, setCountryCode } from "../redux/actions/request"

class Configuration {
  USER_TOKEN_REFRESH_TIME = 30000
  LAST_REQUEST_TIME = "last_request_time"
  TOKEN = "_token"
  CSRF_NAME = "_csrf_name"
  CSRF_TOKEN = "_csrf_token"
  CSRF_CORRECT = "_csrf_correct"
  LATITUDE = "_csrf_token"
  LONGITUDE = "_csrf_token"

  AUTH_URL = "me/authenticate"
  LOGIN_URL = "me/login"
  LOGOUT_URL = "me/logout"

  /**
   * Fix axios idiotic idea of relative urls
   */
  getAxios = () => {
    return axios.create({
      baseURL: "http://localhost:8000/api/admin",//process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL,
    })
  }

  /**
   * Check if user is logged and if he was last authed more than 30sec ago
   */
  canAuthUser = () => {
    const time = new Date()
    const now = time.getTime().toString()
    const request = localStorage.getItem(this.LAST_REQUEST_TIME) || (parseInt(now) - 2 * this.USER_TOKEN_REFRESH_TIME).toString()
    const userExists = store.getState().request?.user?.id !== 0

    return userExists && now - request > USER_TOKEN_REFRESH_TIME
  }

  /**
   * Set session params
   */
  setParams = (data) => {
    if (!data) {
      return
    }

    const time = new Date()
    const now = time.getTime().toString()

    localStorage.setItem(this.LAST_REQUEST_TIME, now)
    localStorage.setItem(this.TOKEN, data._token)
    localStorage.setItem(this.CSRF_TOKEN, data.csrf_token)
    localStorage.setItem(this.CSRF_CORRECT, data._csrf_correct)

    store.dispatch(setCountry(data.country))
    store.dispatch(setCountryCode(data.country_code))
  }

  /**
   * All session params
   */
  getParams = () => {
    return {
      _token: localStorage.getItem(this.TOKEN) || "no_token",
      _latitude: "no_latitude",
      _longitude: "no_langitude",
      _csrf_name: store.getState().request?.data?._csrf_name || "no_csrf_name",
      _csrf_token: localStorage.getItem(this.TOKEN) || "no_csrf_token",
    }
  }

  /**
   * Updates last request time
   */
  updateRequestTime = () => {
    const time = new Date()
    const now = time.getTime().toString()
    localStorage.setItem(LAST_REQUEST_TIME, now)
  }

  /**
   * Definite user logout
   */
  clearUser = () => {
  }

  /**
   * Response status handler
   */
  handleResponse = (object) => {
    const { data, status } = object
    this.setParams(data)
    const realData = data.data

    switch (status) {
      case 200:
        this.setParams()
        store.dispatch(addNotification({ status: "success", message: `url: ${object.config.url}` }))
        return realData || []
      case 201:
        store.dispatch(addNotification({ status: "success", title: "Item created" }))
        return true
      case 204:
        store.dispatch(addNotification({ status: "success", title: "No items found" }))
        return realData || []
      case 403:
        store.dispatch(addNotification({ status: "unknown", message: "AUTHORIZATION FAILURE " + status }))
        return false
      case 404:
      case 500:
        store.dispatch(
          addNotification({
            status: "failure",
            message: JSON.stringify(data.data, null, 2),
          }),
        )
        return false
      default:
        store.dispatch(addNotification({ status: "unknown", message: "Handle this in config.js " + status }))
        return false
    }
  }
}

const databaseConfig = new Configuration()

export default databaseConfig