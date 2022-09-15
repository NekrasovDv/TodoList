import React, { useState } from 'react'
import { Box, Heading, Button, Flex, Input, Spinner } from '@chakra-ui/react'
import { CheckIcon, CloseIcon, DeleteIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeStatusThunk,
  deleteTodoThunk,
  editTodoThunk,
} from '../redux/actions/todosActions'

const TodoItem = ({ todo, index }) => {
  const [visible, setVisible] = useState(false)
  const [deleteEvent, setDeleteEvent] = useState(null)
  const [doneEvent, setDoneEvent] = useState(null)
  const [editEvent, setEditEvent] = useState(0)
  const [input, setInput] = useState(todo.text)
  const { loader } = useSelector((store) => store)
  const dispatch = useDispatch()
  return (
    <Flex justify='space-between' m='30px'>
      {visible ? (
        <Box>
          <Input
            focusBorderColor='telegram.500'
            id={todo.id}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            autoFocus={true}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                setEditEvent(e.target.id)
                dispatch(
                  editTodoThunk({ id: todo.id, text: input }, setEditEvent)
                )
                setVisible(false)
              }
            }}
            placeholder='add a new todo here...'
          />
        </Box>
      ) : (
        <Box>
          {loader.edit && editEvent ? (
            <Spinner
              thickness='4px'
              speed='0.5s'
              color='telegram.500'
              size='lg'
            />
          ) : (
            <Heading
              textDecoration={todo.isDone ? 'line-through' : 'none'}
              onClick={() => setVisible(true)}
            >
              {`${index + 1}. ${todo.text}`}
            </Heading>
          )}
        </Box>
      )}

      <Box>
        <Button
          mr='10px'
          colorScheme={todo.isDone ? 'gray' : 'telegram'}
          isLoading={doneEvent ? true : false}
          onClick={(e) => {
            setDoneEvent(e.target)
            dispatch(changeStatusThunk(todo.id, setDoneEvent))
          }}
        >
          {todo.isDone ? <CloseIcon /> : <CheckIcon />}
        </Button>
        <Button
          colorScheme='telegram'
          isLoading={deleteEvent ? true : false}
          onClick={(e) => {
            setDeleteEvent(e.target)
            dispatch(deleteTodoThunk(todo.id))
          }}
        >
          <DeleteIcon />
        </Button>
      </Box>
    </Flex>
  )
}

export default TodoItem
