import React from "react"
import { connect } from "react-redux"
import functions from "../../../functions"
import { updateActor } from "../../../redux/actions/actor"
import Form from "../../../components/pages/content/actor/Form"
import Tile from "../../../components/Tile"
import SingleItemPage from "../../../components/pages/SingleItemPage"
import roles from "../../../data/roleTypes.json"

class ContentActorsSingle extends React.Component {
  state = {
    actor: {},
  }

  render() {
    const { actor } = this.state
    const { id } = this.props
    const fastActionsName = functions.getTranslation("actors_actions")
    const fastActions = [
      {
        to: "/content/actors/",
        name: functions.getTranslation("actors_see_all"),
      },
      {
        to: "/content/actors/new",
        name: functions.getTranslation("actor_create_new"),
      },
    ]

    return (
      <SingleItemPage
        role={roles.CM}
        fastActions={
          {
            name: fastActionsName,
            actions: fastActions,
          }
        }
        itemName={functions.getTranslation("actors")}
        id={id}
        storeName='actors'
        fetchUrl={`actors/${id}`}
        updateItem={updateActor}
        returnData={actor => this.setState({ actor })}
      >
        <Form {...actor} isOld />
        <Tile title={functions.getTranslation("actor_in_contents")}>
          <pre>
            {JSON.stringify(actor.contents, null, 2)}
          </pre>
        </Tile>
      </SingleItemPage>)
  }
}

ContentActorsSingle.getInitialProps = (context) => {
  let { id } = context.query
  return { id }
}

export default connect()(ContentActorsSingle)
