import { UserCircle } from 'lucide-react';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import corpify_logo from '../../assets/Images/corpify_logo.png'

const UserTopbar = () => {
    const Toplinks=[
       
        {
            name: 'My Profile',
            path: '/user/profile',
            icon: UserCircle
        },
    ]

    const navigate=useNavigate()
    const handleLogout = (e) => {
        e.preventDefault();
        navigate('/login'); // Navigate to the admin dashboard route
    };
  return (
    <div>
       <div className=' sticky top-0 h-[9vh] w-screen flex flex-row justify-between items-center shadow-sm shadow-blue-300'>
      <div className='w-[90%] h-full flex flex-row justify-between items-center'>
      <img src={corpify_logo} alt="Logo" className="h-[100%] w-[12%] mr-1" />
     
        <div className='w-[3%] flex justify-center items-center'>
          {Toplinks.map((link,index)=> (
             <NavLink key={index} to={link.path} className={'cursor-pointer text-md font-400 mr-8'}>
             <div className="flex items-center">
                 <span className="mr-1">{link.name.split(' ')[0]}</span>
                 <span>{link.name.split(' ')[1]}</span>
             </div>
         </NavLink>
          ))     
          }          
          <button className='cursor-pointer justify-end items-end text-sm font-bold  bg-red-500 text-white px-4 py-2 rounded-md ' onClick={() => navigate('/login')}>Logout</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserTopbar
