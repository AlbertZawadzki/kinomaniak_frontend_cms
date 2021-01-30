import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"

const ContentImagesNew = () => {
  return (
    <Layout title="Images - new" role={roles.CONTENT_MANAGER}>
      Content/Images/New
    </Layout>
  )
}

export default ContentImagesNew
