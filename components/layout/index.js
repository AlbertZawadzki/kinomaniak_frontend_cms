import React from "react"
import MenuTop from "./menu/MenuTop"
import MenuLeft from "./menu/MenuLeft"
import Header from "./Header"
import Breadcrumbs from "./Breadcrumbs"
import Infobox from "./infobox"

const Layout = ({ title, children }) => {
  return <React.Fragment>
    <Infobox />
    <Header title={title} />
    <MenuTop />
    <div className='site-wrapper'>
      <MenuLeft />
      <div className='content-wrapper'>
        <Breadcrumbs />
        <div className='data-wrapper'>
          {children}
        </div>
        <pre className='redux-wrapper'>
          <h1>#DEV BOX</h1>
          nothing yet
        </pre>
      </div>
    </div>
  </React.Fragment>
}

Layout.defaultProps = {
  title: "No title set",
  children: <pre className="error">No children</pre>,
}

export default Layout