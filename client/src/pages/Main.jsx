import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import FilterContextProvider from '../contexts/FilterContext'

const Main = () => {
  return (
    <>
      <FilterContextProvider>
        <Header />
        <TodoList />
      </FilterContextProvider>
      <Footer />
    </>
  )
}

export default Main
