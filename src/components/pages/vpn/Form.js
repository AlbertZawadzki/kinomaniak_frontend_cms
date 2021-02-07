import React from "react"
import TextInput from "../../inputs/TextInput"
import functions from "../../../functions"
import SubmitInput from "../../inputs/SubmitInput"
import Tile from "../../Tile"
import database from "../../../database"
import Router from "next/router"
import { addVpn, updateVpn } from "../../../redux/actions/vpn"

const submitForm = async (event, id) => {
  const { object, form } = functions.createForm(event)

  let result
  let returnUrl = "/vpn"

  if (id !== 0) {
    result = await database.update(`vpns/${id}`, updateVpn, form)
  } else {
    result = await database.post("vpns/", addVpn, form)
  }

  if (result) {
    Router.push(returnUrl)
  }
}

class Form extends React.Component {
  state = {
    newImage: "",
  }

  render() {
    const { id, name, url, isOld } = this.props

    return (
      <Tile title={functions.getTranslation("vpns_form")}>
        <form className='vpn-form' onSubmit={(event) => submitForm(event, id)}>
          <TextInput name='name' value={name} title={functions.getTranslation("vpn_name")} />
          <TextInput name='url' value={url} title={functions.getTranslation("vpn_url")} />
          <SubmitInput text={functions.getTranslation(isOld ? "update" : "create")} />
        </form>
      </Tile>
    )
  }
}

Form.defaultProps = {
  id: 0,
  name: "",
  url: "",
}

export default Form
