import React from "react"
import TextInput from "../../inputs/TextInput"
import functions from "../../../functions"
import SubmitInput from "../../inputs/SubmitInput"
import Tile from "../../Tile"
import database from "../../../database"
import Router from "next/router"
import { addCategory, updateCategory } from "../../../redux/actions/category"

class Form extends React.Component {
  submitForm = async (event, id) => {
    const { object, form } = functions.createForm(event, { id })

    let result
    let returnUrl = "/content/categories/all"

    if (id !== 0) {
      result = await database.update(`categories/update/${id}`, updateCategory(object), form)
    } else {
      result = await database.post("categories/create", addCategory, form)
    }

    if (result) {
      Router.push(returnUrl)
    }
  }

  render() {
    const { id, name, isOld } = this.props

    return (
      <Tile title={functions.getTranslation("categories_form")}>
        <form className='content-form' onSubmit={(event) => this.submitForm(event, id)}>
          <TextInput name='name' value={name} title={functions.getTranslation("category_name")} />
          <SubmitInput text={functions.getTranslation(isOld ? "update" : "create")} />
        </form>
      </Tile>
    )
  }
}

Form.defaultProps = {
  id: 0,
  name: "",
  isOld: false,
}

export default Form
