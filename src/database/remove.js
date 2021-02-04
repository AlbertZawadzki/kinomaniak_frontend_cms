import databaseConfig from "./config"
import store from "../redux/store"
import { addNotification } from "../redux/actions/notification"

const post = async (url) => {
  const axios = databaseConfig.getAxios()

  return await axios.delete(url, {
      params: databaseConfig.getParams(),
    },
  ).then(response => {
    store.dispatch(addNotification({ status: "success" }))

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
