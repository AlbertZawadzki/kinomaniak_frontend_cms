import { combineReducers, createStore } from "redux"
import actors from "./stores/actors"
import categories from "./stores/categories"
import countries from "./stores/countries"
import currencies from "./stores/currencies"
import geoblocks from "./stores/geoblocks"
import notifications from "./stores/notifications"
import pages from "./stores/pages"
import plans from "./stores/plans"
import posters from "./stores/posters"
import request from "./stores/request"
import seos from "./stores/seos"
import vouchers from "./stores/vouchers"
import vpns from "./stores/vpns"

const store = createStore(
  combineReducers({
    actors,
    categories,
    countries,
    currencies,
    geoblocks,
    notifications,
    pages,
    plans,
    posters,
    request,
    seos,
    vouchers,
    vpns,
  }),
)

export default store
