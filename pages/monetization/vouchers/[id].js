import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"

const MonetizationVouchersSingle = ({ id }) => {
  return (
    <Layout title="Vouchers - single" role={roles.OWNER}>
      Monetization/Vouchers/{id}
    </Layout>
  )
}

MonetizationVouchersSingle.getInitialProps = (context) => {
  const { id } = context.query

  return { id }
}

export default MonetizationVouchersSingle
