import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"

const ContentContentsNew = () => {
  return (
    <Layout title="Contents - new" role={roles.CONTENT_MANAGER}>
      Content/Contents/New
    </Layout>
  )
}

export default ContentContentsNew
