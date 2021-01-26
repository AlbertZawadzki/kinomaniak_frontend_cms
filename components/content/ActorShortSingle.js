import React from "react"

const ActorShortSingle = ({ name, lastname, image_url }) => {
  return (
    <div className='short-single-actor-wrapper'>
      <img src={image_url} className='small-actor-image' alt={`${name} ${lastname}`} />
      {`${name} ${lastname}`}
    </div>
  )
}

ActorShortSingle.defaultProps = {
  name: "No name given",
  lastname: "No lastname given",
  image_url: "",
}

export default ActorShortSingle
