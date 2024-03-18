import React from 'react'
import { Outlet } from 'react-router-dom'
import UserLeftbar from '../components/User/UserLeftbar'
import UserTopbar from '../components/User/UserTopbar'

const UserLayout = () => {
  return (
    <div className='h-screen flex'>
      <div className='flex flex-col flex-1'>
        <UserTopbar />
        <div className='flex flex-1'>
          <UserLeftbar />
          <div className='w-full flex flex-col p-2 gap-4'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLayout
