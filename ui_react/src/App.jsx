import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
const Contact =lazy (()=> import('./pages/Contact'))
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Weblayout from './layouts/Weblayout'
import Terms from './pages/Terms'

import AdminLayout from './layouts/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminAddEvent from './pages/Admin/AdminAddEvent'
import AdminAllEvents from './pages/Admin/AdminAllEvents'
import AdminBookings from './pages/Admin/AdminBookings'
import AdminSettings from './pages/Admin/AdminSettings'


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
      <Route path='/terms' element={<Terms/>}/>
      </Route>

      <Route element={<AdminLayout/>}>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/addEvent' element={<AdminAddEvent/>}/>
        <Route path='/admin/allEvents' element={<AdminAllEvents/>}/>
        <Route path='/admin/bookings' element={<AdminBookings/>}/>
        <Route path='/admin/settings' element={<AdminSettings/>}/>
      </Route>

     </Routes>
     </Suspense>
     </BrowserRouter>
    </>
  )
}

export default App
