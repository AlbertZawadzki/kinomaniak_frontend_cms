import React from "react"
import functions from "../../functions"

class StatusIcon extends React.Component {
  state = {
    status: "unknown",
  }

  componentDidMount() {
  }

  render() {
    const { status } = this.state

    return <div className={`status-wrapper ${status}`}>
      <div className={`status-icon ${status}`} />
      {functions.getTranslation(`status-${status}`)}
    </div>
  }
}

export default StatusIcon