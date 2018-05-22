import { applyMiddleware, combineReducers, createStore } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import * as reducers from './reducers'
import * as epics from './epics'
import phonebook from 'components/phonebook/epic'

const middlewares = [thunk, createEpicMiddleware(phonebook)]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const initialState = {}
export const createNewStore = (state = initialState) =>
  createStore(combineReducers(reducers), state, applyMiddleware(...middlewares))
