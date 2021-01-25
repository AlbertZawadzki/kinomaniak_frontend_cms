import { addNotification } from "../redux/actions/notification"
import store from "../redux/store"
import * as CFG from "./config"

const get = async (url) => {
  url = CFG.BACKEND_URL + url + CFG.getParams()
  store.dispatch(
    addNotification({ status: "processing", title: "Fetching data" })
  )

  return await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      store.dispatch(addNotification({ status: "success" }))
      CFG.setParams(data)
      return data.data
    })
    .catch((err) => {
      console.error(err)
      store.dispatch(
        addNotification({
          status: "failure",
          message: JSON.stringify(err, null, 2),
        })
      )
      return []
    })
}

export default get
