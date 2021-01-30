import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"

const ContentImagesSingle = ({ id }) => {
  return (
    <Layout title="Images - single" role={roles.CONTENT_MANAGER}>
      Content/Images/{id}
    </Layout>
  )
}

ContentImagesSingle.getInitialProps = (context) => {
  let { id } = context.query

  return { id }
}

export default ContentImagesSingle
