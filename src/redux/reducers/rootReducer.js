import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import gameResult from './gameResult';

const rootReducer = combineReducers({
  gameResult,
  routing: routerReducer,
})

export default rootReducer;