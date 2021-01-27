import React from "react"
import "../assets/styles/index.scss"
import store from "../redux/store"
import { Provider } from "react-redux"
import database from "../database"

class MyApp extends React.Component {
  userId = 0
  refreshUser = setTimeout(() => setInterval(() => {
    if (this.userId === 0) {
      clearInterval(this.refreshUser)
    } else {
      database.getUser()
    }
  }, 30000), 5000)

  startRefreshUser = () => {
    clearInterval(this.refreshUser)

    this.refreshUser = setInterval(() => {
      if (this.userId === 0) {
        clearInterval(this.refreshUser)
      } else {
        database.getUser()
      }
    }, 30000)
  }

  componentDidMount() {
    database.getUser()

    this.subscriber = store.subscribe(() => {
      this.userId = store.getState().request.data?.user?.id || 0

      if (this.userId !== 0) {
        this.startRefreshUser()
      } else {
        clearInterval(this.refreshUser)
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.refreshUser)
    this.subscriber()
  }

  render() {
    const { Component, pageProps } = this.props
    console.log("Page props: ", pageProps)

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MyApp
