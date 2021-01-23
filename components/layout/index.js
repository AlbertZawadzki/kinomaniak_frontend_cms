import React from "react"
import MenuTop from "./menu/MenuTop"
import MenuLeft from "./menu/MenuLeft"

const Layout = ({ title, description, children }) => {

  return <React.Fragment>
    <MenuTop />
    <div className='site-wrapper'>
      <MenuLeft />
      <div className='content-wrapper'>
        {children}
      </div>
    </div>

  </React.Fragment>
}

export default Layout