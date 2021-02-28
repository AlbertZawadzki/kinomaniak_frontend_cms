import React from "react"
import { connect } from "react-redux"
import functions from "../../../functions"
import { updateVoucher } from "../../../redux/actions/voucher"
import Form from "../../../components/pages/monetization/voucher/Form"
import Tile from "../../../components/Tile"
import SingleItemPage from "../../../components/pages/SingleItemPage"
import roles from "../../../data/roleTypes.json"

class MonetizationVoucherSingle extends React.Component {
  state = {
    voucher: {},
  }

  render() {
    const { voucher } = this.state
    const { id } = this.props
    const fastActionsName = functions.getTranslation("vouchers_actions")
    const fastActions = [
      {
        to: "/monetization/vouchers/",
        name: functions.getTranslation("vouchers_see_all"),
      },
      {
        to: "/monetization/vouchers/new",
        name: functions.getTranslation("voucher_create_new"),
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
        itemName={functions.getTranslation("vouchers")}
        id={id}
        storeName='vouchers'
        fetchUrl={`vouchers/${id}`}
        updateItem={updateVoucher}
        returnData={voucher => this.setState({ voucher })}
      >
        <Form {...voucher} isOld />
        <Tile title={functions.getTranslation("voucher_codes")}>
          <pre>
            {JSON.stringify(voucher.codes, null, 2)}
          </pre>
        </Tile>
      </SingleItemPage>)
  }
}

MonetizationVoucherSingle.getInitialProps = (context) => {
  let { id } = context.query
  return { id }
}

export default connect()(MonetizationVoucherSingle)
