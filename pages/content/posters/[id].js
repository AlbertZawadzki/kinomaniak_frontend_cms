import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const ContentPostersSingle = ({ id }) => {
  return (
    <Layout title="Posters - single" role={roles.CONTENT_MANAGER}>
      Content/Posters/{id}
    </Layout>
  )
}

ContentPostersSingle.getInitialProps = (context) => {
  let { id } = context.query

  return { id }
}

export default ContentPostersSingle
