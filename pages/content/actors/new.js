import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"
import ActorForm from "../../../components/content/ActorForm"
import functions from "../../../functions"

const ContentActorsNew = () => {
  const fastActionsName = functions.getTranslation("actors_actions")
  const fastActions = [
    {
      to: "/content/actors/all",
      name: functions.getTranslation("actors_see_all"),
    },
  ]

  return (
    <Layout
      title="Actors - new"
      role={roles.CONTENT_MANAGER}
      fastActions={fastActions}
      fastActionsName={fastActionsName}
    >
      <ActorForm />
    </Layout>
  )
}

export default ContentActorsNew
