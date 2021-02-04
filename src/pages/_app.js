import React from "react"
import store from "../redux/store"
import { Provider } from "react-redux"
import database from "../database"
import databaseConfig from "../database/config"
import "../assets/styles/index.scss"
import DataLoader from "./_dataLoader"


class MyApp extends React.Component {
  userId = 0
  refreshUser = setInterval(() => {
    if (this.userId === 0) {
      clearInterval(this.refreshUser)
    } else {
      database.auth()
    }
  }, databaseConfig.USER_TOKEN_REFRESH_TIME)

  startRefreshUser = () => {
    clearInterval(this.refreshUser)

    this.refreshUser = setInterval(() => {
      if (this.userId === 0) {
        clearInterval(this.refreshUser)
      } else {
        database.auth()
      }
    }, databaseConfig.USER_TOKEN_REFRESH_TIME)
  }

  componentDidMount() {
    database.auth()
    document.body.className = localStorage.getItem("theme") || "theme-light"

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

    return (
      <Provider store={store}>
        <DataLoader>
          <Component {...pageProps} />
        </DataLoader>
      </Provider>
    )
  }
}

export default MyApp
