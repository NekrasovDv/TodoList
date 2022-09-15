import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Main from './pages/Main'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/todos' replace={true} />} />
      <Route path='todos' element={<Main />} />
    </Routes>
  )
}

export default App
