import React from "react"
import Login from "./Login"
import Notificator from "./Notificator"
import Redux from "./Redux"
import User from "./User"
import Tile from "../../Tile"

const Dev = () => {
  return (
    <Tile title={"#DEV BOX"} hidden column>
      <Login />
      <User />
      <Notificator />
      <Redux />
    </Tile>
  )
}

export default Dev
