import React from "react"

class TextInput extends React.Component {
  render() {
    const { name, value, title, type, small } = this.props
    const id = "text-input-" + name

    return (
      <div className={`input-outer-wrapper ${small ? "small" : "big"}`}>
        <div className="input-wrapper">
          <label htmlFor={id}>{title}</label>
          <input
            type={type}
            name={name}
            defaultValue={value}
            id={id}
            onChange={(event) => this.props.actionReturn(event.target)}
          />
        </div>
      </div>
    )
  }
}

TextInput.defaultProps = {
  name: "unknown-name",
  value: "",
  title: "No title given",
  actionReturn: () => {
  },
  type: "text",
  small: false,
}

export default TextInput
