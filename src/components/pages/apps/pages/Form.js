import React from "react"
import TextInput from "../../../inputs/TextInput"
import functions from "../../../../functions"
import SubmitInput from "../../../inputs/SubmitInput"
import Tile from "../../../Tile"
import database from "../../../../database"
import Router from "next/router"
import { addPage, updatePage } from "../../../../redux/actions/page"
import TextArea from "../../../inputs/TextArea"
import CheckboxSwitchInput from "../../../inputs/CheckboxSwitchInput"

const submitForm = async (event, id) => {
  const { form } = functions.createForm(event)

  let result
  let returnUrl = "/apps/pages"

  if (id !== 0) {
    result = await database.update(`page/${id}`, updatePage, form)
  } else {
    result = await database.post("page/", addPage, form)
  }

  if (result) {
    Router.push(returnUrl)
  }
}

class Form extends React.Component {
  render() {
    const { id, title, content, url, available, isOld } = this.props

    return (
      <Tile title={functions.getTranslation("page_form")}>
        <form className='page-form' onSubmit={(event) => submitForm(event, id)}>
          <TextInput name='title' value={title} title={functions.getTranslation("page_title")} />
          <TextArea name='content' value={content} title={functions.getTranslation("page_content")} />
          <TextInput name='url' value={url} title={functions.getTranslation("page_url")} />
          <CheckboxSwitchInput
            checked={available}
            name='available'
            title={functions.getTranslation("page_available")}
          />
          <SubmitInput text={functions.getTranslation(isOld ? "update" : "create")} />
        </form>
      </Tile>
    )
  }
}

Form.defaultProps = {
  id: 0,
  title: "",
  content: "",
  url: "",
  available: true,
  isOld: false,
}

export default Form
