import React from "react"
import TextInput from "../../../inputs/TextInput"
import functions from "../../../../functions"
import SubmitInput from "../../../inputs/SubmitInput"
import Tile from "../../../Tile"
import database from "../../../../database"
import Router from "next/router"
import { addVoucher, updateVoucher } from "../../../../redux/actions/voucher"
import CheckboxSwitchInput from "../../../inputs/CheckboxSwitchInput"

class Form extends React.Component {
  submitForm = async (event, id) => {
    const { form, object } = functions.createForm(event, { id })

    const codes = []
    for (let i = 0; i < form.get('number_of_codes'); i++) {
      const code = Math.random().toString(36).substring(5)
      codes.push({ code })
    }

    form.append("codes", JSON.stringify(codes))

    let result
    let returnUrl = "/monetization/vouchers"

    if (id !== 0) {
      result = await database.update(`vouchers/${id}`, updateVoucher, form)
    } else {
      result = await database.post("vouchers/", addVoucher, form)
    }

    if (result) {
      Router.push(returnUrl)
    }
  }

  render() {
    const { id, name, codes, valid_from, valid_to, isOld, available } = this.props

    return (
      <Tile title={functions.getTranslation("vouchers_form")}>
        <form className='content-form' onSubmit={(event) => this.submitForm(event, id)}>
          <TextInput name='name' value={name} title={functions.getTranslation("voucher_name")} />
          {!isOld && (
            <TextInput
              type='number'
              name='number_of_codes'
              value={codes.length || 0}
              title={functions.getTranslation("voucher_codes_number")}
            />
          )}
          <TextInput type='date' name='valid_from' value={valid_from} title={functions.getTranslation("valid_from")} />
          <TextInput type='date' name='valid_to' value={valid_to} title={functions.getTranslation("valid_to")} />
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
  codes: [],
  valid_from: "",
  valid_to: "",
  isOld: false,
  available: true,
}

export default Form
