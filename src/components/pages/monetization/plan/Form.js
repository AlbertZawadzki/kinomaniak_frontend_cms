import React from "react"
import TextInput from "../../../inputs/TextInput"
import functions from "../../../../functions"
import SubmitInput from "../../../inputs/SubmitInput"
import Tile from "../../../Tile"
import database from "../../../../database"
import Router from "next/router"
import { addPlan, updatePlan } from "../../../../redux/actions/plan"
import CheckboxSwitchInput from "../../../inputs/CheckboxSwitchInput"
import TextArea from "../../../inputs/TextArea"
import MultiSelectInput from "../../../inputs/MultiSelectInput"
import store from "../../../../redux/store"
import { connect } from "react-redux"

class Form extends React.Component {
  state = {
    currenciesToChoose: [],
    chosenCurrencies: [],
  }

  submitForm = async (event, id) => {
    const { chosenCurrencies } = this.state
    const { form, object } = functions.createForm(event, { id })

    form.append("currencies", JSON.stringify(chosenCurrencies))

    console.log(object, chosenCurrencies)

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

  componentDidMount() {
    let { currencies } = this.props
    let { currenciesToChoose } = this.state
    currenciesToChoose = store.getState().currencies?.data || []
    this.setState({ currenciesToChoose, chosenCurrencies: currencies })

    store.subscribe(() => {
      currenciesToChoose = store.getState().currencies?.data || []
      this.setState({ currenciesToChoose })
    })
  }

  setCurrency = (number, input) => {
    const { chosenCurrencies } = this.state

    chosenCurrencies[number].amount = input.value

    this.setState({ chosenCurrencies })
  }

  render() {
    const { id, name, isOld, available, duration, auto_renew, description } = this.props
    const { currenciesToChoose, chosenCurrencies } = this.state

    return (
      <Tile title={functions.getTranslation("plans_form")}>
        <form className='content-form' onSubmit={(event) => this.submitForm(event, id)}>
          <TextInput name='name' value={name} title={functions.getTranslation("plan_name")} />
          <TextInput type='number' name='duration' value={duration} title={functions.getTranslation("plan_duration")} />
          <CheckboxSwitchInput name='auto_renew' checked={auto_renew} title={functions.getTranslation("auto_renew")} />
          <CheckboxSwitchInput name='available' checked={available} title={functions.getTranslation("available")} />
          <TextArea name='description' value={description} title={functions.getTranslation("plan_description")} />
          <MultiSelectInput
            name='chosen-currencies'
            title={functions.getTranslation("plan_currencies_choose")}
            options={currenciesToChoose}
            showKeys={["symbol", "name"]}
            actionReturn={(chosenCurrencies) => this.setState({ chosenCurrencies })}
            selected={chosenCurrencies}
          />
          {chosenCurrencies.length > 0 && (
            <Tile title={functions.getTranslation("plan_currencies_chosen")}>
              {
                chosenCurrencies.map((currency, no) => (
                  <TextInput
                    type='number'
                    step='0.01'
                    name={`ignore-currency-item-${currency.id}`}
                    value={currency.amount || 0}
                    title={`${functions.getTranslation("plan_currency_amount")} ${currency.name}`}
                    actionReturn={(value) => this.setCurrency(no, value)}
                  />
                ))
              }
            </Tile>
          )}
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
  duration: 24,
  description: "",
  available: true,
  auto_renew: false,
  currencies: [],
}

export default connect()(Form)
