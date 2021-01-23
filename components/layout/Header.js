import React from "react"
import Head from "next/head"

const Header = ({ title }) => {
  return <Head>
    <title>{title}</title>
  </Head>
}

Header.defaultProps = {
  title: "No title set",
}

export default Header