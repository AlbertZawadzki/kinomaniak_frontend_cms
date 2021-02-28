import React from "react"

const ListerItem = ({ name, available }) => {
  return (
    <div className='short-single-category-wrapper'>
      {available ? name : "This voucher is not available anymore, name: " + name}
    </div>
  )
}

ListerItem.defaultProps = {
  name: "No name given",
  available: false,
}

export default ListerItem
