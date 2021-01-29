import React from "react"
import functions from "../../../functions"
import database from "../../../database"
import ListingPage from "../../../components/pages/ListingPage"
import { removePoster, setPosters } from "../../../redux/actions/poster"
import PosterShortSingle from "../../../components/content/PosterShortSingle"

const fastActionsName = functions.getTranslation("posters_actions")
const fastActions = [
  {
    to: "/content/posters/new",
    name: functions.getTranslation("posters_create_new"),
  },
]

const ContentPostersAll = () => (
  <ListingPage
    storeName={"posters"}
    fetchLink={"poster-styles/get"}
    actionSet={setPosters}
    actionDelete={(id) => database.remove(`posters/delete/${id}`, removePoster(id))}
    title={functions.getTranslation("posters_all_page")}
    fastActions={{ name: fastActionsName, items: fastActions }}
    listerName={functions.getTranslation("posters_all")}
    linkSingle={"content/posters"}
    Component={PosterShortSingle}
  />
)

export default ContentPostersAll
