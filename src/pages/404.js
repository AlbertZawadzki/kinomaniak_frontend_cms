import React from "react"
import Layout from "../components/layout"
import functions from "../functions"

const Error404 = () => {
  return <Layout>
    <div className='error'>
      {functions.getTranslation("page_not_found")}
    </div>
  </Layout>
}

export default Error404