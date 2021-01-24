import database from "../database"
import functions from "../functions"
import store from "../redux/store"
import ROLES from "./_role_types.json"

const data = [
  {
    id: "menu-top-item-1",
    name: functions.getTranslation("home"),
    type: ROLES.ALL,
    isLink: true,
    to: "/",
  },
  {
    id: "menu-top-item-2",
    name: "user_name",
    type: ROLES.ALL,
    isLink: true,
    to: "/profile/",
  },
  {
    id: "menu-top-item-3",
    name: functions.getTranslation("logout"),
    type: ROLES.ALL,
    isLink: false,
    action: () => database.doLogout(),
  },
]

export default data
