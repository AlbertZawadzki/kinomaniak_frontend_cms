import React from "react"

const ListerItem = ({ name }) => {
  return (
    <div className='short-single-geoblock-wrapper'>
      {name}
    </div>
  )
}

ListerItem.defaultProps = {
  name: "No name given",
}

export default ListerItem
