import database from "../database"
import functions from "../functions"
import ROLES from "./_role_types.json"

const data = [
  {
    "id": "menu-top-item-1",
    "name": functions.getTranslation("home"),
    "type": ROLES.ALL,
    "isLink": true,
    "to": "/",
  },
  {
    "id": "menu-top-item-2",
    "name": database.getUser().name,
    "type": ROLES.ALL,
    "isLink": true,
    "to": "/profile/" + database.getUser().id,
  },
  {
    "id": "menu-top-item-3",
    "name": functions.getTranslation("logout"),
    "type": ROLES.ALL,
    "isLink": false,
    "action": () => database.doLogout(),
  },
]

export default data