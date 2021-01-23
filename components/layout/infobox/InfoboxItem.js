import React from "react"
import * as Icons from "../../../assets/icons"
import functions from "../../../functions"

const statuses = [
  {
    name: "processing",
    translation: "processing",
    button: "",
    autoClose: true,
  },
  {
    name: "more-action",
    translation: "more_action_needed",
    button: "",
    autoClose: false,
  },
  {
    name: "success",
    translation: "success",
    button: "accept",
    autoClose: true,
  },
  {
    name: "failure",
    translation: "failure",
    button: "warn",
    autoClose: false,
  },
  {
    name: "unknown",
    translation: "unknown",
    button: "",
    autoClose: false,
  },
]

const InfoboxItem = ({ status, title, message, id }) => {
  status = statuses.filter(item => item.name === status || item.name === "unknowm")[0]
  const buttonClass = "button round absolute right " + status.button

  return <div className={`infobox ${status.name}`}>
    <button className={buttonClass}>
      <Icons.Cross />
    </button>
    <h3 className='infobox-title'>{title || functions.getTranslation(status.translation)}</h3>
    {message?.length > 0 && (
      <div className='infobox-message'>
        {message}
      </div>
    )}
  </div>
}

InfoboxItem.defaultProps = {
  status: "unknown",
  // Overwriting in component
  // title: "No title given",
  message: "",
  id: -1,
}

export default InfoboxItem