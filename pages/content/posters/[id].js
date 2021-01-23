import React from "react"

const ContentPostersSingle = ({ id }) => {
  return (
    <pre>
      Content/Posters/{id}
    </pre>
  )
}

ContentPostersSingle.getInitialProps = (context) => {
  let { id } = context.query

  return { id }
}

export default ContentPostersSingle