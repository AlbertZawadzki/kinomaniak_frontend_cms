import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const MonetizationPlansSingle = ({ id }) => {
  return (
    <Layout title="Plans - single" role={roles.OWNER}>
      Monetization/Plans/{id}
    </Layout>
  )
}

MonetizationPlansSingle.getInitialProps = (context) => {
  const { id } = context.query

  return { id }
}

export default MonetizationPlansSingle
