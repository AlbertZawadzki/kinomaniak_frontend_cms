const isDataInput = (input) => {
  const isInput = input.tagName === "INPUT" || input.tagName === "SELECT" || input.tagName === "TEXTAREA"
  const notFilter = !input.name.includes("filter-")
  return isInput && input.type !== "submit" && notFilter || false
}

const getDataInput = (input) => {
  switch (input.tagName) {
    case "INPUT":
      switch (input.type) {
        case"file":
          return input.files[0]
        case"checkbox":
          return input.checked
        default:
          return input.value
      }
    case "SELECT":
      return input.value
    case "TEXTAREA":
      return input.value
  }
}

const createForm = (event, additionalData) => {
  event.preventDefault()

  // Collect all fields
  const keys = Object.keys(event.target).filter(key => parseInt(key) == key)

  let object = {}
  for (let i = 0; i < keys.length; i++) {
    if (isDataInput(event.target[keys[i]])) {
      object[event.target[keys[i]].name] = getDataInput(event.target[keys[i]])
    }
  }

  object = { ...object, ...additionalData }

  // Create form to be sent
  const form = new FormData()
  Object.keys(object).map(key => {
    if (object[key]) {
      form.append(key, object[key])
    }
  })

  return { object, form }
}

export default createForm