import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"
import database from "../../../database"
import ActorShortSingle from "../../../components/content/ActorShortSingle"
import Lister from "../../../components/Lister"
import { connect } from "react-redux"
import { removeActor, setActors } from "../../../redux/actions/actor"
import store from "../../../redux/store"
import functions from "../../../functions"

class ContentActorsAll extends React.Component {
  state = {
    data: [],
    fetched: false,
  }

  async componentDidMount() {
    let data = store.getState().actors.data
    if (!store.getState().actors.was_fetched) {
      data = await database.get("actors/get")
    }

    this.props.dispatch(setActors(data))
    this.setState({ data, fetched: true })

    this.subscriber = store.subscribe(() => {
      data = store.getState().actors.data
      this.setState({ data })
    })
  }

  componentWillUnmount() {
    this.subscriber()
  }

  actionDelete = (id) => {
    database.remove(`actors/delete/${id}`, removeActor(id))
  }

  render() {
    const { data, fetched } = this.state
    const fastActionsName = functions.getTranslation("actors_actions")
    const fastActions = [
      {
        to: "/content/actors/new",
        name: functions.getTranslation("actor_create_new"),
      },
    ]


    if (!fetched) {
      return (
        <Layout
          title="Actors - all"
          role={roles.CONTENT_MANAGER}
          fastActions={fastActions}
          fastActionsName={fastActionsName}
        >
          Fetching
        </Layout>
      )
    }

    return (
      <Layout
        title="Actors - all"
        role={roles.CONTENT_MANAGER}
        fastActions={fastActions}
        fastActionsName={fastActionsName}
      >
        <Lister
          name={functions.getTranslation("actors_all")}
          items={data}
          Component={ActorShortSingle}
          linkSingle="content/actors"
          actionDelete={this.actionDelete}
        />
      </Layout>
    )
  }
}

export default connect()(ContentActorsAll)
