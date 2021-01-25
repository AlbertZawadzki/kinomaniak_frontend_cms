import React from "react"
import Login from "./Login"
import Notificator from "./Notificator"
import Redux from "./Redux"
import User from "./User"

const Dev = () => {
  return (
    <div>
      <h1>#DEV BOX</h1>
      <Login />
      <User />
      <Notificator />
      <Redux />
    </div>
  )
}

export default Dev
