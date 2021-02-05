import React from "react"

class CheckboxSwitchInput extends React.Component {
  render() {
    const { name, checked, title } = this.props
    const id = "checkbox-input-" + name

    return (
      <div className="input-wrapper">
        <label htmlFor={id}>
          {title}
        </label>
        <input
          type="checkbox"
          name={name}
          defaultChecked={checked}
          id={id}
          onChange={(event) => this.props.actionReturn(event.target)}
        />
        <label htmlFor={id}>
        </label>
      </div>
    )
  }
}

CheckboxSwitchInput.defaultProps = {
  name: "unknown-name",
  checked: false,
  title: "No title given",
  actionReturn: () => {
  },
}

export default CheckboxSwitchInput
