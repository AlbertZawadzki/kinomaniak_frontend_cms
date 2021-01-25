import { createStore, combineReducers } from "redux"

import actors from "./stores/actors"
import notifications from "./stores/notifications"
import request from "./stores/request"

const store = createStore(
  combineReducers({
    actors,
    notifications,
    request,
  })
)

export default store
