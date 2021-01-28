import React from "react"
import Layout from "../components/layout"
import roles from "../data/_role_types.json"
import Tile from "../components/Tile"

const Home = () => {
  return (
    <Layout title="Home" role={roles.ALL}>
      <Tile title={"Hi"}>
        Welcome to the cms
      </Tile>
    </Layout>
  )
}

export default Home
