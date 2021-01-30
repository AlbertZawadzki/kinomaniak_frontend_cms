import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"
import functions from "../../../functions"
import CategoryForm from "../../../components/content/CategoryForm"

const ContentCategoriesNew = () => {
  const fastActionsName = functions.getTranslation("categories_actions")
  const fastActions = [
    {
      to: "/content/categories/all",
      name: functions.getTranslation("categories_see_all"),
    },
  ]

  return (
    <Layout
      title={`${functions.getTranslation("categories")} - ${functions.getTranslation("new")}`}
      role={roles.CONTENT_MANAGER}
      fastActions={fastActions}
      fastActionsName={fastActionsName}
    >
      <CategoryForm />
    </Layout>
  )
}

export default ContentCategoriesNew
