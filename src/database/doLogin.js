import databaseConfig from "./config"
import store from "../redux/store"
import { addNotification } from "../redux/actions/notification"
import { setUser } from "../redux/actions/request"

const doLogin = async (form) => {
  const axios = databaseConfig.getAxios()

  return await axios.post(databaseConfig.LOGIN_URL, form).then(response => {
    databaseConfig.handleResponse(response)
    store.dispatch(setUser(response.data.data))
  })
    .catch(error => {
      console.error(error)

      store.dispatch(addNotification({
        status: "failure",
        message: JSON.stringify(error.message, null, 2),
      }))

      return false
    })
}

export default doLogin
