import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const ContentActorsAll = () => {
  return (
    <Layout title="Actors - all" role={roles.CONTENT_MANAGER}>
      Content/Actors/All
    </Layout>
  )
}

export default ContentActorsAll
