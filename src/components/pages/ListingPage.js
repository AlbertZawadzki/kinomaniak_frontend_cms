import React from "react"
import Layout from "../layout"
import roles from "../../data/roleTypes.json"
import store from "../../redux/store"
import database from "../../database"
import Lister from "../Lister"
import { connect } from "react-redux"
import Loader from "../Loader"

class ListingPage extends React.Component {
  state = {
    data: [],
    fetched: false,
  }

  async componentDidMount() {
    const { storeName, fetchLink, actionSet } = this.props

    let data = store.getState()[storeName].data
    if (!store.getState()[storeName].was_fetched) {
      data = await database.get(fetchLink)
    }

    this.props.dispatch(actionSet(data))
    this.setState({ data, fetched: true })

    this.subscriber = store.subscribe(() => {
      this.setState({ fetched: false })
      data = store.getState()[storeName].data
      this.setState({ data, fetched: true })
    })
  }

  componentWillUnmount() {
    try {
      this.subscriber()
    } catch {
    }
  }

  actionDelete = (id) => {
    this.props.actionDelete(id)
  }

  render() {
    const { title, fastActions, listerName, linkSingle, Component, filterKeys, role, buttons } = this.props
    const { data, fetched } = this.state

    if (!fetched) {
      return (
        <Layout
          title={title}
          role={role}
          fastActions={fastActions.actions}
          fastActionsName={fastActions.name}
        >
          <Loader />
        </Layout>
      )
    }

    return (
      <Layout
        title={title}
        role={role}
        fastActions={fastActions.items}
        fastActionsName={fastActions.name}
      >
        <Lister
          name={listerName}
          items={data}
          Component={Component}
          linkSingle={linkSingle}
          actionDelete={this.actionDelete}
          filterKeys={filterKeys}
          Buttons={buttons}
        />
      </Layout>
    )
  }
}

ListingPage.defaultProps = {
  storeName: "undefined",
  role: roles.OWNER,
  fetchLink: "/",
  actionSet: (data) => {
    console.log(data)
  },
  actionDelete: (data) => {
    console.log(data)
  },
  title: "no title given",
  fastActions: { name: "No name given", items: [] },
  listerName: "lister name",
  linkSingle: "/",
  Component: <React.Fragment />,
  filterKeys: {
    skip: ["key", "is_full"],
    only: [],
  },
  buttons: () => <></>,
}

export default connect()(ListingPage)
