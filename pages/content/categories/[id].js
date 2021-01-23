import React from "react"

const ContentCategoriesSingle = ({ id }) => {
  return (
    <pre>
      Content/Categories/{id}
    </pre>
  )
}

ContentCategoriesSingle.getInitialProps = (context) => {
  let { id } = context.query

  return { id }
}

export default ContentCategoriesSingle