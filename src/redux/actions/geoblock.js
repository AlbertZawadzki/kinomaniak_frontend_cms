import * as actions from "../actionNames/geoblock"

export const setGeoblocks = (data) => ({
  type: actions.GEOBLOCK_SET,
  data: data,
})

export const addGeoblock = (data) => ({
  type: actions.GEOBLOCK_ADD,
  data: data,
})

export const removeGeoblock = (id) => ({
  type: actions.GEOBLOCK_REMOVE,
  id: id,
})

export const updateGeoblock = (data) => ({
  type: actions.GEOBLOCK_UPDATE,
  data: data,
})
