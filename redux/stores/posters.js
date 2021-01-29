import * as actions from "../actionNames/poster"

const posters = (state = { data: [], was_fetched: false }, action) => {
  switch (action.type) {
    case actions.POSTERS_ADD:
      state.data.push(action.data)
      return state
    case actions.POSTERS_REMOVE:
      state.data = state.data.filter(actor => actor.id !== action.id)
      return state
    case actions.POSTERS_SET:
      state.was_fetched = true
      state.data = action.data
      return state
    case actions.POSTERS_UPDATE:
      let found = false
      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i].id === action.data.id) {
          state.data[i] = action.data
          found = true
          break
        }
      }
      if (!found) {
        state.data.push(action.data)
      }
      return state
    default:
      return state
  }
}

export default posters
