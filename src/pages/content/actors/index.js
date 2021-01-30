import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"
import functions from "../../../functions"

const ContentActors = () => {
  const fastActionsName = functions.getTranslation("actors_actions")
  const fastActions = [
    {
      to: "/content/actors/all",
      name: functions.getTranslation("actors_see_all"),
    },
    {
      to: "/content/actors/new",
      name: functions.getTranslation("actor_create_new"),
    },
  ]

  return (
    <Layout
      title={functions.getTranslation("actors")}
      role={roles.CONTENT_MANAGER}
      fastActions={fastActions}
      fastActionsName={fastActionsName}
    />
  )
}

export default ContentActors
