import { combineEpics, ofType } from 'redux-observable'
import { delay, mapTo, mergeMap } from 'rxjs/operators'
import 'rxjs/add/operator/map'

import { PHONEBOOK_SEARCH_CHANGE, PHONEBOOK_LIST_UPDATE } from './constants'
import { listLoading, listUpdate } from './actions'

// when filter changed, show that list is loading
export const filterLoadingStart = action =>
  action.pipe(ofType(PHONEBOOK_SEARCH_CHANGE), mapTo(listLoading(true)))

// when list updated, change loading status
export const filterLoadingStop = action =>
  action.pipe(ofType(PHONEBOOK_LIST_UPDATE), mapTo(listLoading(false)))

// load data on filter change
export const filterChange = (action, _, { get }) =>
  action.pipe(
    ofType(PHONEBOOK_SEARCH_CHANGE),
    delay(1000),
    mergeMap(({ value }) =>
      get(`/api/phonebook/${value}`).map(response => listUpdate(response))
    )
  )

export default combineEpics(filterLoadingStart, filterLoadingStop, filterChange)
