import React from "react"
import TextInput from "../../../inputs/TextInput"
import functions from "../../../../functions"
import CheckboxSwitchInput from "../../../inputs/CheckboxSwitchInput"

export default class GatewayStripeForm extends React.Component {
  render() {
    return (
      <form>
        <TextInput name='name' title={functions.getTranslation("stripe_publisher_key")} />
        <TextInput name='token' title={functions.getTranslation("stripe_secret_key")} />
        <CheckboxSwitchInput name='available' title={functions.getTranslation("available")} />
      </form>
    )
  }
}