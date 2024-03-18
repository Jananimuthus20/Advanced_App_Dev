import React from 'react'
import admin_icon from '../../assets/Images/admin_icon.gif'

const AdminSettings = () => {
   // Dummy admin data
   const adminData = {
    name: "Admin1",
    email: "admin@gmail.com",
    phoneNumber: "123-456-7890",
    password:"********",
  };
  
  return (
    <>
       <h1 className="text-center mt-3">Admin Settings</h1>
      <div className="flex items-center justify-center h-[80%]">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img src={admin_icon} alt="Admin" />
          <div className="mb-6 mt-4 ml-2">
            <h2 className="text-lg font-semibold justify-start items-start ">Admin Details</h2>
            <div className="flex mb-2">
              <label className="block mb-1">Name:</label>
              <input
                type="text"
                value={adminData.name}
                readOnly
                className="border border-gray-300 rounded-md px-3 py-1 ml-2"
              />
            </div>

            <div className="flex mb-2">
              <label className="block mb-2">Email:&nbsp;</label>
              <input
                type="text"
                value={adminData.email}
                readOnly
                className="border border-gray-300 rounded-md px-3 py-1 ml-2"
              />
            </div>

            <div className="flex mb-2">
              <label className="block mb-1">Phone:</label>
              <input
                type="text"
                value={adminData.phoneNumber}
                readOnly
                className="border border-gray-300 rounded-md px-3 py-1 ml-2"
              />
            </div>
          </div>
          <div className="mb-6 mt-4">
            <h2 className="text-lg font-semibold mb-2 ml-9">Password Details</h2>
            <div className="flex mb-2 ml-3">
              <label className="block mb-2 ml-6">Password:&nbsp;</label>
              <input
                type="text"
                value={adminData.password}
                readOnly
                className="border border-gray-300 rounded-md px-3 py-1 ml-2"
              />
            </div>
            </div>
          
            <div className="flex justify-between">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mt-4 mr-4">Update Password</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mt-4">Edit details</button>
          </div>
        </div>
      </div>
    
    </div>
    </>
  )
}

export default AdminSettings
