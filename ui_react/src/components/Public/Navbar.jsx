import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const links=[
    {
      name:'Home',
      path:'/'
    },
    {
      name:'Contact',
      path:'/contact'
    },
    {
      name:'Login',
      path:'/login'
    },
    {
      name:'Register',
      path:'/register'
    }

  ]
  return (
    <div className='h-[9vh] w-screen flex flex-row bg-blue-300 justify-between items-center shadow-sm shadow-blue-300 sticky'>
      <div className='w-[90%] h-full flex flex-row justify-between items-center'>
        <div className='w-[40%] m-7'>
          Quiz App
        </div>
        <div className='w-[40%] flex flex-row justify-between items-center'>
          {links.map((link,index)=> (
             <NavLink key={index} to={link.path} className={'cursor-pointer'}>
              {link.name}
            </NavLink>
          ))     
}          
        </div>
      </div>
    </div>
  )
}

export default Navbar
