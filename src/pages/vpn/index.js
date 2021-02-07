import React from "react"
import ListerItem from "../../components/pages/vpn/ListerItem"
import { removeVpn, setVpns } from "../../redux/actions/vpn"
import functions from "../../functions"
import database from "../../database"
import ListingPage from "../../components/pages/ListingPage"
import roles from "../../data/roleTypes.json"

const fastActions = {
  name: functions.getTranslation("vpns_actions"),
  items: [
    {
      to: "/vpn/new",
      name: functions.getTranslation("vpn_create_new"),
    },
    {
      to: "/vpn/ips",
      name: functions.getTranslation("ips"),
    },
  ],
}

const filterKeys = {
  skip: [],
  only: ["id", "name"],
}

const VpnsAll = () => (
  <ListingPage
    role={roles.ADMIN}
    storeName={"vpns"}
    fetchLink={"vpns"}
    actionSet={setVpns}
    actionDelete={(id) => database.remove(`vpns/${id}`, () => removeVpn(id))}
    title={functions.getTranslation("vpns_all_page")}
    fastActions={fastActions}
    listerName={functions.getTranslation("vpns_all")}
    linkSingle={"vpn"}
    Component={ListerItem}
    filterKeys={filterKeys}
  />
)

export default VpnsAll
