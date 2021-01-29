import React from "react"
import Layout from "../../components/layout"
import roles from "../../data/roleTypes.json"

const MonetizationGateways = () => {
  return (
    <Layout title="Gateways" role={roles.OWNER}>
      Monetization/Gateways
    </Layout>
  )
}

MonetizationGateways.getInitialProps = async (context) => {
  return {}
}

export default MonetizationGateways
