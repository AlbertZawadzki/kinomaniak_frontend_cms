import databaseConfig from "./config"
import store from "../redux/store"
import { addNotification } from "../redux/actions/notification"

const post = async (url, action, form) => {
  const axios = databaseConfig.getAxios()

  return await axios.post(url, form, {
      params: databaseConfig.getParams(),
    },
  ).then(response => {
    store.dispatch(action(response.data.data))
    return databaseConfig.handleResponse(response)
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

export default post