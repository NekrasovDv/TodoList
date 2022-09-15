import React, { useState } from 'react'
import { Box, Input, Button, Flex, FormControl, Select } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { addNewTodoThunk } from '../redux/actions/todosActions'
import { useFilterContext } from '../contexts/FilterContext'

const Header = () => {
  const [input, setInput] = useState('')
  const { loader } = useSelector((store) => store)
  const { search, setSearch, setSelect } = useFilterContext()
  const dispatch = useDispatch()

  return (
    <Flex direction='row' justify='space-around' mt='30px'>
      <Box>
        <Input
          focusBorderColor='telegram.500'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type='text'
          placeholder='find...'
        />
      </Box>
      <Box>
        <FormControl display='flex'>
          <Input
            focusBorderColor='telegram.500'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='add...'
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                dispatch(addNewTodoThunk(input))
                setInput('')
              }
            }}
          />
          <Button
            isLoading={loader.add}
            onClick={() => {
              dispatch(addNewTodoThunk(input))
              setInput('')
            }}
            type='submit'
            colorScheme='telegram'
            ml='20px'
          >
            <AddIcon />
          </Button>
        </FormControl>
      </Box>
      <Box>
        <Select
          focusBorderColor='telegram.500'
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value='all'>show all</option>
          <option value='done'>show done</option>
          <option value='undone'>show undone</option>
        </Select>
      </Box>
    </Flex>
  )
}

export default Header
