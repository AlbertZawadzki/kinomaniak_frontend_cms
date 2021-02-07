import React from "react"
import { connect } from "react-redux"
import functions from "../../../functions"
import Tile from "../../../components/Tile"
import SingleItemPage from "../../../components/pages/SingleItemPage"
import { updateCategory } from "../../../redux/actions/category"
import Form from "../../../components/pages/content/category/Form"

class ContentCategoriesSingle extends React.Component {
  state = {
    category: {},
  }

  render() {
    const { category } = this.state
    const { id } = this.props
    const fastActionsName = functions.getTranslation("categories_actions")
    const fastActions = [
      {
        to: "/content/categories/",
        name: functions.getTranslation("categories_see_all"),
      },
      {
        to: "/content/categories/new",
        name: functions.getTranslation("categories_create_new"),
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
        itemName={functions.getTranslation("categories")}
        id={id}
        storeName='categories'
        fetchUrl={`categories/${id}`}
        updateItem={updateCategory}
        returnData={category => this.setState({ category })}
      >
        <Form {...category} isOld />
        <Tile title={functions.getTranslation("category_in_contents")}>
          <pre>
            {JSON.stringify(category.contents, null, 2)}
          </pre>
        </Tile>
      </SingleItemPage>)
  }
}

ContentCategoriesSingle.getInitialProps = (context) => {
  let { id } = context.query
  return { id }
}

export default connect()(ContentCategoriesSingle)
