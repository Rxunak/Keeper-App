import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'
import Text from './Text'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Textarea from './Textarea'

function App() {

  return (
    <div className='main-container'>
  

   <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>}  />
      <Route path="/textarea" element={<Textarea/>} />
    </Routes>
   </Router>
  
    </div>
  )
}

export default App