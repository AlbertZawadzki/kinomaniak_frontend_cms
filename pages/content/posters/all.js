import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const ContentPostersAll = () => {
  return (
    <Layout title="Posters - all" role={roles.CONTENT_MANAGER}>
      Content/Posters/All
    </Layout>
  )
}

export default ContentPostersAll
