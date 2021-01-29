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
import LoginPanel from "../panels/LoginPanel"
import FastActions from "./fast_actions"

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
    const { title, children, role, fastActions, fastActionsName } = this.props

    if (!functions.hasAccess(role) && !functions.isLogged()) {
      return (
        <div className="authorization-wrapper">
          <Notifications />
          <div className="data-wrapper">
            <LoginPanel />
          </div>
          <div className="content-wrapper">
            <Dev />
          </div>
        </div>
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
            <div className="data-wrapper">
              {functions.hasAccess(role) ? (
                <React.Fragment>
                  <FastActions items={fastActions} name={fastActionsName} />
                  {children}
                </React.Fragment>
              ) : (
                <div className="error">
                  {`${functions.getTranslation(
                    "insufficient_permissions",
                  )}, ${functions.getTranslation(
                    "required_role_min",
                  )}: ${role}`}
                </div>
              )}
            </div>
            <Dev />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Layout.defaultProps = {
  title: "No title set",
  children: <React.Fragment />,
  role: roles.OWNER,
  fastActions: [],
  fastActionsName: "No name given",
}

export default Layout
