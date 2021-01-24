import React from "react"
import "../assets/styles/index.scss"
import store from "../redux/store"
import { Provider } from "react-redux"

const MyApp = ({ Component, pageProps }) => {
  console.log("Page props: ", pageProps)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
