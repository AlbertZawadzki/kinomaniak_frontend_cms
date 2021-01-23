import React from "react"
import MenuTop from "./menu/MenuTop"
import MenuLeft from "./menu/MenuLeft"
import Header from "./Header"
import Breadcrumbs from "./Breadcrumbs"

const Layout = ({ title, children }) => {
  return <React.Fragment>
    <Header title={title} />
    <MenuTop />
    <div className='site-wrapper'>
      <MenuLeft />
      <div className='content-wrapper'>
        <Breadcrumbs />
        {children}
      </div>
    </div>
  </React.Fragment>
}

Layout.defaultProps = {
  title: "No title set",
  children: <pre className="error">No children</pre>,
}

export default Layout