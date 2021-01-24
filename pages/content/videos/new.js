import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const ContentVideosNew = () => {
  return (
    <Layout title="Videos - new" role={roles.CONTENT_MANAGER}>
      Content/Videos/New
    </Layout>
  )
}

export default ContentVideosNew
