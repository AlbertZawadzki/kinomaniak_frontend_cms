import * as CFG from "./config"
import store from "../redux/store"
import { setCsrf, setToken, setUser } from "../redux/actions/request"
import { addNotification } from "../redux/actions/notification"
import roles from "../data/_role_types.json"

const doLogout = async () => {
  const url = CFG.BACKEND_URL + "me/logout?" + CFG.getToken()

  localStorage.setItem("_token", "null")
  store.dispatch(setToken(null))
  store.dispatch(setCsrf(null))
  store.dispatch(setUser({ ...object }))

  store.dispatch(
    addNotification({
      status: "processing",
      title: "Logging out",
      message: null,
    })
  )

  await fetch(url, { method: "GET" })
    .then((res) => res.json())
    .then(() => {
      store.dispatch(
        addNotification({
          status: "success",
          title: "Logged out",
          message: null,
        })
      )
    })
    .catch((error) => {
      console.error(error)
      store.dispatch(
        addNotification({
          status: "failure",
          title: "Failed to logout",
          message: null,
        })
      )
    })

  const object = {
    id: 0,
    name: "No name",
    role: roles.USER,
    session: null,
  }
}

export default doLogout
