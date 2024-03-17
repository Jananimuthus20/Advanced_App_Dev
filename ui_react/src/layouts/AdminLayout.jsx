import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminLeftbar from '../components/Admin/AdminLeftbar'
import AdminTopbar from '../components/Admin/AdminTopbar'

const AdminLayout = () => {
  return (
    <div className='h-screen flex'>
      <div className='flex flex-col flex-1'>
        <AdminTopbar />
        <div className='flex flex-1'>
          <AdminLeftbar />
          <div className='w-full flex flex-col p-2 gap-4'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>


  )
}

export default AdminLayout
