import React from "react"
import Layout from "../layout"
import roles from "../../data/roleTypes.json"
import { connect } from "react-redux"
import functions from "../../functions"
import store from "../../redux/store"
import database from "../../database"
import Loader from "../Loader"

class SingleItemPage extends React.Component {
  state = {
    item: null,
    loading: true,
  }

  async componentDidMount() {
    const { id, storeName, fetchUrl, updateItem } = this.props
    let item = store.getState()[storeName]?.data?.filter(storeItem => storeItem.id === parseInt(id))[0] || false

    if (!item?.is_full) {
      item = await database.get(fetchUrl)
    }

    if (item) {
      item.is_full = true
      this.props.dispatch(updateItem(item))
    }

    this.setState({ item, loading: false })
    this.props.returnData(item)
  }

  render() {
    const { item, loading } = this.state
    const { fastActions, children, itemName, isNew, role } = this.props

    if (loading && !isNew) {
      return (
        <Layout
          title={`${itemName} - ${functions.getTranslation("loading")}`}
          role={role}
          fastActions={fastActions.actions}
          fastActionsName={fastActions.name}
        >
          <Loader />
        </Layout>
      )
    }

    if (!item && !isNew) {
      return (
        <Layout
          title={`${itemName} - ${functions.getTranslation("unknown")}`}
          role={role}
          fastActions={fastActions.actions}
          fastActionsName={fastActions.name}
        >
          <div className='error'>
            {functions.getTranslation("not_found")}
          </div>
        </Layout>
      )
    }

    return (
      <Layout
        title={`${itemName} - ${item.id}`}
        role={role}
        fastActions={fastActions.actions}
        fastActionsName={fastActions.name}
      >
        {children}
      </Layout>
    )
  }
}

SingleItemPage.defaultProps = {
  fastActions: {
    name: "No name given",
    actions: [],
  },
  children: <div className='error'>No childrens given</div>,
  itemName: "no item name",
  id: 0,
  storeName: "no store",
  fetchUrl: "no-fetch-url",
  updateItem: () => console.log("No action given"),
  isNew: false,
  role: roles.OWNER,
  returnData: () => console.log("No action given"),
}


export default connect()(SingleItemPage)
