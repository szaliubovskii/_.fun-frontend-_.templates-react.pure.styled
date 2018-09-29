import {
  PHONEBOOK_FIRST_LOAD,
  PHONEBOOK_LIST_UPDATE,
  PHONEBOOK_SEARCH_CHANGE,
  PHONEBOOK_LOADING
} from './constants'

export const initialState = {
  firstLoad: true,
  list: [],
  loading: true,
  search: ''
}

export default (state = initialState, { type, value }) => {
  switch (type) {
    case PHONEBOOK_FIRST_LOAD:
      return {
        ...state,
        firstLoad: value
      }
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
