import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
const Contact =lazy (()=> import('./pages/Contact'))
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Weblayout from './layouts/Weblayout'


const App = () => {
  return (
    <>
     <BrowserRouter>
     <Suspense fallback='Loading..'>
     <Routes>
      <Route element={<Weblayout/>}> 
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Route>
     </Routes>
     </Suspense>
     </BrowserRouter>
    </>
  )
}

export default App
