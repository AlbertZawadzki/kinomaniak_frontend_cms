import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const ContentCategoriesSingle = ({ id }) => {
  return (
    <Layout title="Categories - single" role={roles.CONTENT_MANAGER}>
      Content/Categories/{id}
    </Layout>
  )
}

ContentCategoriesSingle.getInitialProps = (context) => {
  let { id } = context.query

  return { id }
}

export default ContentCategoriesSingle
