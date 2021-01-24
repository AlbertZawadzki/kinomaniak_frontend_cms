import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const ContentContentsAll = () => {
  return (
    <Layout title="Contents - all" role={roles.CONTENT_MANAGER}>
      Content/Contents/All
    </Layout>
  )
}

export default ContentContentsAll
