import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Weblayouts from './layouts/Weblayouts'

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route> 
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
