import {
  PHONEBOOK_LIST_UPDATE,
  PHONEBOOK_SEARCH_CHANGE,
  PHONEBOOK_LOADING
} from './constants'

const initialState = {
  list: [],
  loading: false,
  search: ''
}

export default (state = initialState, { type, value }) => {
  switch (type) {
    case PHONEBOOK_LIST_UPDATE:
      return {
        ...state,
        list: value
      }
    case PHONEBOOK_SEARCH_CHANGE:
      return {
        ...state,
        search: value
      }
    case PHONEBOOK_LOADING:
      return {
        ...state,
        loading: value
      }
    default:
      return state
  }
}
