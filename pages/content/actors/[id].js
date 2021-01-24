import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const ContentActorsSingle = ({ id }) => {
  return (
    <Layout title="Actors - single" role={roles.CONTENT_MANAGER}>
      Content/Actors/{id}
    </Layout>
  )
}

ContentActorsSingle.getInitialProps = (context) => {
  let { id } = context.query

  return { id }
}

export default ContentActorsSingle
