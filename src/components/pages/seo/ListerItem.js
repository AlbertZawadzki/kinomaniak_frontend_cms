import React from "react"

const ListerItem = ({ url }) => {
  return (
    <div className='short-single-seo-wrapper'>
      {url}
    </div>
  )
}

ListerItem.defaultProps = {
  url: "No url given",
}

export default ListerItem
