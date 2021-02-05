import React from "react"
import ListerItem from "../../../components/content/actor/ListerItem"
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
  skip: [],
  only: ["id", "name", "lastname"],
}

const ContentActorsAll = () => (
  <ListingPage
    storeName={"actors"}
    fetchLink={"actors"}
    actionSet={setActors}
    actionDelete={(id) => database.remove(`actors/${id}`, () => removeActor(id))}
    title={functions.getTranslation("actors_all_page")}
    fastActions={fastActions}
    listerName={functions.getTranslation("actors_all")}
    linkSingle={"content/actors"}
    Component={ListerItem}
    filterKeys={filterKeys}
  />
)

export default ContentActorsAll
