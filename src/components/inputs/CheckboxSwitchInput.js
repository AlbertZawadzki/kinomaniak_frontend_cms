import React from "react"
import functions from "../../functions"

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
          className='switch-checkbox'
          name={name}
          defaultChecked={checked}
          id={id}
          onChange={(event) => this.props.actionReturn(event.target)}
        />
        <label htmlFor={id} className='checkbox'>
          <div className='switch-wrapper'>
            <div className='switch-text true'>
              {functions.getTranslation("true")}
            </div>
            <div className='switch-inner-wrapper'>
            </div>
            <div className='switch-text false'>
              {functions.getTranslation("false")}
            </div>
          </div>
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
