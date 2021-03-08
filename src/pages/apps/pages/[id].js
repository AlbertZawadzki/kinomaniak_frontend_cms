import React from "react"
import { connect } from "react-redux"
import functions from "../../../functions"
import Form from "../../../components/pages/apps/pages/Form"
import SingleItemPage from "../../../components/pages/SingleItemPage"
import roles from "../../../data/roleTypes.json"
import { updatePage } from "../../../redux/actions/page"

class PageSingle extends React.Component {
  state = {
    page: {},
  }

  render() {
    const { page } = this.state
    const { id } = this.props
    const fastActionsName = functions.getTranslation("pages_actions")
    const fastActions = [
      {
        to: "/apps/pages/",
        name: functions.getTranslation("pages_see_all"),
      },
      {
        to: "/apps/pages/new",
        name: functions.getTranslation("page_create_new"),
      },
    ]

    return (
      <SingleItemPage
        role={roles.ADMIN}
        fastActions={
          {
            name: fastActionsName,
            actions: fastActions,
          }
        }
        itemName={functions.getTranslation("pages")}
        id={id}
        storeName='pages' t
        fetchUrl={`page/${id}`}
        updateItem={updatePage}
        returnData={page => this.setState({ page })}
      >
        <Form {...page} isOld />
      </SingleItemPage>)
  }
}

PageSingle.getInitialProps = (context) => {
  let { id } = context.query
  return { id }
}

export default connect()(PageSingle)
