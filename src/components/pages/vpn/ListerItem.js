import React from "react"

const ListerItem = ({ name, ip_counts }) => {
  return (
    <div className='short-single-vpn-wrapper'>
      {`${name} ${ip_counts}`}
    </div>
  )
}

ListerItem.defaultProps = {
  name: "No name given",
  ip_counts: 0,
}

export default ListerItem
