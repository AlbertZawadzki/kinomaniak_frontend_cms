import * as CFG from "./config"
import store from "../redux/store"
import { setUser } from "../redux/actions/request"
import roles from "../data/_role_types.json"

const getUser = async () => {
  if (!CFG.getToken() || !CFG.canAuthUser()) {
    return
  }

  const url = CFG.BACKEND_URL + "me/authenticate?" + CFG.getToken()

  return await fetch(url, { method: "GET" })
    .then(async (res) => {
      return { data: await res.json(), status: res.status }
    })
    .then(({ data }) => {
      CFG.setParams(data)

      const object = {
        id: data?.data?.id || 0,
        name: data?.data?.name || "No name",
        role: data?.data?.role || roles.USER,
        session: data?.data?.ssid || null,
      }
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

      CFG.setParams()
      store.dispatch(setUser({ ...object }))
    })
}

export default getUser
