import React from "react"
import TextInput from "../inputs/TextInput"
import functions from "../../functions"
import SubmitInput from "../inputs/SubmitInput"
import Tile from "../Tile"
import ImageInput from "../inputs/ImageInput"
import database from "../../database"
import { updateActor } from "../../redux/actions/actor"


const submitForm = async (event, id, image_url) => {
  event.preventDefault()

  const keys = Object.keys(event.target).filter(key => parseInt(key) == key)
  const fields = []

  for (let i = 0; i < keys.length; i++) {
    if (functions.isDataInput(event.target[keys[i]])) {
      fields.push(event.target[keys[i]])
    }
  }

  const object = {
    id,
    name: fields[0].value,
    lastname: fields[1].value,
    image: fields[2].files[0],
    image_url,
  }

  const form = new FormData()

  Object.keys(object).map(key => {
    if (object[key]) {
      form.append(key, object[key])
    }
  })

  if (id !== 0) {
    await database.update(`actors/update/${id}`, updateActor(object), form)
  }
}

class ActorForm extends React.Component {
  state = {
    newImage: "",
  }

  render() {
    const { newImage } = this.state
    const { id, name, lastname, image_url, isOld } = this.props

    return (
      <form className='form-actor' onSubmit={(event) => submitForm(event, id, image_url)} encType="multipart/form-data">
        <TextInput name='name' value={name} title={functions.getTranslation("actor_name")} />
        <TextInput name='lastname' value={lastname} title={functions.getTranslation("actor_lastname")} />
        <div className='actor-images-wrapper'>
          {
            image_url && <div className='actor-single-image'>
              <Tile title={functions.getTranslation("current_image")} sub={2}>
                <img src={image_url} alt='Current actor image' className='big-actor-image' />
              </Tile>
            </div>
          }
          <div className='actor-single-image'>
            <Tile title={functions.getTranslation("new_image")} hidden={isOld} sub={isOld ? 2 : 1}>
              <ImageInput name='image' title={functions.getTranslation("actor_image_set")} />
              {newImage && <img src={newImage} alt='New actors image' className='big-actor-image' />}
            </Tile>
          </div>
        </div>
        <SubmitInput text={functions.getTranslation(isOld ? "update" : "create")} />
      </form>
    )
  }
}

ActorForm.defaultProps = {
  id: 0,
  name: "",
  lastname: "",
  image_url: false,
  isOld: false,
}

export default ActorForm
