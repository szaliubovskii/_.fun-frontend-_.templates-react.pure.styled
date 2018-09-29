import { list } from 'theme'

import { THEME_CHANGE } from './constants'

const initialState = {
  list,
  selected: list[0]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        selected: state.list.find(({ name }) => name === action.value)
      }
    default:
      return state
  }
}
