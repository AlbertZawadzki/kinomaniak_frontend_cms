import React from "react"

class SelectInput extends React.Component {
  render() {
    const { name, title, selected, options, optionKeyName, returnKeyName, small } = this.props
    const id = "text-select-" + name

    return (
      <div className={`input-outer-wrapper ${small ? "small" : "big"}`}>
        <div className="input-wrapper">
          <label htmlFor={id}>{title}</label>
          <select
            id={id}
            name={name}
            onChange={(event) => this.props.actionReturn(event.target)}
          >
            {options.map(singleOption => (
              <option key={singleOption.key} defaultValue={selected === singleOption.key}
                      value={singleOption[returnKeyName]}>
                {singleOption[optionKeyName]}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

SelectInput.defaultProps = {
  name: "unknown-name",
  selected: null,
  title: "No title given",
  options: [],
  optionKeyName: "key",
  returnKeyName: "key",
  actionReturn: () => {
  },
  small: false,
}

export default SelectInput
