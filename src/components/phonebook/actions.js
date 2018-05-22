import { PHONEBOOK_SEARCH_CHANGE } from './constants'

const search = value => ({
  type: PHONEBOOK_SEARCH_CHANGE,
  value
})

export const searchAction = dispatch => value => dispatch(search(value))

export const clearSearchAction = dispatch => () => dispatch(search(''))
