import React from "react"
import { connect } from "react-redux"
import functions from "../../functions"
import Form from "../../components/pages/geoblock/Form"
import SingleItemPage from "../../components/pages/SingleItemPage"
import roles from "../../data/roleTypes.json"
import { updateGeoblock } from "../../redux/actions/geoblock"

class VpnSingle extends React.Component {
  state = {
    geoblock: {},
  }

  render() {
    const { geoblock } = this.state
    const { id } = this.props
    const fastActionsName = functions.getTranslation("geoblocks_actions")
    const fastActions = [
      {
        to: "/geoblock/",
        name: functions.getTranslation("geoblocks_see_all"),
      },
      {
        to: "/geoblock/new",
        name: functions.getTranslation("geoblock_create_new"),
      },
    ]

    return (
      <SingleItemPage
        role={roles.CONTENT_MANAGER}
        fastActions={
          {
            name: fastActionsName,
            actions: fastActions,
          }
        }
        itemName={functions.getTranslation("geoblocks")}
        id={id}
        storeName='geoblocks'
        fetchUrl={`geoblocks/${id}`}
        updateItem={updateGeoblock}
        returnData={geoblock => this.setState({ geoblock })}
      >
        <Form {...geoblock} isOld />
      </SingleItemPage>)
  }
}

VpnSingle.getInitialProps = (context) => {
  let { id } = context.query
  return { id }
}

export default connect()(VpnSingle)
