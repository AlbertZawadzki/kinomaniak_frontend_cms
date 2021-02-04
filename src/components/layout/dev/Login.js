import React from "react"
import Tile from "../../Tile"
import database from "../../../database"
import roles from "../../../data/roleTypes.json"

class Login extends React.Component {
  login = async (role) => {
    const form = new FormData()

    if (role === "owner") {
      form.append("email", "albert.zawadzki97@kinomaniak.eu")
    } else {
      form.append("email", roles[role] + "@kinomaniak.eu")
    }

    form.append("password", roles[role.toString().toUpperCase()])

    await database.doLogin(form)
  }

  checkLogin = async () => {
    await database.auth()
  }

  logout = async () => {
    await database.doLogout()
  }

  render() {
    return (
      <Tile title="User operations" hidden>
        <input
          type="button"
          value="Login as owner"
          onClick={() => this.login("owner")}
        />
        <input
          type="button"
          value="Login as admin"
          onClick={() => this.login("admin")}
        />
        <input
          type="button"
          value="Login as developer"
          onClick={() => this.login("dev")}
        />
        <input
          type="button"
          value="Login as content manager"
          onClick={() => this.login("cm")}
        />
        <input
          type="button"
          value="Login as analytic"
          onClick={() => this.login("analytic")}
        />
        <input
          type="button"
          value="Login as support"
          onClick={() => this.login("support")}
        />
        <input
          type="button"
          value="Login as translator"
          onClick={() => this.login("translator")}
        />
        <input
          type="button"
          value="Login as user"
          onClick={() => this.login("user")}
        />
        <input
          type="button"
          value="Check login"
          onClick={() => this.checkLogin()}
        />
        <input type="button" value="Logout" onClick={() => this.logout()} />
      </Tile>
    )
  }
}

export default Login
