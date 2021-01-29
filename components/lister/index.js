import Link from "next/link"
import React from "react"
import functions from "../../functions"
import Tile from "../Tile"
import StatusIcon from "./StatusIcon"
import * as Icons from "../../assets/icons"
import Filter from "./Filter"

class Lister extends React.Component {
  state = {
    allItems: [],
    items: [],
  }

  componentDidMount() {
    const { items } = this.props
    this.setState({ allItems: items, items })
  }

  componentWillReceiveProps() {
    const { items } = this.props
    this.setState({ allItems: items, items })
  }

  render() {
    const { items, allItems } = this.state
    const { Component, linkSingle, actionDelete, name, filterKeys } = this.props

    return (
      <Tile title={name}>
        {
          items.length !== 0 && (
            <Filter
              items={items}
              onlyKeys={filterKeys.only}
              skipKeys={filterKeys.skip}
              actionReturn={(items) => this.setState({ items })}
            />
          )}
        <div className="error">TODO: group operations</div>
        <div className="lister-items">
          <h2>{`${functions.getTranslation("items_current_showing")}: (${items.length}/${allItems.length})`}</h2>
          {items ? items.map((item) => (
            <div className="lister-outer-item-wrapper" key={item.key}>
              <input type="checkbox" className='hidden' id={item.key} />
              <label className='lister-checkbox' htmlFor={item.key}>
                <Icons.Tick />
              </label>
              <StatusIcon id={item.key} />
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
          )) : (
            <div className='error'>
              {JSON.stringify(items, null, 4)}
            </div>)
          }
        </div>
      </Tile>
    )
  }
}

Lister.defaultProps = {
  items: [],
  Component: <div className="error">No component given</div>,
  actionDelete: (id) => console.log(id),
  linkSingle: "",
  name: "No title given",
  filterKeys: {
    skip: ["key", "is_full"],
    only: [],
  },
}

export default Lister
