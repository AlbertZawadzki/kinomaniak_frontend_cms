import React from "react"
import TextInput from "../../inputs/TextInput"
import functions from "../../../functions"
import SubmitInput from "../../inputs/SubmitInput"
import Tile from "../../Tile"
import database from "../../../database"
import Router from "next/router"
import { addGeoblock, updateGeoblock } from "../../../redux/actions/geoblock"

const submitForm = async (event, id) => {
  const { form } = functions.createForm(event)

  let result
  let returnUrl = "/geoblock"

  if (id !== 0) {
    result = await database.update(`geoblocks/${id}`, updateGeoblock(), form)
  } else {
    result = await database.post("geoblocks/", addGeoblock(), form)
  }

  if (result) {
    Router.push(returnUrl)
  }
}

class Form extends React.Component {
  render() {
    const { id, name, countries, isOld } = this.props

    return (
      <Tile title={functions.getTranslation("vpns_form")}>
        <form className='geoblock-form' onSubmit={(event) => submitForm(event, id)}>
          <TextInput name='name' value={name} title={functions.getTranslation("geoblock_name")} />

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
  countries: [],
}

export default Form
