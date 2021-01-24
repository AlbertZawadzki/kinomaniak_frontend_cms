import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const ContentCategoriesAll = () => {
  return (
    <Layout title="Categories - all" role={roles.CONTENT_MANAGER}>
      Content/Categories/All
    </Layout>
  )
}

export default ContentCategoriesAll
