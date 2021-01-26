import React from "react"
import Layout from "../../../components/layout"
import roles from "../../../data/_role_types.json"
import { connect } from "react-redux"
import functions from "../../../functions"
import store from "../../../redux/store"
import database from "../../../database"
import { updateActor } from "../../../redux/actions/actor"
import ActorForm from "../../../components/content/ActorForm"
import Loader from "../../../components/Loader"
import Tile from "../../../components/Tile"

class ContentActorsSingle extends React.Component {
  state = {
    actor: null,
    loading: true,
  }

  async componentDidMount() {
    const { id } = this.props
    let actor = store.getState().actors?.data?.filter(actor => actor.id === parseInt(id))[0] || false

    if (!actor?.is_full) {
      actor = await database.get(`actors/get/${id}`)
    }

    if (actor) {
      actor.is_full = true
      this.props.dispatch(updateActor(actor))
    }

    this.setState({ actor, loading: false })
  }

  render() {
    const { actor, loading } = this.state
    const fastActionsName = functions.getTranslation("actors_actions")
    const fastActions = [
      {
        to: "/content/actors/all",
        name: functions.getTranslation("actors_see_all"),
      },
      {
        to: "/content/actors/new",
        name: functions.getTranslation("actor_create_new"),
      },
    ]

    if (loading) {
      return (
        <Layout
          title="Actors - loading"
          role={roles.CONTENT_MANAGER}
          fastActions={fastActions}
          fastActionsName={fastActionsName}
        >
          <Loader />
        </Layout>
      )
    }

    if (!actor) {
      return (
        <Layout
          title="Actors - unknown"
          role={roles.CONTENT_MANAGER}
          fastActions={fastActions}
          fastActionsName={fastActionsName}
        >
          <div className='error'>
            {functions.getTranslation("not_found")}
          </div>
        </Layout>
      )
    }

    return (
      <Layout
        title={`Actors - ${actor.lastname} ${actor.name}`}
        role={roles.CONTENT_MANAGER}
        fastActions={fastActions}
        fastActionsName={fastActionsName}
      >
        <ActorForm {...actor} isOld />
        <Tile title={functions.getTranslation("actor_in_contents")}>
        <pre>
          {JSON.stringify(actor.contents, null, 2)}
        </pre>
        </Tile>
      </Layout>
    )
  }
}

ContentActorsSingle.getInitialProps = (context) => {
  let { id } = context.query
  return { id }
}

export default connect()(ContentActorsSingle)
