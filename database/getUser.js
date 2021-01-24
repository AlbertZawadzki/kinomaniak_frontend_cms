import * as CFG from "./config"
import store from "../redux/store"
import { setCsrf, setToken, setUser } from "../redux/actions/request"
import roles from "../data/_role_types.json"

const getUser = async () => {
  const url = CFG.BACKEND_URL + "me/can?" + CFG.getToken()

  return await fetch(url, { method: "GET" })
    .then(async (res) => {
      return { data: await res.json(), status: res.status }
    })
    .then(({ data }) => {
      const object = {
        id: data?.data?.id || 0,
        name: data?.data?.name || "No name",
        role: data?.data?.role || roles.USER,
        session: data?.data?.ssid || null,
      }

      localStorage.setItem("_token", data?._token || null)
      store.dispatch(setToken(data?._token || null))
      store.dispatch(setCsrf(data?.csrf || null))
      store.dispatch(setUser({ ...object }))
    })
    .catch((error) => {
      console.error(error)
      const object = {
        id: 0,
        name: "No name",
        role: roles.USER,
        session: null,
      }

      store.dispatch(setToken(null))
      store.dispatch(setCsrf(null))
      store.dispatch(setUser({ ...object }))
    })
}

export default getUser
