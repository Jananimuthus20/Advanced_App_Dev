import React from 'react'
import event_icon from '../../assets/Images/event_icon.gif'
import users_icon from '../../assets/Images/users_icon.gif'
import booking_icon from '../../assets/Images/booking_icon.png'
import payment_icon from '../../assets/Images/payment_icon.gif'
import { CalendarCheck, LucideBadgeDollarSign, Users } from 'lucide-react'


const AdminDashboard = () => {
  return (
    <div>
    <br/><br/>
    <div className="bg-blue-400 p-8 rounded-lg flex justify-between">
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <br/>
      <div className="flex items-center justify-center bg-white">
        
      <CalendarCheck  color="blue" size={35} />
      </div>
      <div className="px-6 py-4 text-center bg-white">
        <div className="font-medium text-lg mb-2">Total Number of Events</div>
        <p className="text-blue-700 text-3xl font-extrabold ">5</p>
      </div>
    </div>
    {/* Second Card */}
    <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-white">
    <br/>
        <div className="flex items-center justify-center">
          <Users color="red" size={35}/>
        </div>
        <div className="px-6 py-4 text-center">
          <div className="font-medium text-lg mb-2">Total Number of Users</div>
          <p className="text-orange-700 text-3xl font-extrabold">10</p>
        </div>
      </div>

      {/* Third Card */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-white">
      <br/>
        <div className="flex items-center justify-center">
          <img className="w-[15%]" src={booking_icon} alt="event" />
        </div>
        <div className="px-6 py-4 text-center">
        <div className="font-medium text-lg mb-2">Number of Bookings </div>
          <p className="text-yellow-500 text-3xl font-extrabold">3</p>
        </div>
      </div>

      {/* Fourth Card */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-white">
      <br/>
        <div className="flex items-center justify-center">
         <LucideBadgeDollarSign color="green" size={35}/>
        </div>
        <div className="px-6 py-4 text-center">
        <div className="font-medium text-lg mb-2">Number of Payments </div>
          <p className="text-green-700 text-3xl font-extrabold">3</p>
        </div>
      </div>

    </div>
<br/><br/>
    
<h2 className='font-bold text-blue-800 text-center'>List of users whose bookings is confirmed</h2>
<br/><br/>
<div class="relative overflow-x-auto">
    <table class="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead class="text-sm text-gray-700 uppercase">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Booking ID
                </th>
                <th scope="col" class="px-6 py-3">
                    user name
                </th>
                <th scope="col" class="px-6 py-3">
                    Event mode
                </th>
                <th scope="col" class="px-6 py-3">
                    Payment status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class=" border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                   1
                </th>
                <td class="px-6 py-4 text-black">
                    Janani
                </td>
                <td class="px-6 py-4 text-black">
                    Offline
                </td>
                <td class="px-6 py-4 text-black">
                    Paid
                </td>
            </tr>
            <tr class="bg-b;ue-200 border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  2
                </th>
                <td class="px-6 py-4 text-black">
                   Deeksha
                </td>
                <td class="px-6 py-4 text-black">
                    Hybrid
                </td>
                <td class="px-6 py-4 text-black">
                    Paid
                </td>
            </tr>
            
        </tbody>
    </table>
    <br/><br/>
</div>

    </div>
  )
}

export default AdminDashboard
