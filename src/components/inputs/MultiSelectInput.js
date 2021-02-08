import React from "react"
import functions from "../../functions/"
import Filter from "../lister/Filter"

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
    const { selected, options } = this.props

    const allSelected = JSON.parse(JSON.stringify(selected))

    this.setState({ allSelected, selected, allOptions: options, options })
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

    this.setState({ allSelected, selected }, () => {
      this.actionReturn()
      this.forceUpdate()
    })
  }

  actionReturn = () => {
    const { allSelected } = this.state
    this.props.actionReturn(allSelected)
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
              <h4>
                {functions.getTranslation("select_options")}
              </h4>
              <Filter
                items={allOptions}
                onlyKeys={["name", "region", "code"]}
                actionReturn={(options) => this.setState({ options })}
              />
              <div className='multi-select-options-wrapper'>
                {options.map(option => (
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
              <h4>
                {functions.getTranslation("selected_options")}
              </h4>
              <Filter
                items={selected}
                onlyKeys={["name", "region", "code"]}
                actionReturn={(selected) => this.setState({ selected })}
              />
              <div className='multi-select-options-wrapper'>
                {selected.map(option => (
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
