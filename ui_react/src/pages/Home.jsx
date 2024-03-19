import React from 'react'
import homebg from '../assets/Images/homebg.jpeg'
import home_vectorimg from '../assets/Images/home_vectorimg.png'
import homearrow_arrow from '../assets/Images/homeright_arrow.gif'
import { Link } from 'react-router-dom';
import homepoints_icon from '../assets/Images/homepoints_icon.png'
import working_icon from '../assets/Images/working_icon.png'

const Home = () => {
  return (
    <div>
    <div
    className=" bg-cover h-screen flex flex-row text-white"
    style={{ backgroundImage: `url(${homebg})` }}
  >
     {/* Left side content */}
     <div className="flex flex-col justify-center items-start p-8 flex-1 mb-12 ml-4">
        <h1 className="text-4xl md:text-5xl font-medium mb-6 text-yellow-100 italic">Simplify Events with Corpify</h1>
        <p className="text-lg md:text-xl mb-8">Redefining event planning to deliver an effortless and elevated experience, revolutionizing the way events are organized and executed.</p>
        <div className="flex items-center ml-14">
        <img src={homearrow_arrow} alt="Arrow" className=" ml-10 w-10 h-10 mr-8 " />
        <Link to="/register" className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded mr-4 transition-colors duration-300 hover:bg-blue-100 hover:text-black">
              Sign Up
            </Link>
            <Link to="/login" className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-100 hover:text-black">
              Login
            </Link>
        </div>
      </div>
      {/* Right side vector image */}
      <div className="hidden md:block w-[40%]">
        <img src={home_vectorimg} alt="Vector Image" className="w-[80%] h-[80%] mt-6" />
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
        <div className="bg-violet-200 text-grey p-8 rounded-lg w-72 transform hover:scale-105 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4">1</h2>
          <h2 className="text-xl font-bold mb-4 text-violet-900">Meeting Room Booking</h2>
          <p className="text-center"> Effortlessly book meeting rooms for your events.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-green-200 text-grey p-8 rounded-lg w-72 transform hover:scale-105 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4">2</h2>
          <h2 className="text-xl font-bold mb-4  text-green-900">Event Management</h2>
          <p className="text-center">Manage your events seamlessly with Corpify.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-yellow-200 text-grey p-8 rounded-lg w-72 transform hover:scale-105 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4">3</h2>
          <h2 className="text-xl font-bold mb-4  text-yellow-700">Guest Registration</h2>
          <p className="text-center">Streamline guest registration process for your events.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-pink-200 text-grey p-8 rounded-lg w-72 transform hover:scale-105 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4">4</h2>
          <h2 className="text-xl font-bold mb-4  text-pink-800">Offline & Hybrid Events</h2>
          <p className="text-center">Organize offline and hybrid events with ease using Corpify.</p>
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
        <h3 className="text-2xl font-semibold mb-2">Step 3: proceed with booking</h3>
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
