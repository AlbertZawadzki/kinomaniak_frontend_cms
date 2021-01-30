import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/roleTypes.json"

const ContentContentsSingle = ({ id }) => {
  return (
    <Layout title="Contents - single" role={roles.CONTENT_MANAGER}>
      Content/Contents/{id}
    </Layout>
  )
}

ContentContentsSingle.getInitialProps = (context) => {
  let { id } = context.query

  return { id }
}

export default ContentContentsSingle
