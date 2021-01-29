import React from "react"
import database from "../database"
import { connect } from "react-redux"
import { setCountries } from "../redux/actions/country"
import { setCurrencies } from "../redux/actions/currency"

class DataLoader extends React.Component {
  componentDidMount() {
    this.fetchCountries()
    this.fetchCurrencies()
  }

  fetchCountries = async () => {
    const countries = await database.get("data/countries/get", true)
    this.props.dispatch(setCountries(countries))
  }

  fetchCurrencies = async () => {
    const currencies = await database.get("data/currencies/get", true)
    this.props.dispatch(setCurrencies(currencies))
  }

  render() {
    const { children } = this.props

    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    )
  }
}

export default connect()(DataLoader)
