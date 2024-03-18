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
import AdminAllPayments from './pages/Admin/AdminAllPayments'
import AdminAllUsers from './pages/Admin/AdminAllUsers'

import UserLayout from './layouts/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import UserEvents from './pages/User/UserEvents'
import UserBookings from './pages/User/UserBookings'
import UserPayments from './pages/User/UserPayments'
import UserProfile from './pages/User/UserProfile'


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
        <Route path='/admin/payments' element={<AdminAllPayments/>}/>
        <Route path='/admin/settings' element={<AdminSettings/>}/>
        <Route path='/admin/users' element={<AdminAllUsers/>}/>
      </Route>

      <Route element={<UserLayout/>}>
      <Route path='/user/dashboard' element={<UserDashboard/>}/>
      <Route path='/user/events' element={<UserEvents/>}/>
      <Route path='/user/bookings' element={<UserBookings/>}/>
      <Route path='/user/payments' element={<UserPayments/>}/>
      <Route path='/user/profile' element={<UserProfile/>}/>
      </Route>

     </Routes>
     </Suspense>
     </BrowserRouter>
    </>
  )
}

export default App
