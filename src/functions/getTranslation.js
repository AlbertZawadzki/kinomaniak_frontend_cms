import data from "../data/translations.json"

const CASE_CAPITALIZE = 0
const CASE_LOWERCASE = 1
const CASE_UPPERCASE = 2

const getTranslation = (name, casing = CASE_CAPITALIZE) => {
  name = name ? name.toString().toLowerCase() : null

  let text = data[name] || name + " - " + data["_no_translation_available"]

  switch (casing) {
    case CASE_CAPITALIZE:
      return text.charAt(0).toUpperCase() + text.slice(1)
    case  CASE_LOWERCASE:
      return text.toLowerCase()
    case CASE_UPPERCASE:
      return text.toUpperCase()
    default:
      return "[ERROR] unknown casing " + name
  }
}

export default getTranslation