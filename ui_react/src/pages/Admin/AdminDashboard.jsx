import React from 'react'
import event_icon from '../../assets/Images/event_icon.gif'
import users_icon from '../../assets/Images/users_icon.gif'
import booking_icon from '../../assets/Images/booking_icon.png'
import payment_icon from '../../assets/Images/payment_icon.gif'
import { CalendarCheck, LucideBadgeDollarSign, Users } from 'lucide-react'


const AdminDashboard = () => {
  return (
    <>
    <br/><br/>
    <div className="flex justify-between" >
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex items-center justify-center ">
      <CalendarCheck color="blue" size={35} />
      </div>
      <div className="px-6 py-4 text-center">
        <div className="font-medium text-lg mb-2">Total Number of Events</div>
        <p className="text-blue-700 text-3xl font-extrabold ">5</p>
      </div>
    </div>
    {/* Second Card */}
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="flex items-center justify-center">
          <Users color="red" size={35}/>
        </div>
        <div className="px-6 py-4 text-center">
          <div className="font-medium text-lg mb-2">Total Number of Users</div>
          <p className="text-orange-700 text-3xl font-extrabold">10</p>
        </div>
      </div>
      {/* Third Card */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="flex items-center justify-center">
          <img className="w-[15%]" src={booking_icon} alt="event" />
        </div>
        <div className="px-6 py-4 text-center">
        <div className="font-medium text-lg mb-2">Number of Bookings made</div>
          <p className="text-yellow-500 text-3xl font-extrabold">3</p>
        </div>
      </div>
      {/* Fourth Card */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="flex items-center justify-center">
         <LucideBadgeDollarSign color="green" size={35}/>
        </div>
        <div className="px-6 py-4 text-center">
        <div className="font-medium text-lg mb-2">Number of Payments made</div>
          <p className="text-green-700 text-3xl font-extrabold">3</p>
        </div>
      </div>

    </div>
    </>
  )
}

export default AdminDashboard
