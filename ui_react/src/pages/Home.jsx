import React from 'react'
import homebg from '../assets/Images/homebg.jpeg'
import home_vectorimg from '../assets/Images/home_vectorimg.png'

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
        <div className="flex">
        <button className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded mr-4 transition-colors duration-300 hover:bg-blue-100 hover:text-black">
  Sign Up
</button>
<button className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-100 hover:text-black">
  Login
</button>
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
<br/><br/> <br/><br/><br/><br/>
      </div>
  )
}

export default Home
