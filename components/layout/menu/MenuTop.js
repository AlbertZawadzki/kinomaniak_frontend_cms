import React from "react"
import data from "../../../data/menu_top"
import MenuItem from "./MenuItem"

const MenuTop = () => <nav className='menu-top'>
    {
        data.map(menu_item => <MenuItem {...menu_item} isTop/>)
    }
</nav>

export default MenuTop