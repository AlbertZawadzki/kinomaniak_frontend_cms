import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"
import Form from "../../../components/pages/content/actor/Form"
import functions from "../../../functions"

const ContentActorsNew = () => {
  const fastActionsName = functions.getTranslation("actors_actions")
  const fastActions = [
    {
      to: "/content/actors",
      name: functions.getTranslation("actors_see_all"),
    },
  ]

  return (
    <Layout
      title={`${functions.getTranslation("actors")} - ${functions.getTranslation("new")}`}
      role={roles.CONTENT_MANAGER}
      fastActions={fastActions}
      fastActionsName={fastActionsName}
    >
      <Form />
    </Layout>
  )
}

export default ContentActorsNew
