import React from "react"
import * as Icons from "../../../assets/icons"
import functions from "../../../functions"
import { connect } from "react-redux"
import { removeNotification } from "../../../redux/actions/notification"

class Notification extends React.Component {
  state = {
    counter: 5000,
    step: 10,
    countDown: true,
    status: {
      name: "unknown",
      translation: "unknown",
      button: "",
      autoClose: false,
    },
  }

  setCountDown = (countDown) => {
    this.setState({ countDown })
  }

  close = () => {
    const { id } = this.props
    this.setState({ counter: 50 })

    setTimeout(() => {
      this.props.dispatch(removeNotification(id))
    }, 250)
  }

  componentDidMount() {
    let { status } = this.props
    status = functions.getNotificationStatus(status)
    this.setState({ status })

    const { autoClose } = status
    const { step } = this.state

    if (autoClose) {
      let timeCounter = setInterval(() => {
        let { step, counter, countDown } = this.state
        if (countDown) {
          counter -= step
          this.setState({ counter })
        }

        if (counter === 0) {
          clearInterval(timeCounter)
          this.close()
        }
      }, step)
    }
  }

  render() {
    let { title, message } = this.props
    let { status, counter } = this.state
    const buttonClass = "button absolute right top " + status.button

    return (
      <div
        className={`notification ${status.name} ${
          counter < 51 ? "closing" : "open"
        }`}
        onMouseEnter={() => this.setCountDown(false)}
        onMouseLeave={() => this.setCountDown(true)}
      >
        <button className={buttonClass} style={{ color: "#000 !important" }} onClick={() => this.close()}>
          <Icons.Cross />
        </button>
        <h3 className="notification-title no-border">
          {title || functions.getTranslation(status.translation)}
        </h3>
        {message?.length > 0 && (
          <div className="notification-message">{message}</div>
        )}
      </div>
    )
  }
}

Notification.defaultProps = {
  status: "unknown",
  // Overwriting in component
  // title: "No title given",
  message: "",
  id: -1,
  autoClose: false,
}

export default connect()(Notification)
