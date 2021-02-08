import React from "react"
import functions from "../../functions/"
import TextInput from "./TextInput"

class MultiSelectInput extends React.Component {
  state = {
    selected: [],
    options: [],
    allSelected: [],
    allOptions: [],
  }

  isSelected = (key) => {
    const { allSelected } = this.state
    return allSelected.filter((item) => item.key === key).length !== 0
  }

  componentDidMount() {
    const { selected, options } = this.props

    const allSelected = JSON.parse(JSON.stringify(selected))

    this.setState({ allSelected, selected, allOptions: options, options })
  }

  componentWillReceiveProps() {
    const { options } = this.props

    this.setState({ allOptions: options, options })
  }

  makeSelection = (option) => {
    let { allSelected, selected } = this.state

    const isSelected = this.isSelected(option.key)

    if (isSelected) {
      allSelected = allSelected.filter(item => item.key !== option.key)
      selected = allSelected.filter(item => item.key !== option.key)
    } else {
      allSelected.push(option)
      selected.push(option)
    }

    this.setState({ allSelected, selected })
    this.actionReturn(allSelected)
  }

  actionReturn = (allSelected) => {
    this.props.actionReturn(allSelected)
  }

  filterOptions = (data) => {
    let { allOptions, options } = this.state
    const { showKeys } = this.props

    if (data.length === 0) {
      this.setState({ options: allOptions })
    }

    options = allOptions.filter(item => {
      for (const key in showKeys) {
        if (item[showKeys[key]].toString().toLowerCase().includes(data.toString().toLowerCase())) {
          return true
        }
      }

      return false
    })

    this.setState({ options })
  }

  filterSelected = (data) => {
    let { allSelected, selected } = this.state
    const { showKeys } = this.props

    if (data.length === 0) {
      this.setState({ selected: allSelected })
    }

    selected = allSelected.filter(item => {
      for (const key in showKeys) {
        if (item[showKeys[key]].toString().toLowerCase().includes(data.toString().toLowerCase())) {
          return true
        }
      }

      return false
    })

    this.setState({ selected })
  }

  render() {
    const { name, title, showKeys } = this.props
    const { selected, options, allOptions } = this.state
    const id = "multi-select-" + name

    return (
      <div className="input-outer-wrapper">
        <div className="input-wrapper">
          <label htmlFor={id}>{title}</label>
          <div className='multi-select-wrapper'>
            <div className='multi-select-inner-wrapper'>
              <h3>
                {functions.getTranslation("select_options")}
              </h3>
              <TextInput
                name='filter'
                title={functions.getTranslation("filter")}
                actionReturn={(data) => this.filterOptions(data.value)}
              />
              <div className='multi-select-options-wrapper'>
                {options.length === 0 ?
                  <div className='error'>
                    {functions.getTranslation("no_items_found")}
                  </div>
                  : options.map(option => (
                    <div
                      onClick={() => this.makeSelection(option)}
                      className={`multi-select-item-wrapper ${this.isSelected(option.key) ? " active" : " inactive"}`}
                      key={option.key}
                    >
                      {showKeys.map(key => (
                        <div
                          className='multi-select-item-row'
                          key={`${option.key}-${key}`}
                        >
                          <p>
                            {key}:
                          </p>
                          <p>
                            {option[key]}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
            <div className='multi-select-inner-wrapper'>
              <h3>
                {functions.getTranslation("selected_options")}
              </h3>
              <TextInput
                name='filter'
                title={functions.getTranslation("filter")}
                actionReturn={(data) => this.filterSelected(data.value)}
              />
              <div className='multi-select-options-wrapper'>
                {selected.length === 0 ?
                  <div className='error'>
                    {functions.getTranslation("no_items_found")}
                  </div>
                  : selected.map(option => (
                    <div
                      onClick={() => this.makeSelection(option)}
                      className='multi-select-item-wrapper active'
                      key={`${option.key}-selected`}
                    >
                      {showKeys.map(key => (
                        <div
                          className='multi-select-item-row'
                          key={`${option.key}-selected-${key}`}
                        >
                          <p>
                            {key}:
                          </p>
                          <p>
                            {option[key]}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MultiSelectInput.defaultProps = {
  name: " unknown-name",
  title: " No title given",
  selected: [],
  options: [],
  showKeys: [" key"],
  actionReturn: () => {
  },
}

export default MultiSelectInput
