import React from "react"
import SelectInput from "../inputs/SelectInput"
import functions from "../../functions"
import itemsPerPageOptions from "../../data/itemsPerPageOptions"
import * as Icons from "../../assets/icons"

class Pagination extends React.Component {
  state = {
    page: 0,
    itemsPerPage: 10,
  }

  actionReturn = () => {
    const { page, itemsPerPage } = this.state
    this.props.actionReturn(page, itemsPerPage)
  }

  setPage = (page) => {
    this.setState({ page }, () => this.actionReturn())
  }

  setItemsPerPage = (data) => {
    const itemsPerPage = itemsPerPageOptions.filter(option => option.key === data.value)[0].number
    let { page } = this.state
    const { itemsLength } = this.props
    const maxPages = Math.ceil(itemsLength / itemsPerPage)

    if (page > maxPages) {
      page = maxPages - 1
    }

    this.setState({ itemsPerPage, page }, () => this.actionReturn())
  }

  renderPageButton = (number) => {
    const { itemsLength } = this.props
    const { itemsPerPage } = this.state
    const maxPages = Math.ceil(itemsLength / itemsPerPage)

    if (number >= 0 && number < maxPages) {
      return {
        key: `pagination-button-item-${number}`,
        value: number,
        type: "number",
      }
    }

    return false
  }

  renderPagesButtons = () => {
    const { itemsLength } = this.props
    const { page, itemsPerPage } = this.state
    const maxPages = Math.ceil(itemsLength / itemsPerPage)
    const pages = []

    /** Get first pages */
    if (page > 1) {
      pages.push({
        key: `pagination-button-item-back`,
        value: <Icons.ArrowLeft />,
        type: "prev",
      })
      pages.push(this.renderPageButton(0))

      if (page > 2) {
        pages.push(this.renderPageButton(1))
      }
      if (page > 3) {
        pages.push({
          key: `pagination-button-item-dots-1`,
          value: <Icons.Dots />,
          type: "dots",
        })
      }
    }

    /** Get middle pages */
    for (let i = -1; i < 2; i++) {
      const pageButton = this.renderPageButton(page + i)
      if (pageButton) {
        pages.push(pageButton)
      }
    }

    /** Get last pages */
    if (page < maxPages - 2) {
      if (page < maxPages - 4) {
        pages.push({
          key: `pagination-button-item-dots-2`,
          value: <Icons.Dots />,
          type: "dots",
        })
      }
      if (page < maxPages - 3) {
        pages.push(this.renderPageButton(maxPages - 2))
      }
      pages.push(this.renderPageButton(maxPages - 1))
      if (page < maxPages - 2) {
        pages.push({
          key: `pagination-button-item-next`,
          value: <Icons.ArrowRight />,
          type: "next",
        })
      }
    }

    return pages
  }

  getPageValue = (page) => {
    return page.type === "number" ? page.value + 1 : page.value
  }

  getPageOnclick = (button) => {
    const { page } = this.state

    switch (button.type) {
      case "prev":
        this.setPage(page - 1)
        break
      case "number":
        this.setPage(button.value)
        break
      case "next":
        this.setPage(page + 1)
        break
    }
  }

  render() {
    const { itemsLength } = this.props
    const { page, itemsPerPage } = this.state
    const limitOptions = itemsPerPageOptions.filter(option => option.number < itemsLength)
    const pages = this.renderPagesButtons()
    const maxPages = Math.ceil(itemsLength / itemsPerPage)

    if (maxPages < 2) {
      return <React.Fragment />
    }

    return <div className='lister-pagination-wrapper'>
      <div className='lister-pagination-inner-wrapper'>
        {
          pages.map(singlePage => (
            <div
              key={singlePage.key}
              onClick={() => this.getPageOnclick(singlePage)}
              className={`lister-pagination-item ${singlePage.type} ${singlePage.value === page ? "active" : "inactive"}`}
            >
              {this.getPageValue(singlePage)}
            </div>
          ))}
      </div>
      <div className='lister-pagination-select-wrapper'>
        <SelectInput
          name='set-pagination-items'
          title={`${functions.getTranslation("items_per_page")}:`}
          options={limitOptions}
          optionKeyName='number'
          actionReturn={this.setItemsPerPage}
          selected='items-per-page-10'
        />
      </div>
    </div>
  }
}

Pagination.defaultProps = {
  itemsLength: 0,
  actionReturn: () => console.log("no return action"),
}

export default Pagination