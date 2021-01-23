import React from "react"

const ContentImagesSingle = ({ id }) => {
  return (
    <pre>
      Content/Images/{id}
    </pre>
  )
}

ContentImagesSingle.getInitialProps = (context) => {
  let { id } = context.query

  return { id }
}

export default ContentImagesSingle