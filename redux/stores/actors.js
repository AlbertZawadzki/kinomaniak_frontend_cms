import * as actions from "../actionNames/actor"

const request = (state = { data: [] }, action) => {
  switch (action.type) {
    case actions.ACTORS_ADD:
      state.data.push(data)
      return state
    case actions.ACTORS_REMOVE:
      console.log("actors.remove")
      return state
    case actions.ACTORS_SET:
      state.data = action.data
      return state
    case actions.ACTORS_UPDATE:
      console.log("actors.update")
      return state
    default:
      return state
  }
}

export default request
