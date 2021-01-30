import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"

const ContentVideos = () => {
  return (
    <Layout title="Videos" role={roles.CONTENT_MANAGER}>
      Content/Videos/
    </Layout>
  )
}

export default ContentVideos
