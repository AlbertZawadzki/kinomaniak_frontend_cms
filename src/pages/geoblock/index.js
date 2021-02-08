import React from "react"
import ListerItem from "../../components/pages/geoblock/ListerItem"
import functions from "../../functions"
import database from "../../database"
import ListingPage from "../../components/pages/ListingPage"
import roles from "../../data/roleTypes.json"
import { removeGeoblock, setGeoblocks } from "../../redux/actions/geoblock"

const fastActions = {
  name: functions.getTranslation("geoblocks_actions"),
  items: [
    {
      to: "/geoblock/new",
      name: functions.getTranslation("geoblock_create_new"),
    },
  ],
}

const filterKeys = {
  skip: [],
  only: ["id", "name"],
}

const GeoblocksAll = () => (
  <ListingPage
    role={roles.CONTENT_MANAGER}
    storeName={"geoblocks"}
    fetchLink={"geoblocks"}
    actionSet={setGeoblocks}
    actionDelete={(id) => database.remove(`geoblocks/${id}`, () => removeGeoblock(id))}
    title={functions.getTranslation("geoblocks_all_page")}
    fastActions={fastActions}
    listerName={functions.getTranslation("geoblocks_all")}
    linkSingle={"geoblock"}
    Component={ListerItem}
    filterKeys={filterKeys}
  />
)

export default GeoblocksAll
