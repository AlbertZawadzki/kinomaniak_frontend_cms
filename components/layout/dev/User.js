import React from "react"
import { connect } from "react-redux"
import Tile from "../../Tile"
import store from "../../../redux/store"

class User extends React.Component {
  state = {
    user: [],
  }

  componentDidMount() {
    let { user } = this.state
    user = store.getState().request.data.user
    this.setState({ user })

    this.subscriber = store.subscribe(() => {
      user = store.getState().request.data.user
      this.setState({ user })
    })
  }

  componentWillUnmount() {
    this.subscriber()
  }

  render() {
    const { user } = this.state

    return (
      <Tile title={`User ${user?.role || "empty"}`} hidden>
        <pre>{JSON.stringify(user, null, 4)}</pre>
      </Tile>
    )
  }
}

export default connect()(User)
