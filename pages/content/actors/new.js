import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const ContentActorsNew = () => {
  return (
    <Layout title="Actors - new" role={roles.CONTENT_MANAGER}>
      Content/Actors/New
    </Layout>
  )
}

export default ContentActorsNew
