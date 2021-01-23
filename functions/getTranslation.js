import data from "../data/_translations.json"

const getTranslation = (name) => {
  name = name ? name.toString().toLowerCase() : "_no_translation_available"
  // TODO: fetch from redux store
  return data[name]
}

export default getTranslation