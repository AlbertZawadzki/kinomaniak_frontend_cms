import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const ContentContents = () => {
  return (
    <Layout title="Contents" role={roles.CONTENT_MANAGER}>
      Content/Contents/
    </Layout>
  )
}

export default ContentContents
