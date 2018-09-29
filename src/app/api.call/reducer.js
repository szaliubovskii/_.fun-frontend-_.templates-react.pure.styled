import { API_DATA_LOADED } from './constants'

const initialState = {
  list: [],
  loaded: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case API_DATA_LOADED:
      return {
        ...state,
        list: action.value,
        loaded: true
      }
    default:
      return state
  }
}
