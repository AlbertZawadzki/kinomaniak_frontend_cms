import React from "react"
import "../assets/styles/index.scss"
import store from "../redux/store"
import { Provider } from "react-redux"
import database from "../database"

class MyApp extends React.Component {
  refreshUser = () =>
    setInterval(() => {
      database.getUser()
    }, 1000)

  componentDidMount() {
    database.getUser()
    this.refreshUser()
  }

  componentWillUnmount() {
    clearInterval(this.refreshUser())
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
