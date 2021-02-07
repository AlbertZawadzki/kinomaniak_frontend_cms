import React from "react"
import functions from "../../../functions"
import database from "../../../database"
import ListingPage from "../../../components/pages/ListingPage"
import { removePoster, setPosters } from "../../../redux/actions/poster"
import ListerItem from "../../../components/pages/content/poster/ListerItem"

const fastActionsName = functions.getTranslation("posters_actions")
const fastActions = [
  {
    to: "/content/posters/new",
    name: functions.getTranslation("posters_create_new"),
  },
]

const filterKeys = {
  skip: [],
  only: ["id", "name"],
}

const ContentPostersAll = () => (
  <ListingPage
    storeName={"posters"}
    fetchLink={"poster-styles"}
    actionSet={setPosters}
    actionDelete={(id) => database.remove(`posters/${id}`, removePoster(id))}
    title={functions.getTranslation("posters_all_page")}
    fastActions={{ name: fastActionsName, items: fastActions }}
    listerName={functions.getTranslation("posters_all")}
    linkSingle={"content/posters"}
    Component={ListerItem}
    filterKeys={filterKeys}
  />
)

export default ContentPostersAll
