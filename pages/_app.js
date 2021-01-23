import React from "react"
import Layout from "../components/layout"
import '../assets/styles/index.scss'

const MyApp = ({Component, pageProps}) => {
    console.log(pageProps);

    return <Layout>
        <Component {...pageProps} />
    </Layout>
}

export default MyApp
