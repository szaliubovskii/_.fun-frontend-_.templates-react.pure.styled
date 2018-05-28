import * as types from './constants'

export const search = value => ({
  type: types.PHONEBOOK_SEARCH_CHANGE,
  value
})

export const listLoading = value => ({
  type: types.PHONEBOOK_LOADING,
  value
})

export const listUpdate = value => ({
  type: types.PHONEBOOK_LIST_UPDATE,
  value
})

export const searchAction = dispatch => value => dispatch(search(value))

export const clearSearchAction = dispatch => () => dispatch(search(''))
