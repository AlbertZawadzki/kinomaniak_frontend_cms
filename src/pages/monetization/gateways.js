import React from "react"
import Layout from "../../components/layout"
import roles from "../../data/roleTypes.json"
import GatewayStripeForm from "../../components/pages/monetization/gateways/GatewayStripeForm"

const MonetizationGateways = () => {
  return (
    <Layout title="Gateways" role={roles.OWNER}>
      <GatewayStripeForm />
    </Layout>
  )
}

export default MonetizationGateways
