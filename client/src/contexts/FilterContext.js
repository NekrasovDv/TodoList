import { createContext, useContext, useState } from 'react'
import { useSelector } from 'react-redux'

const FilterContext = createContext()

const FilterContextProvider = ({ children }) => {
  const [search, setSearch] = useState('')
  const [select, setSelect] = useState('')

  const todos = useSelector((store) => store.todos)

  const filteredTodos = todos
    .sort((a, b) => a.id - b.id)
    .filter((todo) => todo.text.includes(search))
  const selectedTodos = filteredTodos.filter((todo) => {
    switch (select) {
      case 'done':
        return todo.isDone === true

      case 'undone':
        return todo.isDone === false

      default:
        return todo
    }
  })

  return (
    <FilterContext.Provider
      value={{ search, setSearch, setSelect, selectedTodos }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContextProvider
export const useFilterContext = () => useContext(FilterContext)
