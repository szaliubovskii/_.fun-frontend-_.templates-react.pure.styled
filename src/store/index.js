import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import * as reducers from './reducers'
import epics from './epics'

const middlewares = [thunk, createEpicMiddleware(epics)]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const initialState = {}
export const createNewStore = (state = initialState) =>
  createStore(combineReducers(reducers), state, applyMiddleware(...middlewares))
