import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"
import database from "../../../database"
import SingleActor from "../../../components/content/SingleActor"
import Lister from "../../../components/Lister"
import { connect } from "react-redux"
import { setActors } from "../../../redux/actions/actor"
import store from "../../../redux/store"

class ContentActorsAll extends React.Component {
  state = {
    data: [],
    fetched: false,
  }

  async componentDidMount() {
    let data = store.getState().actors.data
    if (data.length === 0) {
      data = await database.get("actors/get")
    }

    this.props.dispatch(setActors(data))
    this.setState({ data, fetched: true })
  }

  render() {
    const { data, fetched } = this.state

    if (!fetched) {
      return (
        <Layout title="Actors - all" role={roles.CONTENT_MANAGER}>
          Fetching
        </Layout>
      )
    }

    return (
      <Layout title="Actors - all" role={roles.CONTENT_MANAGER}>
        <Lister
          items={data}
          Component={SingleActor}
          linkSingle="content/actors"
          linkDelete="content/actors/delete"
        />
      </Layout>
    )
  }
}

export default connect()(ContentActorsAll)
