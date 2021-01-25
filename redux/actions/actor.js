import * as actions from "../actionNames/actor"

export const setActors = (data) => ({
  type: actions.ACTORS_SET,
  data: data,
})

export const addActor = (data) => ({
  type: actions.ACTORS_ADD,
  data: data,
})

export const removeActor = (data) => ({
  type: actions.ACTORS_REMOVE,
  data: data,
})

export const updateActor = (data) => ({
  type: actions.ACTORS_UPDATE,
  data: data,
})
