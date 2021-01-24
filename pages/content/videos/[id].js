import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const ContentVideosSingle = ({ id }) => {
  return (
    <Layout title="Videos - single" role={roles.CONTENT_MANAGER}>
      Content/Videos/{id}
    </Layout>
  )
}

ContentVideosSingle.getInitialProps = (context) => {
  let { id } = context.query

  return { id }
}

export default ContentVideosSingle
