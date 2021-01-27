import React from "react"
import functions from "../../../functions"
import database from "../../../database"
import { removeCategory, setCategories } from "../../../redux/actions/category"
import CategoriesShortSingle from "../../../components/content/CategoryShortSingle"
import ListingPage from "../../../components/pages/ListingPage"

const fastActionsName = functions.getTranslation("categories_actions")
const fastActions = [
  {
    to: "/content/categories/new",
    name: functions.getTranslation("categories_create_new"),
  },
]

const ContentCategoriesAll = () => (
  <ListingPage
    storeName={"categories"}
    fetchLink={"categories/get"}
    actionSet={setCategories}
    actionDelete={(id) => database.remove(`categories/delete/${id}`, removeCategory(id))}
    title={functions.getTranslation("categories_all_page")}
    fastActions={{ name: fastActionsName, items: fastActions }}
    listerName={functions.getTranslation("categories_all")}
    linkSingle={"content/categories"}
    Component={CategoriesShortSingle}
  />
)

export default ContentCategoriesAll
