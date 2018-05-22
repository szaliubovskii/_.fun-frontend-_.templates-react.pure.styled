import { PHONEBOOK_LIST_UPDATE, PHONEBOOK_SEARCH_CHANGE } from './constants'

const initialState = {
  list: [],
  search: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PHONEBOOK_LIST_UPDATE:
      return {
        ...state,
        list: action.value
      }
    case PHONEBOOK_SEARCH_CHANGE:
      return {
        ...state,
        search: action.value
      }
    default:
      return state
  }
}
