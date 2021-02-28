import React from "react"
import ListerItem from "../../../components/pages/monetization/voucher/ListerItem"
import { removeVoucher, setVouchers } from "../../../redux/actions/voucher"
import functions from "../../../functions"
import database from "../../../database"
import ListingPage from "../../../components/pages/ListingPage"
import roles from "../../../data/roleTypes.json"

const fastActions = {
  name: functions.getTranslation("vouchers_actions"),
  items: [
    {
      to: "/monetization/vouchers/new",
      name: functions.getTranslation("voucher_create_new"),
    },
  ],
}

const filterKeys = {
  skip: [],
  only: ["id", "name", "available"],
}

const MonetizationVouchersAll = () => (
  <ListingPage
    role={roles.OWNER}
    storeName={"vouchers"}
    fetchLink={"vouchers"}
    actionSet={setVouchers}
    actionDelete={(id) => database.remove(`vouchers/${id}`, () => removeVoucher(id))}
    title={functions.getTranslation("vouchers_all_page")}
    fastActions={fastActions}
    listerName={functions.getTranslation("vouchers_all")}
    linkSingle={"monetization/vouchers"}
    Component={ListerItem}
    filterKeys={filterKeys}
  />
)

export default MonetizationVouchersAll
