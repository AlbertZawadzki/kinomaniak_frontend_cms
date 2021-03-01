import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"
import Form from "../../../components/pages/monetization/plan/Form"
import functions from "../../../functions"

const MonetizationPlansNew = () => {
  const fastActionsName = functions.getTranslation("plans_actions")
  const fastActions = [
    {
      to: "/monetization/plans",
      name: functions.getTranslation("plans_see_all"),
    },
  ]

  return (
    <Layout
      title={`${functions.getTranslation("plans")} - ${functions.getTranslation("new")}`}
      role={roles.OWNER}
      fastActions={fastActions}
      fastActionsName={fastActionsName}
    >
      <Form />
    </Layout>
  )
}

export default MonetizationPlansNew
