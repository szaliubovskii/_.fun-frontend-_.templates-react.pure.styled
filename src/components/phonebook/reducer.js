import { PHONEBOOK_LIST_UPDATE } from './constants'

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
    default:
      return state
  }
}
