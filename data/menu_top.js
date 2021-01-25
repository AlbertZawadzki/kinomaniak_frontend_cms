import database from "../database"
import functions from "../functions"
import ROLES from "./_role_types.json"
import * as Icons from "../assets/icons"

const data = [
  {
    id: "menu-top-item-1",
    name: functions.getTranslation("home"),
    type: ROLES.ALL,
    isLink: true,
    to: "/",
    showOnMobile: false,
    Icon: <Icons.Home />,
  },
  {
    id: "menu-top-item-2",
    name: "user_name",
    type: ROLES.ALL,
    isLink: true,
    to: "/profile/",
    showOnMobile: true,
    Icon: <Icons.Profile />,
  },
  {
    id: "menu-top-item-3",
    name: functions.getTranslation("logout"),
    type: ROLES.ALL,
    isLink: false,
    action: () => database.doLogout(),
    showOnMobile: true,
    Icon: <Icons.Logout />,
  },
]

export default data
