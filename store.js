// src/redux/store.js

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import Reducer from './Reducer'

const rootReducer = combineReducers({
  products: Reducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
