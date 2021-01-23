import React from "react"
import * as Icons from "../../../assets/icons"

const statuses = [
  {
    name: "processing",
    translation: "processing",
    button: "",
    title: "Processing",
    autoClose: true,
  },
  {
    name: "more-action",
    translation: "more_action",
    button: "",
    title: "More action needed",
    autoClose: false,
  },
  {
    name: "success",
    translation: "success",
    button: "accept",
    title: "Success",
    autoClose: true,
  },
  {
    name: "failure",
    translation: "failure",
    button: "warn",
    title: "Failure",
    autoClose: false,
  },
  {
    name: "unknown",
    translation: "unknown",
    button: "",
    title: "???",
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
    <h3 className='infobox-title'>{title || status.title}</h3>
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