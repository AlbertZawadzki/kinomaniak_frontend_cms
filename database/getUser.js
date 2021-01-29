import * as CFG from "./config"
import store from "../redux/store"
import { setUser } from "../redux/actions/request"
import roles from "../data/_role_types.json"

const getUser = async () => {
  console.log("attempt")
  console.log("Blocked: " + (!CFG.canAuthUser() ? "yes" : "false"))
  console.log("Token: " + (!CFG.getToken() ? "is null" : "exists"))
  console.log("Token: " + CFG.getToken())
  if (!CFG.getToken() || !CFG.canAuthUser()) {
    return
  }

  let object = null
  const url = CFG.BACKEND_URL + "me/authenticate?" + CFG.getToken()

  return await fetch(url, { method: "GET" })
    .then(async (res) => {
      return { data: await res.json(), status: res.status }
    })
    .then(({ data }) => {
      CFG.setParams(data)
      console.log(data)

      if (data?.data?.id) {
        object = {
          id: data?.data?.id,
          name: data?.data?.name,
          role: data?.data?.role,
        }
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
