import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const ContentCategories = () => {
  return (
    <Layout title="Categories" role={roles.CONTENT_MANAGER}>
      Content/Categories/
    </Layout>
  )
}

export default ContentCategories
