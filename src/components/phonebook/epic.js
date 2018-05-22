import { combineEpics, ofType } from 'redux-observable'
import { delay, mapTo } from 'rxjs/operators'

import { PHONEBOOK_SEARCH_CHANGE, PHONEBOOK_LIST_UPDATE } from './constants'

const searchEpic = action =>
  action.pipe(
    ofType(PHONEBOOK_SEARCH_CHANGE),
    delay(200),
    mapTo({ type: PHONEBOOK_LIST_UPDATE, value: [] })
  )

export default combineEpics(searchEpic)
