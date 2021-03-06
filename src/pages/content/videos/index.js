import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"

const ContentVideosAll = () => {
  return (
    <Layout title="Videos - all" role={roles.CONTENT_MANAGER}>
      Content/Videos/All
    </Layout>
  )
}

export default ContentVideosAll
