import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { fakeAjaxGet } from './fake.api'

import * as reducers from './reducers'
import epics from './epics'

const epicMiddleware = createEpicMiddleware(epics, {
  dependencies: { get: fakeAjaxGet }
})
const middlewares = [thunk, epicMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const initialState = {}
export const createNewStore = (state = initialState) =>
  createStore(combineReducers(reducers), state, applyMiddleware(...middlewares))
