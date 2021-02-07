import React from "react"
import ListerItem from "../../components/pages/seo/ListerItem"
import functions from "../../functions"
import database from "../../database"
import ListingPage from "../../components/pages/ListingPage"
import roles from "../../data/roleTypes.json"
import { removeSeo, setSeos } from "../../redux/actions/seo"

const fastActions = {
  name: functions.getTranslation("seos_actions"),
  items: [
    {
      to: "/seo/new",
      name: functions.getTranslation("seo_create_new"),
    },
  ],
}

const filterKeys = {
  skip: [],
  only: ["id", "url", "description"],
}

const VpnsAll = () => (
  <ListingPage
    role={roles.CONTENT_MANAGER}
    storeName={"seos"}
    fetchLink={"seo-texts"}
    actionSet={setSeos}
    actionDelete={(id) => database.remove(`seo-texts/${id}`, () => removeSeo(id))}
    title={functions.getTranslation("seos_all_page")}
    fastActions={fastActions}
    listerName={functions.getTranslation("seos_all")}
    linkSingle={"seo"}
    Component={ListerItem}
    filterKeys={filterKeys}
  />
)

export default VpnsAll
