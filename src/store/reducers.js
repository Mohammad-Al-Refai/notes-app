import { combineReducers, createStore } from 'redux'
import { MainReducer } from './Main/reducer'

let rootReducers = combineReducers({ MainReducer })

export default rootReducers
