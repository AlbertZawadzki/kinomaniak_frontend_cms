import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"
import Form from "../../../components/pages/apps/pages/Form"
import functions from "../../../functions"

const AppsPagesNew = () => {
  const fastActionsName = functions.getTranslation("pages_actions")
  const fastActions = [
    {
      to: "/apps/pages",
      name: functions.getTranslation("pages_see_all"),
    },
  ]

  return (
    <Layout
      title={`${functions.getTranslation("page")} - ${functions.getTranslation("new")}`}
      role={roles.ADMIN}
      fastActions={fastActions}
      fastActionsName={fastActionsName}
    >
      <Form />
    </Layout>
  )
}

export default AppsPagesNew
