import React from "react"
import functions from "../../../functions"
import database from "../../../database"
import { removeCategory, setCategories } from "../../../redux/actions/category"
import ListerItem from "../../../components/pages/content/category/ListerItem"
import ListingPage from "../../../components/pages/ListingPage"
import roles from "../../../data/roleTypes.json"

const fastActions = {
  name: functions.getTranslation("categories_actions"),
  items: [
    {
      to: "/content/categories/new",
      name: functions.getTranslation("categories_create_new"),
    },
  ],
}

const filterKeys = {
  skip: [],
  only: ["id", "name"],
}

const ContentCategoriesAll = () => (
  <ListingPage
    role={roles.CONTENT_MANAGER}
    storeName={"categories"}
    fetchLink={"categories"}
    actionSet={setCategories}
    actionDelete={(id) => database.remove(`categories/${id}`, () => removeCategory(id))}
    title={functions.getTranslation("categories_all_page")}
    fastActions={fastActions}
    listerName={functions.getTranslation("categories_all")}
    linkSingle={"content/categories"}
    Component={ListerItem}
    filterKeys={filterKeys}
  />
)

export default ContentCategoriesAll
