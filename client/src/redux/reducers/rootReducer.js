import { combineReducers } from 'redux'
import loaderReducer from './loaderReducer'
import todosReducer from './todosReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  loader: loaderReducer,
})

export default rootReducer
