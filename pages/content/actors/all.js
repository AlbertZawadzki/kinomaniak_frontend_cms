import React from "react"
import ActorShortSingle from "../../../components/content/ActorShortSingle"
import { removeActor, setActors } from "../../../redux/actions/actor"
import functions from "../../../functions"
import database from "../../../database"
import ListingPage from "../../../components/pages/ListingPage"

const fastActionsName = functions.getTranslation("actors_actions")
const fastActions = [
  {
    to: "/content/actors/new",
    name: functions.getTranslation("actor_create_new"),
  },
]

const ContentActorsAll = () => (
  <ListingPage
    storeName={"actors"}
    fetchLink={"actors/get"}
    actionSet={setActors}
    actionDelete={(id) => database.remove(`actors/delete/${id}`, removeActor(id))}
    title={functions.getTranslation("actors_all_page")}
    fastActions={{ name: fastActionsName, items: fastActions }}
    listerName={functions.getTranslation("actors_all")}
    linkSingle={"content/actors"}
    Component={ActorShortSingle}
  />
)

export default ContentActorsAll
