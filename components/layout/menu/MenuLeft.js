import React, { useState } from "react"
import data from "../../../data/menu_left"
import dataTop from "../../../data/menu_top"
import MenuItem from "./MenuItem"
import * as Icons from "../../../assets/icons"

const MenuLeft = () => {
  const [state, switchState] = useState(false)

  return (
    <React.Fragment>
      <div className="max-mobile">
        <div className="menu-mobile-icon" onClick={() => switchState(!state)}>
          <Icons.Home className={`${state ? "active" : "inactive"}`} />
        </div>
      </div>
      <div className={`menu-mobile-effect ${state ? "active" : "inactive"}`}>
        <nav className={`menu-left ${state ? "active" : "inactive"}`}>
          {data.map((menuItem) => (
            <MenuItem {...menuItem} key={menuItem.id} />
          ))}
          <div className="max-mobile">
            <div className="mobile-top-menu">
              {dataTop.map((menuItem) => {
                return menuItem.showOnMobile ? (
                  <MenuItem {...menuItem} key={menuItem.id} />
                ) : (
                  <React.Fragment />
                )
              })}
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default MenuLeft
