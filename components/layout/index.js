import React from "react"
import MenuTop from "./menu/MenuTop"
import MenuLeft from "./menu/MenuLeft"
import Header from "./Header"
import Breadcrumbs from "./Breadcrumbs"
import Notifications from "./notifications"
import Dev from "./dev"
import functions from "../../functions"
import roles from "../../data/_role_types.json"
import store from "../../redux/store"
import database from "../../database"

class Layout extends React.Component {
  state = {
    user: null,
  }

  componentDidMount() {
    this.subscriber = store.subscribe(() => {
      this.setState({ user: store.getState().request.data.user })
    })
  }

  componentWillUnmount() {
    this.subscriber()
  }

  render() {
    const { title, children, role } = this.props

    if (!functions.hasAccess(role)) {
      return (
        <React.Fragment>
          <Notifications />
          <div className="data-wrapper">
            <div className="error">No access</div>
          </div>
          <pre className="redux-wrapper">
            <Dev />
          </pre>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <Notifications />
        <Header title={title} />
        <MenuTop />
        <div className="site-wrapper">
          <MenuLeft />
          <div className="content-wrapper">
            <Breadcrumbs />
            <div className="data-wrapper">{children}</div>
            <pre className="redux-wrapper">
              <Dev />
            </pre>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Layout.defaultProps = {
  title: "No title set",
  children: <pre className="error">No children</pre>,
  role: roles.OWNER,
}

export default Layout
