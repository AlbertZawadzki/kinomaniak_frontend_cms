import databaseConfig from "./config"
import store from "../redux/store"
import { addNotification } from "../redux/actions/notification"

const get = async (url, silent = false) => {
  const axios = databaseConfig.getAxios()

  return await axios.get(url, {
    params: databaseConfig.getParams(),
  }).then(data => databaseConfig.handleResponse(data, false, silent))
    .catch(error => {
      console.log(error)
      store.dispatch(addNotification({
        status: "failure",
        message: `url: ${url} \n ${JSON.stringify(error.message, null, 2)}`,
      }))
      return false
    })
}

export default get
