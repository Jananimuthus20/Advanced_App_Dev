import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, CreditCard, BookCheck, Cog, Mail, Users, Globe, IndianRupee, User, BookIcon, UserPlus2Icon, Plus } from 'lucide-react'

const AdminLeftbar = () => {

    const navigate = useNavigate()
    const UserLinks = [
        {
            title: 'Dashboard',
            path: '/admin/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Add Event',
            path: '/admin/addEvent',
            icon: Plus
        },
        {
            title: 'All Events',
            path: '/admin/allEvents',
            icon: BookCheck
        },
        {
            title: 'All Bookings',
            path: '/admin/bookings',
            icon: BookIcon
        },
        {
            title: 'All Payments',
            path: '/admin/payments',
            icon: IndianRupee
        },
        {
            title: 'All Users',
            path: '/admin/users',
            icon: UserPlus2Icon
        },
    ]
    
  return (
    <div>
       <div className='w-full lg:w-[15vw] bg-blue-50/20 shadow-md shadow-blue-500 flex flex-col'>
                
                <div className='h-screen lg:h-[105vh] flex flex-col gap-1'>
                    {
                        UserLinks.map((link, index) => (
                            <NavLink key={index} to={link.path} className='p-4 border-b-2 font-bold mt-2'
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

export default AdminLeftbar
