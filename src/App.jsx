import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App