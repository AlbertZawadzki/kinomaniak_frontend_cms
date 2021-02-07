import React from "react"
import Layout from "../../components/layout"
import roles from "../../data/roleTypes.json"
import Form from "../../components/pages/seo/Form"
import functions from "../../functions"

const ContentActorsNew = () => {
  const fastActionsName = functions.getTranslation("seos_actions")
  const fastActions = [
    {
      to: "/seo",
      name: functions.getTranslation("seos_see_all"),
    },
  ]

  return (
    <Layout
      title={`${functions.getTranslation("seo")} - ${functions.getTranslation("new")}`}
      role={roles.CONTENT_MANAGER}
      fastActions={fastActions}
      fastActionsName={fastActionsName}
    >
      <Form />
    </Layout>
  )
}

export default ContentActorsNew
