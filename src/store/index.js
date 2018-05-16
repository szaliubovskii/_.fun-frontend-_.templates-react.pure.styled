import { applyMiddleware, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'

import * as reducers from './reducers'

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const initialState = {}
export const createNewStore = (state = initialState) =>
  createStore(combineReducers(reducers), state, applyMiddleware(...middlewares))
