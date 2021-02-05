import React from "react"
import TextInput from "../../inputs/TextInput"
import functions from "../../../functions"
import SubmitInput from "../../inputs/SubmitInput"
import Tile from "../../Tile"
import database from "../../../database"
import Router from "next/router"
import { addPoster, updatePoster } from "../../../redux/actions/poster"
import ColorInput from "../../inputs/ColorInput"
import Poster from "../../Poster"
import borderEffects from "../../../data/borderEffects.json"
import pinEffects from "../../../data/pinEffects.json"
import SelectInput from "../../inputs/SelectInput"
import CheckboxSwitchInput from "../../inputs/CheckboxSwitchInput"

class Form extends React.Component {
  state = {
    pinColor: "#FF0000",
    pinEffect: "None",
    borderVisible: false,
    borderColor: "#000000",
    borderEffect: "None",
  }

  submitForm = async (event, id) => {
    const { form } = functions.createForm(event, { id })

    let result
    let returnUrl = "/content/posters/"

    if (id !== 0) {
      result = await database.update(`poster-styles/${id}`, updatePoster, form)
    } else {
      result = await database.post("poster-styles/", addPoster, form)
    }

    if (result) {
      Router.push(returnUrl)
    }
  }

  componentDidMount() {
    const { pin_color, pin_effect, border_visible, border_color, border_effect } = this.props

    this.setState({
      pinEffect: pin_effect,
      pinColor: pin_color,
      borderEffect: border_effect,
      borderColor: border_color,
      borderVisible: border_visible,
    })
  }

  render() {
    const { id, name, isOld } = this.props
    const { pinColor, pinEffect, borderVisible, borderColor, borderEffect } = this.state

    return (
      <Tile title={functions.getTranslation("posters_form")}>
        <div className='poster-with-preview'>
          <div className='poster-preview-wrapper'>
            <Poster
              pinEffect={pinEffect}
              pinColor={pinColor}
              borderEffect={borderEffect}
              borderColor={borderColor}
              borderVisible={borderVisible}
            />
          </div>
          <form className='content-form' onSubmit={(event) => this.submitForm(event, id)}>
            <TextInput
              name='name'
              value={name}
              title={functions.getTranslation("poster_name")}
            />
            <ColorInput
              name='pin_color'
              value={pinColor}
              title={`${functions.getTranslation("pin_color")}: ${pinColor}`}
              actionReturn={(data) => this.setState({ pinColor: data.value })}
            />
            <SelectInput
              name='pin_effect'
              selected={pinEffect}
              title={functions.getTranslation("pin_effect")}
              options={pinEffects}
              optionKeyName='name'
              returnKeyName='name'
              actionReturn={(data) => this.setState({ pinEffect: data.value })}
            />
            <CheckboxSwitchInput
              name='border_visible'
              checked={borderVisible}
              title={functions.getTranslation("border_visible")}
              actionReturn={(data) => this.setState({ borderVisible: data.checked })}
            />
            {!!borderVisible && (
              <React.Fragment>
                <ColorInput
                  name='border_color'
                  value={borderColor}
                  title={`${functions.getTranslation("border_color")}: ${borderColor}`}
                  actionReturn={(data) => this.setState({ borderColor: data.value })}
                />
                <SelectInput
                  name='border_effect'
                  selected={borderEffect}
                  title={functions.getTranslation("border_effect")}
                  options={borderEffects}
                  optionKeyName='name'
                  returnKeyName='name'
                  actionReturn={(data) => this.setState({ borderEffect: data.value })}
                />
              </React.Fragment>
            )}
            <SubmitInput text={functions.getTranslation(isOld ? "update" : "create")} />
          </form>
        </div>
      </Tile>
    )
  }
}

Form.defaultProps = {
  id: 0,
  name: "",
  pin_color: "#FF0000",
  pin_effect: "None",
  border_visible: false,
  border_color: "#000000",
  border_effect: "None",
  isOld: false,
}

export default Form
