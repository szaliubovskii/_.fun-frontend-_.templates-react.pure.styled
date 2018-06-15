import {
  PHONEBOOK_FIRST_LOAD,
  PHONEBOOK_SEARCH_CHANGE,
  PHONEBOOK_LOADING,
  PHONEBOOK_LIST_UPDATE
} from './constants'

export const firstLoad = () => ({
  type: PHONEBOOK_FIRST_LOAD,
  value: false
})

export const search = value => ({
  type: PHONEBOOK_SEARCH_CHANGE,
  value
})

export const listLoading = value => ({
  type: PHONEBOOK_LOADING,
  value
})

export const listUpdate = value => ({
  type: PHONEBOOK_LIST_UPDATE,
  value
})

export const firstLoadAction = dispatch => () => dispatch(firstLoad())

export const searchAction = dispatch => value => dispatch(search(value))

export const clearSearchAction = dispatch => () => dispatch(search(''))
