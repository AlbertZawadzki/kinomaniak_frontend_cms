import React from "react"
import TextInput from "../../../inputs/TextInput"
import functions from "../../../../functions"
import SubmitInput from "../../../inputs/SubmitInput"
import Tile from "../../../Tile"
import database from "../../../../database"
import Router from "next/router"
import { addPlan, updatePlan } from "../../../../redux/actions/plan"
import CheckboxSwitchInput from "../../../inputs/CheckboxSwitchInput"

class Form extends React.Component {
  submitForm = async (event, id) => {
    const { form, object } = functions.createForm(event, { id })

    console.log(object)

    return

    let result
    let returnUrl = "/monetization/plans"

    if (id !== 0) {
      result = await database.update(`plans/${id}`, updatePlan, form)
    } else {
      result = await database.post("plans/", addPlan, form)
    }

    if (result) {
      Router.push(returnUrl)
    }
  }

  render() {
    const { id, name, isOld, available } = this.props

    return (
      <Tile title={functions.getTranslation("plans_form")}>
        <form className='content-form' onSubmit={(event) => this.submitForm(event, id)}>
          <TextInput name='name' value={name} title={functions.getTranslation("plan_name")} />
          <CheckboxSwitchInput name='available' checked={available} title={functions.getTranslation("available")} />
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
  available: true,
}

export default Form
