import React from "react"
import Layout from "../components/layout"

const Error = ({ statusCode }) => {
  return <Layout>
    <div className='error'>
      {statusCode}
    </div>
  </Layout>
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error