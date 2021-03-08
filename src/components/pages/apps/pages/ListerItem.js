import React from "react"

const ListerItem = ({ title }) => {
  return (
    <div className='short-single-page-wrapper'>
      {title}
    </div>
  )
}

ListerItem.defaultProps = {
  title: "No name given",
}

export default ListerItem
