import React from "react"
import data from "../../../data/menu_left"
import MenuItem from "./MenuItem"

const MenuLeft = () => (
  <nav className="menu-left">
    {data.map((menuItem) => (
      <MenuItem {...menuItem} key={menuItem.id} />
    ))}
  </nav>
)

export default MenuLeft
