import Link from "next/link"
import React from "react"
import functions from "../../functions"
import Tile from "../Tile"
import StatusIcon from "./StatusIcon"
import * as Icons from "../../assets/icons"
import Filter from "./Filter"
import Pagination from "./Pagination"

class Lister extends React.Component {
  state = {
    allItems: [],
    items: [],
    filteredItems: [],
    paginatedItems: [],
    itemsPerPage: 10,
    page: 0,
  }

  componentDidMount() {
    const { items } = this.props
    this.setState({ filteredItems: items, allItems: items, paginatedItems: items }, () => this.changePage())
  }

  filterItems = (items) => {
    this.setState({ filteredItems: items, items }, () => this.changePage(0))
  }

  changePage = (page = -1, itemsPerPage = -1) => {
    if (page < 0) {
      page = this.state.page
    }
    if (itemsPerPage < 0) {
      itemsPerPage = this.state.itemsPerPage
    }

    let { filteredItems } = this.state

    const items = filteredItems.slice(page * itemsPerPage, (page + 1) * itemsPerPage)

    this.setState({ items }, () => this.forceUpdate())
  }

  render() {
    const { items, allItems, filteredItems } = this.state
    const { Component, linkSingle, actionDelete, name, filterKeys, Buttons } = this.props

    return (
      <Tile title={name}>
        {
          allItems.length !== 0 && (
            <Filter
              items={allItems}
              onlyKeys={filterKeys.only}
              skipKeys={filterKeys.skip}
              actionReturn={this.filterItems}
            />
          )}
        <div className="lister-items">
          <h2>
            {`${functions.getTranslation("items_current_showing")}: (${items.length}/${allItems.length})`}
          </h2>
          {
            items.length === 0 ? (
              <div className='error'>
                {functions.getTranslation("no_items_found")}
              </div>
            ) : (
              <React.Fragment>
                {items.map((item) => (
                  <div className="lister-outer-item-wrapper" key={item.key}>
                    <input type="checkbox" className='hidden' name={item.key} id={item.key} />
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
                      <div className='lister-item-buttons'>
                        <Buttons key={`${item.key}-buttons`}  {...item} />
                        <input
                          type="button"
                          className="small right warn"
                          value={functions.getTranslation("delete")}
                          onClick={() => actionDelete(item.id)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Pagination itemsLength={filteredItems.length} actionReturn={this.changePage} />
              </React.Fragment>
            )}
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
  Buttons: () => <></>,
}

export default Lister
