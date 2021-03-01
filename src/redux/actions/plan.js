import * as actions from "../actionNames/plan"

export const setPlans = (data) => ({
  type: actions.PLAN_SET,
  data: data,
})

export const addPlan = (data) => ({
  type: actions.PLAN_ADD,
  data: data,
})

export const removePlan = (id) => ({
  type: actions.PLAN_REMOVE,
  id: id,
})

export const updatePlan = (data) => ({
  type: actions.PLAN_UPDATE,
  data: data,
})
