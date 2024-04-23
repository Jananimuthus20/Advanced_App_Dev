import React from 'react'
import home_side from '../assets/Images/home_side.png'
import guest from '../assets/Images/guest.png'
import blu_bg from '../assets/Images/blu_bg.png'
import home_vector from '../assets/Images/home_vector.png'
import homearrow_arrow from '../assets/Images/homeright_arrow.gif'
import { Link } from 'react-router-dom';
import meeting from '../assets/Images/meeting.png'
import hybrid from '../assets/Images/hybrid.png'
import working_icon from '../assets/Images/working_icon.png'

const Home = () => {
  return (
    <div>
    <div
    className=" bg-cover h-screen flex flex-row text-yellow-50 "
    style={{ backgroundImage: `url(${blu_bg})` }}
  >
     {/* Left side content */}
     <div className="flex flex-col justify-center items-start p-8 flex-1 mb-12 ml-9">
        <h1 className="text-2xl md:text-4xl text font-bold mb-6 text-blue-700 bold">SIMPLIFY EVENTS WITH CORPIFY </h1>
        <p className="text-xl md:text-2xl mb-8 text-yellow-50 bold">Redefining event planning to deliver an effortless and elevated experience, revolutionizing the way events are organized and executed.</p>
        <br/>
        <div className="flex items-center">
        <img src={homearrow_arrow} alt="Arrow" className=" ml-2 w-10 h-10 mr-8 " />
        <Link to="/register" className="bg-transparent border border-white text-yellow-50 -bold py-2 px-4 rounded mr-4 transition-colors duration-300 hover:bg-blue-100 hover:text-black">
              Sign Up
            </Link>
            <Link to="/login" className="bg-transparent border border-white text-yellow-50 -bold py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-100 hover:text-black">
              Login
            </Link>
        </div>
      </div>
      {/* Right side vector image */}
      <div className="hidden md:block w-[40%] mt-32 ml-9 mb-3"> 
  <img src={home_vector} alt="Vector Image" className="w-[80%] h-[75%] mr-1"/>
</div>
      </div>
      <br/><br/>
      <div className="text-white text-center mb-8">
        <h2 className="text-3xl font-semibold">Key Features of Corpify</h2>
      </div>
      <br/>
      {/* Cards section */}
      <div className="flex justify-around">
        {/* Card 1 */}
        <div className="bg-sky-500 text-grey p-8 rounded-lg w-72 transform hover:scale-105 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center">
        <img src={meeting} alt="Image 1" className="w-25 h-23 mt-8 "/><br/>
          <h2 className="text-xl font-bold mb-4 text-slate-100">Meeting Room Booking</h2>
          <p className="text-center font-semibold"> Effortlessly book meeting rooms for your events.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-sky-500 text-grey p-8 rounded-lg w-72 transform hover:scale-105 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center">
        <img src={home_side} alt="Image 1" className="w-25 h-23 mb-4"/>
          <h2 className="text-xl font-bold mb-4 text-slate-100">Event Management</h2>
          <p className="text-center font-semibold">Manage your events seamlessly with Corpify.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-sky-500 text-grey p-8 rounded-lg w-72 transform hover:scale-105 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center">
        <img src={guest} alt="Image 1" className="w-27 h-23 "/>
          <h2 className="text-xl font-bold mb-4  text-slate-100">Guest Registration</h2>
          <p className="text-center font-semibold">Streamline guest registration process for your events.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-sky-500 text-grey p-8 rounded-lg w-72 transform hover:scale-105 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center">
        <img src={hybrid} alt="Image 1" className="w-25 h-23 mb-4"/>
          <h2 className="text-xl font-bold mb-4  text-slate-100">Offline & Hybrid Events</h2>
          <p className="text-center font-semibold">Organize offline and hybrid events with ease using Corpify.</p>
        </div>
      </div>
<br/><br/> 

 {/* How It Works Section */}
    <h2 className="text-3xl font-semibold text-center">How Corpify Works</h2>
    <br/>
    <div className="bg-blue-200 py-12">
<div className="flex items-center justify-center my-4">
  <div className="flex items-center  mr-10 mt-[-90px]">
    <img src={working_icon} alt="Working Icon" className="h-[80%] w-[80%] mb-12" />
  </div>
  <div className="grid grid-cols-1 gap-6 w-[40%] max-w-6xl mt-4">
    {/* Step 1: Sign Up */}
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">Step 1: Login/Sign Up</h3>
        <p>Create an account to get started.</p>
      </div>
    </div>
    {/* Step 2: Create Event */}
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">Step 2: Choose an Event</h3>
        <p>Start choosing a suitable event.</p>
      </div>
    </div>
    {/* Step 3: Invite Guests */}
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">Step 3: Proceed with Booking</h3>
        <p>Book your slots for conducting your meet</p>
      </div>
    </div>
    {/* Step 4: Manage Event */}
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">Step 4: Confirm slot</h3>
        <p>Confirm your booking by proceeding with the payment</p>
      </div>
    </div>
  </div>
</div>
      <br/><br/><br/>
    </div>
    <br/><br/><br/>
    </div>
    
  )
}

export default Home
