import { useState,useEffect } from 'react'
import Home from './Components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pokemon/:id' element={<Info/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
