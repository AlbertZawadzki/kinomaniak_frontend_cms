import React from "react"
import Layout from "../../components/layout"
import roles from "../../data/roleTypes.json"
import Form from "../../components/pages/vpn/Form"
import functions from "../../functions"

const ContentActorsNew = () => {
  const fastActionsName = functions.getTranslation("vpns_actions")
  const fastActions = [
    {
      to: "/vpn",
      name: functions.getTranslation("vpns_see_all"),
    },
    {
      to: "/vpn/ips",
      name: functions.getTranslation("ips"),
    },
  ]

  return (
    <Layout
      title={`${functions.getTranslation("vpn")} - ${functions.getTranslation("new")}`}
      role={roles.ADMIN}
      fastActions={fastActions}
      fastActionsName={fastActionsName}
    >
      <Form />
    </Layout>
  )
}

export default ContentActorsNew
