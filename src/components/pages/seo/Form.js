import React from "react"
import TextInput from "../../inputs/TextInput"
import functions from "../../../functions"
import SubmitInput from "../../inputs/SubmitInput"
import Tile from "../../Tile"
import database from "../../../database"
import Router from "next/router"
import TextArea from "../../inputs/TextArea"
import { addSeo, updateSeo } from "../../../redux/actions/seo"

const submitForm = async (event, id) => {
  const { form } = functions.createForm(event)

  let result
  let returnUrl = "/seo"

  if (id !== 0) {
    result = await database.update(`seo-texts/${id}`, updateSeo, form)
  } else {
    result = await database.post("seo-texts/", addSeo, form)
  }

  if (result) {
    Router.push(returnUrl)
  }
}

class Form extends React.Component {
  render() {
    const { id, description, url, isOld } = this.props

    return (
      <Tile title={functions.getTranslation("seos_form")}>
        <form className='seo-form' onSubmit={(event) => submitForm(event, id)}>
          <TextInput name='url' value={url} title={functions.getTranslation("seo_url")} />
          <TextArea name='description' value={description} title={functions.getTranslation("seo_description")} />
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
