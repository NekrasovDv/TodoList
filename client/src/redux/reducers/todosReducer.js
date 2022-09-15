import todosTypes from '../types/todosTypes'
import initState from '../initState'

const todosReducer = (state = initState.todos, action) => {
  switch (action.type) {
    case todosTypes.GET_ALL_TODO:
      return action.payload

    case todosTypes.ADD_NEW_TODO:
      return [...state, action.payload]

    case todosTypes.CHANGE_STATUS:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload
        }
        return todo
      })

    case todosTypes.EDIT_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload
        }
        return todo
      })

    case todosTypes.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload)

    case todosTypes.DELETE_ALL_TODO:
      return []

    default:
      return state
  }
}

export default todosReducer
