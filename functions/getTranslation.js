import data from "../data/_translations.json"

const getTranslation = (name) => {
  name = name ? name.toString().toLowerCase() : null

  return data[name] || name + " - " + data["_no_translation_available"]
}

export default getTranslation