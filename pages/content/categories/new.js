import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const ContentCategoriesNew = () => {
  return (
    <Layout title="Categories - new" role={roles.CONTENT_MANAGER}>
      Content/Categories/New
    </Layout>
  )
}

export default ContentCategoriesNew
