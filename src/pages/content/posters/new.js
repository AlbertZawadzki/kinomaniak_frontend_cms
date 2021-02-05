import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"
import Form from "../../../components/content/poster/Form"

const ContentPostersNew = () => {
  return (
    <Layout title="Posters - new" role={roles.CONTENT_MANAGER}>
      <Form />
    </Layout>
  )
}

export default ContentPostersNew
