import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"
import functions from "../../../functions"

const ContentCategories = () => {
  const fastActionsName = functions.getTranslation("categories_actions")
  const fastActions = [
    {
      to: "/content/categories/new",
      name: functions.getTranslation("categories_create_new"),
    },
    {
      to: "/content/categories/all",
      name: functions.getTranslation("categories_see_all"),
    },
  ]

  return (
    <Layout
      title="Categories"
      role={roles.CONTENT_MANAGER}
      fastActions={fastActions}
      fastActionsName={fastActionsName}
    >
      Content/Categories/
    </Layout>
  )
}

export default ContentCategories
