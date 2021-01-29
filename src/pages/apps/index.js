import React from "react"
import Layout from "../../components/layout"
import roles from "../../data/roleTypes.json"

const Apps = () => {
  return (
    <Layout title="Apps" role={roles.CONTENT_MANAGER}>
      Apps/
    </Layout>
  )
}

export default Apps
