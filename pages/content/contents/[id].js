import React from "react"

const ContentContentsSingle = ({ id }) => {
  return (
    <pre>
      Content/Contents/{id}
    </pre>
  )
}

ContentContentsSingle.getInitialProps = (context) => {
  let { id } = context.query

  return { id }
}

export default ContentContentsSingle