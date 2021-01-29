import React from "react"
import functions from "../functions"

class StatusIcon extends React.Component {
  state = {
    status: "unknown",
  }

  componentDidMount() {
    const { id } = this.props

  }

  render() {
    const { status } = this.state

    return <div className='status-wrapper'>
      <div className={`status-icon ${status}`} />
      {functions.getTranslation(`status-${status}`)}
    </div>
  }
}

export default StatusIcon