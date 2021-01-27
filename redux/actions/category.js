import * as actions from "../actionNames/category"

export const setCategories = (data) => ({
  type: actions.CATEGORIES_SET,
  data: data,
})

export const addCategory = (data) => ({
  type: actions.CATEGORIES_ADD,
  data: data,
})

export const removeCategory = (id) => ({
  type: actions.CATEGORIES_REMOVE,
  id: id,
})

export const updateCategory = (data) => ({
  type: actions.CATEGORIES_UPDATE,
  data: data,
})
