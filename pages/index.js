import React from "react"
import Layout from "../components/layout"
import roles from "../data/_role_types.json"

const Home = () => {
  return (
    <Layout title="Home" role={roles.ALL}>
      Home
    </Layout>
  )
}

export default Home
