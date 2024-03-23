import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, CreditCard, BookCheck, Cog, Mail, Users, Globe, IndianRupee, User, BookIcon, UserPlus2Icon, Plus } from 'lucide-react'

const UserLeftbar = () => {
    const navigate = useNavigate()
    const UserLinks = [
        {
            title: 'Dashboard',
            path: '/user/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Events',
            path: '/user/events',
            icon: Plus
        },
        {
            title: 'My Bookings',
            path: '/user/bookings',
            icon: BookCheck
        },
        {
            title: 'My Payments',
            path: '/user/payments',
            icon: IndianRupee
        },
    ]
  return (
    <div>
       <div className='w-full lg:w-[15vw] bg-blue-50/20 border-gray-200 shadow-md flex flex-col'>
                
                <div className='h-screen lg:h-[91vh] flex flex-col gap-1'>
                    {
                        UserLinks.map((link, index) => (
                            <NavLink key={index} to={link.path} className='p-4 border-b-3 font-bold mt-2'
                            activeClassName='border-orange-600 mb-2'>
                                <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                                    {React.createElement(link.icon, { size: 20 })}
                                    {link.title}
                                </span>
                            </NavLink>
                        ))
                    }
                </div>
               
            </div>
    </div>
  )
}

export default UserLeftbar
