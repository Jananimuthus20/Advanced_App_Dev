import React from 'react'
import event_icon from '../../assets/Images/event_icon.gif'
import userevent_icon from '../../assets/Images/userevent_icon.gif'
import booking_icon from '../../assets/Images/booking_icon.png'
import payment_icon from '../../assets/Images/payment_icon.gif'

const UserDashboard = () => {
  const userEmail = localStorage.getItem('email');
  return (
    <div className="grid grid-cols-4 gap-8 mx-auto max-w-7xl">
      <br/>
      <div className="col-span-4 text-center">
         {userEmail && (
           <p className="text-lg font-bold text-gray-600">
             Welcome back, {userEmail}!<br/><br/>
              Get ready to manage your bookings, payments, and events with ease. 
            </p>
          )}
      </div>

    {/* First Card */}
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="flex items-center justify-center">
        <img className="w-[17%]" src={event_icon} alt="event" />
      </div>
      <div className="px-6 py-4 text-center">
        <div className="font-medium text-lg mb-2">Number of Bookings</div>
        <p className="text-blue-700 text-3xl font-extrabold">5</p>
      </div>
    </div>
    {/* Second Card */}
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="flex items-center justify-center">
        <img className="w-[17%]" src={booking_icon} alt="event" />
      </div>
      <div className="px-6 py-4 text-center">
        <div className="font-medium text-lg mb-2">Bookings confirmed</div>
        <p className="text-orange-700 text-3xl font-extrabold">10</p>
      </div>
    </div>
    {/* Third Card */}
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="flex items-center justify-center">
        <img className="w-[17%]" src={payment_icon} alt="event" />
      </div>
      <div className="px-6 py-4 text-center">
        <div className="font-medium text-lg mb-2">Number of Payments</div>
        <p className="text-yellow-500 text-3xl font-extrabold">3</p>
      </div>
    </div>
    {/* Fourth Card */}
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="flex items-center justify-center">
        <img className="w-[17%]" src={userevent_icon} alt="event" />
      </div>
      <div className="px-6 py-4 text-center">
        <div className="font-medium text-lg mb-2">Total events</div>
        <p className="text-green-700 text-3xl font-extrabold">3</p>
      </div>
    </div>
  </div>
    
  )
}

export default UserDashboard
