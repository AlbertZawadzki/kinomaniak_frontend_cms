import * as CFG from "./config"
import store from "../redux/store"
import { setCsrf, setToken, setUser } from "../redux/actions/request"
import roles from "../data/_role_types.json"

const doLogout = async () => {
  const url = CFG.BACKEND_URL + "me/logout?" + CFG.getToken()

  return await fetch(url, { method: "GET" })
    .then(async (res) => {
      return { data: await res.json(), status: res.status }
    })
    .then(({ data }) => {
      const object = {
        id: 0,
        name: "No name",
        role: roles.USER,
        session: null,
      }

      localStorage.setItem("_token", null)
      store.dispatch(setToken(data?._token || null))
      store.dispatch(setCsrf(data?.csrf || null))
      store.dispatch(setUser({ ...object }))
    })
}

export default doLogout
