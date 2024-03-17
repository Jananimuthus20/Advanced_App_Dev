import React from 'react'
import { NavLink } from 'react-router-dom'
import corpify_logo from '../../assets/Images/corpify_logo.png'

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
    <div className=' sticky top-0 h-[9vh] w-screen flex flex-row justify-between items-center shadow-sm shadow-blue-300'>
      <div className='w-[90%] h-full flex flex-row justify-between items-center'>
      <img src={corpify_logo} alt="Logo" className="h-[100%] w-[12%] mr-1" />
        <div className='w-[40%] flex flex-row justify-between items-center'>
          {links.map((link,index)=> (
             <NavLink key={index} to={link.path} className={'cursor-pointer text-lg font-bold'}>
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
