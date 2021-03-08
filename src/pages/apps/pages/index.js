import React from "react"
import ListerItem from "../../../components/pages/apps/pages/ListerItem"
import { removePage, setPages } from "../../../redux/actions/page"
import functions from "../../../functions"
import database from "../../../database"
import ListingPage from "../../../components/pages/ListingPage"
import roles from "../../../data/roleTypes.json"

const fastActions = {
  name: functions.getTranslation("pages_actions"),
  items: [
    {
      to: "/apps/pages/new",
      name: functions.getTranslation("page_create_new"),
    },
  ],
}

const filterKeys = {
  skip: [],
  only: ["id", "name"],
}

const PagesAll = () => (
  <ListingPage
    role={roles.ADMIN}
    storeName={"pages"}
    fetchLink={"page"}
    actionSet={setPages}
    actionDelete={(id) => database.remove(`page/${id}`, () => removePage(id))}
    title={functions.getTranslation("pages_all_page")}
    fastActions={fastActions}
    listerName={functions.getTranslation("pages_all")}
    linkSingle={"apps/pages"}
    Component={ListerItem}
    filterKeys={filterKeys}
  />
)

export default PagesAll
