import { createStore, combineReducers } from "redux"

import notifications from "./stores/notifications"
import request from "./stores/request"

const store = createStore(
  combineReducers({
    notifications,
    request,
  })
)

export default store
