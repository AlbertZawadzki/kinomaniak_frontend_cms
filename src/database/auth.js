import databaseConfig from "./config"
import store from "../redux/store"
import { setUser } from "../redux/actions/request"
import { addNotification } from "../redux/actions/notification"

const auth = async () => {
  const axios = databaseConfig.getAxios()

  return await axios.post(databaseConfig.AUTH_URL, null, { params: databaseConfig.getParams() }).then(response => {
    databaseConfig.handleResponse(response)
    console.log(response.data)
    store.dispatch(setUser(response.data.data))
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
