import React from "react"
import TextInput from "../inputs/TextInput"
import SubmitInput from "../inputs/SubmitInput"
import functions from "../../functions"
import CheckboxInput from "../inputs/CheckboxInput"
import database from "../../database"

class LoginPanel extends React.Component {
  login = async (event) => {
    const { form } = functions.createForm(event)
    await database.doLogin(form)
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.login}>
        <TextInput
          title={functions.getTranslation("user_email")}
          name="email"
          type='email'
        />
        <TextInput
          title={functions.getTranslation("password")}
          name="password"
          type='password'
        />
        <CheckboxInput
          name="remember_me"
          title={functions.getTranslation("remember_me")}
        />
        <SubmitInput text={functions.getTranslation("login")} small />
      </form>
    )
  }
}

export default LoginPanel
