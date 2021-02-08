import store from "../redux/store"
import axios from "axios"
import { addNotification } from "../redux/actions/notification"
import {
  blockRequests,
  setCountry,
  setCountryCode,
  setCsrfCorrect,
  setUser,
  unblockRequests,
} from "../redux/actions/request"
import database from "./index"
import { setCountries } from "../redux/actions/country"
import { setCurrencies } from "../redux/actions/currency"

class Configuration {
  USER_TOKEN_REFRESH_TIME = 30000
  LAST_REQUEST_TIME = "last_request_time"
  TOKEN = "_token"
  CSRF_NAME = "_csrf_name"
  CSRF_TOKEN = "_csrf_token"
  CSRF_CORRECT = "_csrf_correct"
  LATITUDE = "_latitude"
  LONGITUDE = "_longitude"

  AUTH_URL = "me/authenticate"
  LOGIN_URL = "me/login"
  LOGOUT_URL = "me/logout"

  /**
   * Get static data
   */
  initData = async () => {
    if (store.getState().countries?.data?.was_fetched && store.getState().currencies?.data?.was_fetched) {
      return
    }

    const data = await database.get("data")

    const { countries, currencies } = data

    store.dispatch(setCountries(countries))
    store.dispatch(setCurrencies(currencies))
  }

  canMakeRequest = () => {
    return !store.getState().request?.data?.blocked
  }

  blockRequests = () => {
    store.dispatch(blockRequests())
  }

  unblockRequests = () => {
    store.dispatch(unblockRequests())
  }

  /**
   * Axios config
   */
  getAxios = () => {
    return axios.create({
      // baseURL: "http://localhost:8000/api/admin/",
      baseURL: process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL,
      validateStatus: () => {
        return true // default
      },
    })
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

    store.dispatch(setCsrfCorrect(data._csrf_correct))
    store.dispatch(setCountry(data.country))
    store.dispatch(setCountryCode(data.country_code))
    store.dispatch(setUser(data.data))
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
   * Response status handler
   */
  handleResponse = (object, action, silent = false) => {
    const { data, status } = object
    const realData = data.data

    switch (status) {
      case 200:
        this.setParams()
        if (action) {
          store.dispatch(action)
        }
        if (!silent) {
          store.dispatch(addNotification({ status: "success", message: `url: ${object.config.url}` }))
        }
        return realData || []
      case 201:
        if (action) {
          store.dispatch(action)
        }
        if (!silent) {
          store.dispatch(addNotification({ status: "success", title: "Item created" }))
        }
        return true
      case 204:
        if (action) {
          store.dispatch(action)
        }
        if (!silent) {
          store.dispatch(addNotification({ status: "success", title: "No items found" }))
        }
        return realData || []
      case 400:
        if (!silent) {
          store.dispatch(addNotification({ status: "failure", message: JSON.stringify(data.data, null, 2) }))
        }
        return false
      case 403:
        // store.dispatch(addNotification({ status: "failure", message: "Please login to use the cms" }))
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