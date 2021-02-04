import React from "react"
import functions from "../../../functions"
import database from "../../../database"
import { removeCategory, setCategories } from "../../../redux/actions/category"
import CategoriesShortSingle from "../../../components/content/CategoryShortSingle"
import ListingPage from "../../../components/pages/ListingPage"

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
  skip: ["key", "image_url", "contents_count", "is_full"],
  only: [],
}

const ContentCategoriesAll = () => (
  <ListingPage
    storeName={"categories"}
    fetchLink={"categories"}
    actionSet={setCategories}
    actionDelete={(id) => database.remove(`categories/${id}`, () => removeCategory(id))}
    title={functions.getTranslation("categories_all_page")}
    fastActions={fastActions}
    listerName={functions.getTranslation("categories_all")}
    linkSingle={"content/categories"}
    Component={CategoriesShortSingle}
    filterKeys={filterKeys}
  />
)

export default ContentCategoriesAll
