import React from "react"

const ContentActorsSingle = ({ id }) => {
  return (
    <pre>
      Content/Actors/{id}
    </pre>
  )
}

ContentActorsSingle.getInitialProps = (context) => {
  let { id } = context.query

  return { id }
}

export default ContentActorsSingle