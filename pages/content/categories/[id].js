import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"
import functions from "../../../functions"

const ContentCategoriesSingle = ({ id }) => {
  const fastActionsName = functions.getTranslation("categories_actions")
  const fastActions = [
    {
      to: "/content/categories/all",
      name: functions.getTranslation("categories_see_all"),
    },
    {
      to: "/content/categories/new",
      name: functions.getTranslation("categories_create_new"),
    },
  ]

  return (
    <Layout
      title="Categories - single"
      role={roles.CONTENT_MANAGER}
      fastActions={fastActions}
      fastActionsName={fastActionsName}
    >
      Content/Categories/{id}
    </Layout>
  )
}

ContentCategoriesSingle.getInitialProps = (context) => {
  let { id } = context.query

  return { id }
}

export default ContentCategoriesSingle
