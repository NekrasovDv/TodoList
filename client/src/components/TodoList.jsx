import React, { useEffect } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import { getAllTodoThunk } from '../redux/actions/todosActions'
import { useFilterContext } from '../contexts/FilterContext'

const TodoList = () => {
  const { selectedTodos } = useFilterContext()
  const { all } = useSelector((store) => store.loader)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTodoThunk())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {all ? (
        <Box className='spinner'>
          <Spinner
            thickness='6px'
            speed='0.5s'
            color='telegram.500'
            size='xl'
          />
        </Box>
      ) : (
        <Box className='main'>
          {selectedTodos.map((todo, index) => (
            <TodoItem key={todo.id} todo={todo} index={index} />
          ))}
        </Box>
      )}
    </>
  )
}

export default TodoList
