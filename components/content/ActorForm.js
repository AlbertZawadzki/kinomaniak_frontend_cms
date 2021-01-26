import React from "react"
import TextInput from "../inputs/TextInput"
import functions from "../../functions"
import SubmitInput from "../inputs/SubmitInput"
import Tile from "../Tile"
import ImageInput from "../inputs/ImageInput"
import database from "../../database"
import { addActor, updateActor } from "../../redux/actions/actor"
import Router from "next/router"

const submitForm = async (event, id, image_url) => {
  const { object, form } = functions.createForm(event, { id, image_url })

  let result
  let returnUrl = "/content/actors/all"

  if (id !== 0) {
    result = await database.update(`actors/update/${id}`, updateActor(object), form)
  } else {
    result = await database.post("actors/create", addActor, form)
  }

  if (result) {
    Router.push(returnUrl)
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
      <Tile title={functions.getTranslation("actors_form")}>
        <form className='form-actor' onSubmit={(event) => submitForm(event, id, image_url)}
              encType="multipart/form-data">
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
      </Tile>
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
