import databaseConfig from "./config"
import store from "../redux/store"
import { setUser } from "../redux/actions/request"
import { addNotification } from "../redux/actions/notification"

const auth = async () => {
  if (!databaseConfig.canAuthUser()) {
    store.dispatch(addNotification({
      status: "processing",
      message: "Cant auth right now",
    }))
  }

  const axios = databaseConfig.getAxios()

  return await axios.post(databaseConfig.AUTH_URL, null, { params: databaseConfig.getParams() }).then(async response => {
    databaseConfig.handleResponse(response)
    store.dispatch(setUser(response.data.data))

    await databaseConfig.initData()
  })
    .catch(error => {
      console.error(error)

      store.dispatch(addNotification({
        status: "failure",
        message: JSON.stringify(error.message, null, 2),
      }))

      store.dispatch(setUser(null))

      return false
    })
}

export default auth
