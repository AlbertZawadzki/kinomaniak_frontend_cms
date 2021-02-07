import React from "react"
import Image from "../../../Image"

const ListerItem = ({ name, lastname, image_url }) => {
  return (
    <div className='short-single-actor-wrapper'>
      <Image src={image_url} className='small-actor-image' alt={`${name} ${lastname}`} />
      {`${name} ${lastname}`}
    </div>
  )
}

ListerItem.defaultProps = {
  name: "No name given",
  lastname: "No lastname given",
  image_url: "",
}

export default ListerItem
