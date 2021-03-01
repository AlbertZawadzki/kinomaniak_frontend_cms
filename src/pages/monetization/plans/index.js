import React from "react"
import ListerItem from "../../../components/pages/monetization/plan/ListerItem"
import { removePlan, setPlans } from "../../../redux/actions/plan"
import functions from "../../../functions"
import database from "../../../database"
import ListingPage from "../../../components/pages/ListingPage"
import roles from "../../../data/roleTypes.json"
import ListingButtons from "../../../components/pages/monetization/plan/ListingButtons"

const fastActions = {
  name: functions.getTranslation("plans_actions"),
  items: [
    {
      to: "/monetization/plans/new",
      name: functions.getTranslation("plan_create_new"),
    },
  ],
}

const filterKeys = {
  skip: [],
  only: ["id", "name", "available", "auto_renew", "duration"],
}

const MonetizationPlansAll = () => (
  <ListingPage
    role={roles.OWNER}
    storeName={"plans"}
    fetchLink={"plans"}
    actionSet={setPlans}
    actionDelete={(id) => database.remove(`plans/${id}`, () => removePlan(id))}
    title={functions.getTranslation("plans_all_page")}
    fastActions={fastActions}
    listerName={functions.getTranslation("plans_all")}
    linkSingle={"monetization/plans"}
    Component={ListerItem}
    filterKeys={filterKeys}
    buttons={ListingButtons}
  />
)

export default MonetizationPlansAll
