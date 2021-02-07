import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"
import Form from "../../../components/pages/content/poster/Form"
import functions from "../../../functions"

const ContentPostersNew = () => {
  const fastActionsName = functions.getTranslation("posters_actions")
  const fastActions = [
    {
      to: "/content/posters",
      name: functions.getTranslation("posters_see_all"),
    },
  ]

  return (
    <Layout
      title={`${functions.getTranslation("posters")} - ${functions.getTranslation("new")}`}
      role={roles.CONTENT_MANAGER}
      fastActions={fastActions}
      fastActionsName={fastActionsName}
    >
      <Form />
    </Layout>
  )
}

export default ContentPostersNew
