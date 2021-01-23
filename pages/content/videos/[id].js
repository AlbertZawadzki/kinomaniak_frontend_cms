import React from "react"

const ContentVideosSingle = ({ id }) => {
  return (
    <pre>
      Content/Videos/{id}
    </pre>
  )
}

ContentVideosSingle.getInitialProps = (context) => {
  let { id } = context.query

  return { id }
}

export default ContentVideosSingle