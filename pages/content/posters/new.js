import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"

const ContentPostersNew = () => {
  return (
    <Layout title="Posters - new" role={roles.CONTENT_MANAGER}>
      Content/Posters/New
    </Layout>
  )
}

export default ContentPostersNew
