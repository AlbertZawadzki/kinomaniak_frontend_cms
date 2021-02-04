import React from "react"
import ActorShortSingle from "../../../components/content/ActorShortSingle"
import { removeActor, setActors } from "../../../redux/actions/actor"
import functions from "../../../functions"
import database from "../../../database"
import ListingPage from "../../../components/pages/ListingPage"

const fastActions = {
  name: functions.getTranslation("actors_actions"),
  items: [
    {
      to: "/content/actors/new",
      name: functions.getTranslation("actor_create_new"),
    },
  ],
}

const filterKeys = {
  skip: ["key", "image_url", "contents_count", "is_full"],
  only: [],
}

const ContentActorsAll = () => (
  <ListingPage
    storeName={"actors"}
    fetchLink={"actors"}
    actionSet={setActors}
    actionDelete={(id) => database.remove(`actors/${id}`, removeActor(id))}
    title={functions.getTranslation("actors_all_page")}
    fastActions={fastActions}
    listerName={functions.getTranslation("actors_all")}
    linkSingle={"content/actors"}
    Component={ActorShortSingle}
    filterKeys={filterKeys}
  />
)

export default ContentActorsAll
