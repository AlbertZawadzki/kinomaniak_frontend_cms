import React from "react"

const ListerItem = ({ name, countries_count }) => {
  return (
    <div className='short-single-geoblock-wrapper'>
      {`${name} ${countries_count}`}
    </div>
  )
}

ListerItem.defaultProps = {
  name: "No name given",
  countries_count: 0,
}

export default ListerItem
