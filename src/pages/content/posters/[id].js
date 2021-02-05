import React from "react"
import { connect } from "react-redux"
import functions from "../../../functions"
import SingleItemPage from "../../../components/pages/SingleItemPage"
import { updatePoster } from "../../../redux/actions/poster"
import Form from "../../../components/content/poster/Form"

class ContentPosterSingle extends React.Component {
  state = {
    poster: {},
  }

  render() {
    const { poster } = this.state
    const { id } = this.props
    const fastActionsName = functions.getTranslation("posters_actions")
    const fastActions = [
      {
        to: "/content/posters/",
        name: functions.getTranslation("posters_see_all"),
      },
      {
        to: "/content/posters/new",
        name: functions.getTranslation("posters_create_new"),
      },
    ]

    return (
      <SingleItemPage
        fastActions={
          {
            name: fastActionsName,
            actions: fastActions,
          }
        }
        itemName={functions.getTranslation("posters")}
        id={id}
        storeName='posters'
        fetchUrl={`poster-styles/${id}`}
        updateItem={updatePoster}
        returnData={poster => this.setState({ poster })}
      >
        <Form {...poster} isOld />
      </SingleItemPage>)
  }
}

ContentPosterSingle.getInitialProps = (context) => {
  let { id } = context.query
  return { id }
}

export default connect()(ContentPosterSingle)
