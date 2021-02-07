import React from "react"
import Layout from "../../components/layout"
import roles from "../../data/roleTypes.json"
import Form from "../../components/pages/geoblock/Form"
import functions from "../../functions"

const ContentActorsNew = () => {
  const fastActionsName = functions.getTranslation("geoblocks_actions")
  const fastActions = [
    {
      to: "/geoblock",
      name: functions.getTranslation("geoblocks_see_all"),
    },
  ]

  return (
    <Layout
      title={`${functions.getTranslation("geoblock")} - ${functions.getTranslation("new")}`}
      role={roles.CONTENT_MANAGER}
      fastActions={fastActions}
      fastActionsName={fastActionsName}
    >
      <Form />
    </Layout>
  )
}

export default ContentActorsNew
