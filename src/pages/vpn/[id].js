import React from "react"
import { connect } from "react-redux"
import functions from "../../functions"
import Form from "../../components/pages/vpn/Form"
import Tile from "../../components/Tile"
import SingleItemPage from "../../components/pages/SingleItemPage"
import roles from "../../data/roleTypes.json"
import { updateVpn } from "../../redux/actions/vpn"

class VpnSingle extends React.Component {
  state = {
    vpn: {},
  }

  render() {
    const { vpn } = this.state
    const { id } = this.props
    const fastActionsName = functions.getTranslation("vpns_actions")
    const fastActions = [
      {
        to: "/vpn/",
        name: functions.getTranslation("vpns_see_all"),
      },
      {
        to: "/vpn/new",
        name: functions.getTranslation("vpn_create_new"),
      },
      {
        to: "/vpn/ips",
        name: functions.getTranslation("ips"),
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
        itemName={functions.getTranslation("vpns")}
        id={id}
        storeName='vpns'
        fetchUrl={`vpns/${id}`}
        updateItem={updateVpn}
        returnData={vpn => this.setState({ vpn })}
      >
        <Form {...vpn} isOld />
        <Tile title={functions.getTranslation("vpn_ips")}>
          <pre>
            {JSON.stringify(vpn.ips, null, 2)}
          </pre>
        </Tile>
      </SingleItemPage>)
  }
}

VpnSingle.getInitialProps = (context) => {
  let { id } = context.query
  return { id }
}

export default connect()(VpnSingle)
