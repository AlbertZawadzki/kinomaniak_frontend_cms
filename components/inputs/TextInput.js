import React from "react"

class TextInput extends React.Component {
  render() {
    const { name, value, title, isPassword } = this.props
    const id = "text-input-" + name

    return (
      <div className="input-wrapper">
        <label htmlFor={id}>{title}</label>
        <input
          type={isPassword ? "password" : "text"}
          name={name}
          defaultValue={value}
          id={id}
          onChange={(event) => this.props.actionReturn(event.target)}
        />
      </div>
    )
  }
}

TextInput.defaultProps = {
  name: "unknown-name",
  value: "",
  title: "No title given",
  actionReturn: () => {
    console.log("No return function given")
  },
  isPassword: false,
}

export default TextInput
