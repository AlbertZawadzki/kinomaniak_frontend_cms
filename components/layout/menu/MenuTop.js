import React from "react"
import data from "../../../data/menu_top"
import MenuItem from "./MenuItem"

const MenuTop = () => (
  <div className="min-tablet">
    <nav className="menu-top">
      {data.map((menuItem) => (
        <MenuItem {...menuItem} key={menuItem.id} isTop />
      ))}
    </nav>
  </div>
)

export default MenuTop
