import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"

const MonetizationPlansAll = () => {
  return (
    <Layout title="Plans - all" role={roles.OWNER}>
      Monetization/Plans/All
    </Layout>
  )
}

export default MonetizationPlansAll
