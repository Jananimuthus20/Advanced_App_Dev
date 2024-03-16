import React from 'react'
import Navbar from '../components/Public/Navbar'
import Footer from '../components/Public/Footer'
import { Outlet } from 'react-router-dom'

const Weblayout = () => {
  return (
    <div className='overflow-hidden'>
    <Navbar/>
    <div>
        <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}

export default Weblayout
