import React from "react"

class StatusIcon extends React.Component {
  state = {
    status: "unknown",
  }

  componentDidMount() {
    const { id } = this.props

  }

  render() {
    const { status } = this.state

    return <div className={`status-icon ${status}`}></div>
  }
}

export default StatusIcon