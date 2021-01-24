import React from "react"
import data from "../../../data/menu_top"
import MenuItem from "./MenuItem"

const MenuTop = () => (
  <nav className="menu-top">
    {data.map((menuItem) => (
      <MenuItem {...menuItem} key={menuItem.id} isTop />
    ))}
  </nav>
)

export default MenuTop
