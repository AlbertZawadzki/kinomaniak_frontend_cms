import * as actions from "../actionNames/actor"

export const setActors = (data) => ({
  type: actions.ACTORS_SET,
  data: data,
})

export const addActor = (data) => ({
  type: actions.ACTORS_ADD,
  data: data,
})

export const removeActor = (id) => ({
  type: actions.ACTORS_REMOVE,
  id: id,
})

export const updateActor = (data) => ({
  type: actions.ACTORS_UPDATE,
  data: data,
})
