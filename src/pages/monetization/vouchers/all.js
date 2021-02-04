import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"

const MonetizationVouchersAll = () => {
  return (
    <Layout title="Vouchers - all" role={roles.OWNER}>
      Monetization/Vouchers/All
    </Layout>
  )
}

export default MonetizationVouchersAll