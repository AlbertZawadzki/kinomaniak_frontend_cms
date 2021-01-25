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
        />
      </div>
    )
  }
}

TextInput.defaultProps = {
  name: "unknown-name",
  value: "",
  title: "No title given",
  returnData: () => {
    console.log("No return function given")
  },
  isPassword: false,
}

export default TextInput
