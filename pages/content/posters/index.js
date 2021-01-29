import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"

const ContentPosters = () => {
  return (
    <Layout title="Posters" role={roles.CONTENT_MANAGER}>
      Content/Posters/
    </Layout>
  )
}

export default ContentPosters
