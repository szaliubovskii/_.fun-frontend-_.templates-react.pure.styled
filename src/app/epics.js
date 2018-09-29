import { combineEpics } from 'redux-observable'

import phonebook from './phonebook/epic'

export default combineEpics(phonebook)
