import React from "react"
import Tile from "../../Tile"
import store from "../../../redux/store"
import { setCsrf, setToken, setUser } from "../../../redux/actions/request"
import database from "../../../database"
import roles from "../../../data/roleTypes.json"

class Login extends React.Component {
  login = async (role) => {
    let url = "http://localhost:8000/api-test/" + role
    if (store.getState().request.data?.token) {
      url +=
        "?_token=" +
        (localStorage.getItem("_token") || store.getState().request.data?.token)
    }

    await fetch(url, { method: "GET" })
      .then(async (res) => {
        return res.json()
      })
      .then((data) => {
        const object = {
          id: data?.data?.id || 0,
          name: data?.data?.name || "No name",
          role: data?.data?.role || roles.USER,
          session: data?.data?.ssid || null,
        }

        localStorage.setItem("_token", null)
        localStorage.setItem("_token", data?._token || null)
        store.dispatch(setToken(data?._token || null))
        store.dispatch(setCsrf(data?.csrf || null))
        store.dispatch(setUser(object || null))
      })
  }

  checkLogin = async () => {
    await database.getUser()
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
          value="Login as new_user"
          onClick={() => this.login("newuser")}
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
