import React from "react"
import Layout from "../../components/layout"
import roles from "../../data/roleTypes.json"

const AppsCommon = () => {
  return (
    <Layout title="Apps" role={roles.CONTENT_MANAGER}>
      Apps/Common
    </Layout>
  )
}

export default AppsCommon
