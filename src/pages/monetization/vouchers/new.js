import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"
import Form from "../../../components/pages/monetization/voucher/Form"
import functions from "../../../functions"

const MonetizationVouchersNew = () => {
  const fastActionsName = functions.getTranslation("vouchers_actions")
  const fastActions = [
    {
      to: "/monetization/vouchers",
      name: functions.getTranslation("vouchers_see_all"),
    },
  ]

  return (
    <Layout
      title={`${functions.getTranslation("vouchers")} - ${functions.getTranslation("new")}`}
      role={roles.OWNER}
      fastActions={fastActions}
      fastActionsName={fastActionsName}
    >
      <Form />
    </Layout>
  )
}

export default MonetizationVouchersNew
