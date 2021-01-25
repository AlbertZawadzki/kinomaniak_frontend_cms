import React from "react"
import TextInput from "../inputs/TextInput"
import SubmitInput from "../inputs/SubmitInput"
import functions from "../../functions"
import CheckboxInput from "../inputs/CheckboxInput"

class LoginPanel extends React.Component {
  render() {
    return (
      <form className="login-form">
        <TextInput
          title={functions.getTranslation("user_login")}
          name="login"
        />
        <TextInput
          title={functions.getTranslation("password")}
          name="password"
          isPassword
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
