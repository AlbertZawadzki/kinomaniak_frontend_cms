import React from "react"
import { connect } from "react-redux"
import { addNotification } from "../../../redux/actions/notification"
import Tile from "../../Tile"

class Notificator extends React.Component {
  addNotification = (status, title, message = null) => {
    this.props.dispatch(addNotification({ status, title, message }))
  }

  render() {
    return (
      <Tile title="Notfications" hidden>
        <input
          type="button"
          onClick={() =>
            this.addNotification("processing", "Process", "message")
          }
          value="Processing"
        />
        <input
          type="button"
          onClick={() => this.addNotification("success", "Success")}
          value="Success"
        />
        <input
          type="button"
          onClick={() => this.addNotification("failure", "Failure", "message")}
          value="Failure"
        />
        <input
          type="button"
          onClick={() => this.addNotification("xd", "???", "message")}
          value="Unknown"
        />
        <input
          type="button"
          onClick={() => this.addNotification("more-action", "More", "message")}
          value="More action"
        />
      </Tile>
    )
  }
}

export default connect()(Notificator)
