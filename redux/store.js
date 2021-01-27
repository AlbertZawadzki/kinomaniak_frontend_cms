import { combineReducers, createStore } from "redux"

import actors from "./stores/actors"
import categories from "./stores/categories"
import notifications from "./stores/notifications"
import request from "./stores/request"

const store = createStore(
  combineReducers({
    actors,
    categories,
    notifications,
    request,
  }),
)

export default store
