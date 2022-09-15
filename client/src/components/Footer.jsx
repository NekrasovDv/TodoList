import { Button, Flex } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAllTodoThunk } from '../redux/actions/todosActions'

const Footer = () => {
  const dispatch = useDispatch()
  return (
    <Flex justify='center' m='30px'>
      <Button
        colorScheme='telegram'
        onClick={() => dispatch(deleteAllTodoThunk())}
      >
        <DeleteIcon w={7} h={7} />
      </Button>
    </Flex>
  )
}

export default Footer
