import React from "react"
import Layout from "../components/layout"
import roles from "../data/_role_types.json"
import Poster from "../components/Poster"

const Home = () => {
  return (
    <Layout title="Home" role={roles.ALL}>
      <Poster
        pinColor="#4169e1"
        pinEffect={null}
        borderVisible
        borderColor="#0F0"
        pinText="Example"
        hiddenText="Example"
      />
      <Poster
        pinText="Example"
        hiddenText="Example"
        url={"/content"}
        forceHover
      />
    </Layout>
  )
}

export default Home
