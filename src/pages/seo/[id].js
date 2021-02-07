import React from "react"
import { connect } from "react-redux"
import functions from "../../functions"
import Form from "../../components/pages/seo/Form"
import SingleItemPage from "../../components/pages/SingleItemPage"
import roles from "../../data/roleTypes.json"
import { updateSeo } from "../../redux/actions/seo"

class SeoSingle extends React.Component {
  state = {
    seo: {},
  }

  render() {
    const { seo } = this.state
    const { id } = this.props
    const fastActionsName = functions.getTranslation("seos_actions")
    const fastActions = [
      {
        to: "/seo",
        name: functions.getTranslation("seos_see_all"),
      },
      {
        to: "/seo/new",
        name: functions.getTranslation("seo_create_new"),
      },
    ]

    return (
      <SingleItemPage
        role={roles.ADMIN}
        fastActions={
          {
            name: fastActionsName,
            actions: fastActions,
          }
        }
        itemName={functions.getTranslation("seos")}
        id={id}
        storeName='seos'
        fetchUrl={`seo-texts/${id}`}
        updateItem={updateSeo}
        returnData={seo => this.setState({ seo })}
      >
        <Form {...seo} isOld />
      </SingleItemPage>)
  }
}

SeoSingle.getInitialProps = (context) => {
  let { id } = context.query
  return { id }
}

export default connect()(SeoSingle)
