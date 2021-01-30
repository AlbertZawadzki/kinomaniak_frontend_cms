import { combineReducers, createStore } from "redux"
import actors from "./stores/actors"
import categories from "./stores/categories"
import countries from "./stores/countries"
import currencies from "./stores/currencies"
import notifications from "./stores/notifications"
import posters from "./stores/posters"
import request from "./stores/request"

const store = createStore(
  combineReducers({
    actors,
    categories,
    countries,
    currencies,
    notifications,
    posters,
    request,
  }),
)

export default store
