import todosTypes from '../types/todosTypes'
import axios from 'axios'
import { setLoaderFalse, setLoaderTrue } from './loaderActions'
import loaderConfig from '../../loaderConfig'

export const getAllTodo = (todos) => ({
  type: todosTypes.GET_ALL_TODO,
  payload: todos,
})

export const getAllTodoThunk = (setLoader) => async (dispatch) => {
  try {
    dispatch(setLoaderTrue(loaderConfig.all))
    const response = await axios.get('http://localhost:3050/todos')
    if (response.status === 200) {
      dispatch(getAllTodo(response.data))
    }
    dispatch(setLoaderFalse(loaderConfig.all))
  } catch (error) {
    console.log(error.message)
  }
}

export const addNewTodo = (todo) => ({
  type: todosTypes.ADD_NEW_TODO,
  payload: todo,
})

export const addNewTodoThunk = (text) => async (dispatch) => {
  try {
    dispatch(setLoaderTrue(loaderConfig.add))
    const response = await axios.post('http://localhost:3050/todos', { text })
    if (response.status === 200) {
      dispatch(addNewTodo(response.data))
    }
    dispatch(setLoaderFalse(loaderConfig.add))
  } catch (error) {
    console.log(error.message)
  }
}

export const changeStatus = (todo) => ({
  type: todosTypes.CHANGE_STATUS,
  payload: todo,
})

export const changeStatusThunk = (id, setDoneEvent) => async (dispatch) => {
  try {
    const response = await axios.patch('http://localhost:3050/todos', { id })
    dispatch(changeStatus(response.data))
    setDoneEvent(null)
  } catch (error) {
    console.log(error.message)
  }
}

export const editTodo = (todo) => ({
  type: todosTypes.EDIT_TODO,
  payload: todo,
})

export const editTodoThunk =
  ({ id, text }, setEditEvent) =>
  async (dispatch) => {
    try {
      dispatch(setLoaderTrue(loaderConfig.edit))
      const response = await axios.put('http://localhost:3050/todos', {
        id,
        text,
      })
      dispatch(editTodo(response.data))
      dispatch(setLoaderFalse(loaderConfig.edit))
      setEditEvent(0)
    } catch (error) {
      console.log(error.message)
    }
  }

export const deleteTodo = (id) => ({
  type: todosTypes.DELETE_TODO,
  payload: id,
})

export const deleteTodoThunk = (id) => async (dispatch) => {
  try {
    dispatch(setLoaderTrue(loaderConfig.delete))
    const response = await axios.delete(`http://localhost:3050/todos/${id}`)
    if (response.status === 200) {
      dispatch(deleteTodo(id))
    }
    dispatch(setLoaderFalse(loaderConfig.delete))
  } catch (error) {
    console.log(error.message)
  }
}

export const deleteAllTodo = () => ({
  type: todosTypes.DELETE_ALL_TODO,
})

export const deleteAllTodoThunk = () => async (dispatch) => {
  try {
    dispatch(setLoaderTrue(loaderConfig.all))
    const response = await axios.delete('http://localhost:3050/todos')
    if (response.status === 200) {
      dispatch(deleteAllTodo())
    }
    dispatch(setLoaderFalse(loaderConfig.all))
  } catch (error) {
    console.log(error.message)
  }
}
