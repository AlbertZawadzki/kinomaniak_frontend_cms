import React from "react"
import Login from "./Login"
import Notificator from "./Notificator"
import Redux from "./Redux"
import User from "./User"
import Tile from "../../Tile"

const Dev = () => {
  const mode = process.env.NEXT_PUBLIC_IS_DEV ? "Development" : process.env.IS_DEV ? "Development" : "Production"

  return (
    <Tile title={`${mode} dev box`} hidden column>
      <Login />
      <User />
      <Notificator />
      <Redux />
    </Tile>
  )
}

export default Dev
