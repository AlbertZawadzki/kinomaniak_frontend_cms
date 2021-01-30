import React from "react"
import database from "../database"
import { connect } from "react-redux"
import { setCountries } from "../redux/actions/country"
import { setCurrencies } from "../redux/actions/currency"

class DataLoader extends React.Component {
  componentDidMount() {
    setTimeout(() => this.fetchData(), 5000)
  }

  fetchData = async () => {
    const data = await database.get("data/get", true)
    const { countries, currencies } = data

    this.props.dispatch(setCountries(countries))
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
