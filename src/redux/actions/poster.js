import * as actions from "../actionNames/poster"

export const setPosters = (data) => ({
  type: actions.POSTERS_SET,
  data: data,
})

export const addPoster = (data) => ({
  type: actions.POSTERS_ADD,
  data: data,
})

export const removePoster = (id) => ({
  type: actions.POSTERS_REMOVE,
  id: id,
})

export const updatePoster = (data) => ({
  type: actions.POSTERS_UPDATE,
  data: data,
})
