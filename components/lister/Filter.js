import React from "react"
import TextInput from "../inputs/TextInput"
import functions from "../../functions"
import Tile from "../Tile"

class Filter extends React.Component {
  state = {
    allItems: [],
    items: [],
    skipKeys: [],
    onlyKeys: [],
    keys: [],
    filters: [],
  }

  retreiveAllKeys = (item) => {
    // Skip values
    if (typeof item !== "object" || !item) {
      return
    }

    const { keys } = this.state

    if (Array.isArray(item)) {
      for (const index in item) {
        this.retreiveAllKeys(item[index])
      }
    } else {
      const tempKeys = Object.keys(item)

      for (const subKey in tempKeys) {
        this.retreiveAllKeys(item[tempKeys[subKey]])
        keys.push(tempKeys[subKey])
      }

      this.setState({ keys })
    }
  }

  getKeys = (items, skipKeys) => {
    this.retreiveAllKeys(items)
    let { keys } = this.state

    for (const index in keys) {
      for (const skipIndex in skipKeys) {
        if (keys[index] === skipKeys[skipIndex]) {
          keys.splice(index, 1)
        }
      }
    }

    for (const index in keys) {
      for (const otherIndex in keys) {
        if (otherIndex !== index && keys[index] === keys[otherIndex]) {
          keys.splice(index, 1)
        }
      }
    }

    this.setState({ keys })
  }

  componentDidMount() {
    const { items, skipKeys, onlyKeys } = this.props

    if (onlyKeys.length === 0) {
      this.getKeys(items, skipKeys)
    } else {
      this.setState({ keys: onlyKeys })
    }

    this.setState({ items, skipKeys, onlyKeys })
  }

  transformKeyName = (key) => {
    return key.replaceAll("_", " ")
  }

  setFilters = (data) => {
    let { filters } = this.state

    filters[data.name] = {
      key: Math.random(),
      value: data.value,
    }

    this.setState({ filters }, () => this.forceUpdate())
  }

  render() {
    let { keys, filters } = this.state

    return (
      <Tile title={functions.getTranslation("filters")} hidden>
        <div className='tiles-row'>
          {keys.map(key => (
            <TextInput
              key={`object-key-${key}`}
              title={`${functions.getTranslation("filter_by")} ${this.transformKeyName(key)}`}
              name={key}
              actionReturn={(data) => this.setFilters(data)}
            />),
          )}
        </div>
        <div className={"error"}>
          {Object.keys(filters).map(key => (
            <div key={filters[key].key}>
              {`${key}: ${filters[key].value}`}
            </div>
          ))}
        </div>
      </Tile>
    )
  }
}

Filter.defaultProps = {
  items: [],
  skipKeys: ["key"],
  onlyKeys: [],
  actionReturn: () => {
    console.log("no return action")
  },
}

export default Filter