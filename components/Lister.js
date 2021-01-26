import Link from "next/link"
import React from "react"
import functions from "../functions"
import Tile from "./Tile"

class Lister extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    const { items } = this.props
    this.setState({ items })
  }

  componentWillReceiveProps() {
    const { items } = this.props
    this.setState({ items })
  }

  render() {
    const { items } = this.state
    const { Component, linkSingle, actionDelete, name } = this.props

    return (
      <Tile title={name}>
        <div className="error">TODO: filter</div>
        <div className="error">TODO: group operations</div>
        <div className="lister-items">
          {items.map((item) => (
            <div className="lister-outer-item-wrapper" key={item.key}>
              <input type="checkbox" name={item.key} />
              <div className="lister-item" key={item.key}>
                <div className="lister-item-wrapper">
                  <Link href={`/${linkSingle}/${item.id}`}>
                    <div className="lister-link-wrapper">
                      <Component {...item} />
                    </div>
                  </Link>
                </div>
                <input
                  type="button"
                  className="small right warn"
                  value={functions.getTranslation("delete")}
                  onClick={() => actionDelete(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </Tile>
    )
  }
}

Lister
  .defaultProps = {
  items: [],
  Component: <div className="error">No component given</div>,
  actionDelete: (id) => {
    console.log(id)
  },
  linkSingle: "",
  name: "No title given",
}

export default Lister
