import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const ContentImagesAll = () => {
  return (
    <Layout title="Images - all" role={roles.CONTENT_MANAGER}>
      Content/Images/All
    </Layout>
  )
}

export default ContentImagesAll
