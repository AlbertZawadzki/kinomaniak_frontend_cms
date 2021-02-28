import React from "react"
import store from "../redux/store"
import { addNotification } from "../redux/actions/notification"
import functions from "../functions"

const SingleCode = ({ name, active }) => {
  const copy = () => {
    navigator.clipboard.writeText(name)
    store.dispatch(addNotification({ status: "processing", title: functions.getTranslation("copied_to_clipboard") }))
  }

  return (
    <div className={`single-code ${active ? "used" : "unused"}`} onClick={() => copy()}>{name}</div>
  )
}

SingleCode.defaultProps = {
  name: "No code given",
  active: false,
}

export default SingleCode
