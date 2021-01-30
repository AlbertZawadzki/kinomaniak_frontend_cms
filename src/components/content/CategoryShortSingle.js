import React from "react"

const CategoryShortSingle = ({ name }) => {
  return (
    <div className='short-single-category-wrapper'>
      {name}
    </div>
  )
}

CategoryShortSingle.defaultProps = {
  name: "No name given",
}

export default CategoryShortSingle
