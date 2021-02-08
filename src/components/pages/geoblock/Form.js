import React from "react"
import TextInput from "../../inputs/TextInput"
import functions from "../../../functions"
import database from "../../../database"
import SubmitInput from "../../inputs/SubmitInput"
import Tile from "../../Tile"
import Router from "next/router"
import { addGeoblock, updateGeoblock } from "../../../redux/actions/geoblock"
import MultiSelectInput from "../../inputs/MultiSelectInput"
import store from "../../../redux/store"
import databaseConfig from "../../../database/config"

const submitForm = async (event, id, countries) => {
  const { form } = functions.createForm(event, { countries: JSON.stringify(countries) })

  let result
  let returnUrl = "/geoblock"

  if (id !== 0) {
    result = await database.update(`geoblocks/${id}`, updateGeoblock, form)
  } else {
    result = await database.post("geoblocks/", addGeoblock, form)
  }

  if (result) {
    Router.push(returnUrl)
  }
}

class Form extends React.Component {
  state = {
    countries: [],
    allCountries: [],
  }

  getCountries = async () => {
    let { allCountries } = this.state
    allCountries = store.getState().countries.data
    this.setState({ allCountries })

    store.subscribe(() => {
      allCountries = store.getState().countries.data
      this.setState({ allCountries })
    })

    if (allCountries.length === 0) {
      await databaseConfig.initData()
    }
  }

  componentWillMount() {
    this.getCountries()
  }

  componentDidMount() {
    const { countries } = this.props
    this.setState({ countries })
  }

  render() {
    const { id, name, isOld } = this.props
    const { countries, allCountries } = this.state

    return (
      <Tile title={functions.getTranslation("geoblocks_form")}>
        <form className='geoblock-form' onSubmit={(event) => submitForm(event, id, countries)}>
          <TextInput name='name' value={name} title={functions.getTranslation("geoblock_name")} />
          <MultiSelectInput
            title={functions.getTranslation("geoblock_name")}
            name='countries'
            selected={countries}
            showKeys={["name", "code", "region"]}
            options={allCountries}
            actionReturn={(items) => this.setState({ countries: items })}
          />
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
