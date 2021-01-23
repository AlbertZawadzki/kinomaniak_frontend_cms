import React from "react"
import data from "../../../data/menu_left"
import MenuItem from "./MenuItem"

const MenuLeft = () => <nav className='menu-left'>
  {
    data.map(menu_item => <MenuItem {...menu_item} />)
  }
</nav>

export default MenuLeft