import React from "react"

class TextInput extends React.Component {
  render() {
    const { name, value, title, small } = this.props
    const id = "text-area-" + name

    return (
      <div className={`input-outer-wrapper ${small ? "small" : "big"}`}>
        <div className="input-wrapper">
          <label htmlFor={id}>{title}</label>
          <input
            type='text'
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
  small: false,
}

export default TextInput
