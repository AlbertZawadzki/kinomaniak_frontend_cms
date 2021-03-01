import React from "react"
import { connect } from "react-redux"
import functions from "../../../functions"
import { updatePlan } from "../../../redux/actions/plan"
import Form from "../../../components/pages/monetization/plan/Form"
import SingleItemPage from "../../../components/pages/SingleItemPage"
import roles from "../../../data/roleTypes.json"

class MonetizationPlanSingle extends React.Component {
  state = {
    plan: {},
  }

  render() {
    const { plan } = this.state
    const { id } = this.props
    const fastActionsName = functions.getTranslation("plans_actions")
    const fastActions = [
      {
        to: "/monetization/plans/",
        name: functions.getTranslation("plans_see_all"),
      },
      {
        to: "/monetization/plans/new",
        name: functions.getTranslation("plan_create_new"),
      },
    ]

    return (
      <SingleItemPage
        role={roles.OWNER}
        fastActions={
          {
            name: fastActionsName,
            actions: fastActions,
          }
        }
        itemName={functions.getTranslation("plans")}
        id={id}
        storeName='plans'
        fetchUrl={`plans/${id}`}
        updateItem={updatePlan}
        returnData={plan => this.setState({ plan })}
      >
        <Form {...plan} isOld />
      </SingleItemPage>)
  }
}

MonetizationPlanSingle.getInitialProps = (context) => {
  let { id } = context.query
  return { id }
}

export default connect()(MonetizationPlanSingle)
