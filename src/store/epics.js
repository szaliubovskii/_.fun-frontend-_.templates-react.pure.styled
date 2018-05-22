import { combineEpics } from 'redux-observable'

import phonebook from 'components/phonebook/epic'

export default combineEpics(phonebook)
