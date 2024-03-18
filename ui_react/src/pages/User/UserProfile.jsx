import React from 'react'
import admin_icon from '../../assets/Images/admin_icon.gif'

const UserProfile = () => {
    const userData = {
        name: "User1",
        email: localStorage.getItem('email'), // Fetch email from localStorage
        phoneNumber: "123-456-7890",
        password:"********",
    };
  return (
    <>
    <br/>
            <div className="flex items-center justify-center h-[80%]">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pb-10">
                        <img src={admin_icon} alt="Admin" />
                        <div className="mb-6 mt-4 ml-2">
                            <h2 className="text-lg font-semibold mr-15">Account</h2>
                            <div className="flex mb-2">
                                <label className="block mb-0 mr-3">Email:</label>
                                <input
                                    type="text"
                                    value={userData.email}
                                    readOnly
                                    className="border border-gray-300 rounded-md px-3 py-1 ml-2"
                                />
                            </div>
                        </div>
                        <div className="mb-6 mt-0 ml-0">
                            <h2 className="text-lg font-semibold mr-5">Personal Info</h2>
                            <div className="flex mb-2">
                                <label className="block mb-1">Name:</label>
                                <input
                                    type="text"
                                    value={userData.name}
                                    readOnly
                                    className="border border-gray-300 rounded-md px-3 py-1 ml-2"
                                />
                            </div>
                            <div className="flex mb-2">
                                <label className="block mb-1">Phone:</label>
                                <input
                                    type="text"
                                    value={userData.phoneNumber}
                                    readOnly
                                    className="border border-gray-300 rounded-md px-3 py-1 ml-2"
                                />
                            </div>
                        </div>
                        <div className="mb-6 mt-1 ml-2">
                            <h2 className="text-lg font-semibold ">Password</h2>
                            <div className="flex mb-2">
                                <label className="block mb-1">Password:</label>
                                <input
                                    type="text"
                                    value={userData.password}
                                    readOnly
                                    className="border border-gray-300 rounded-md px-3 py-1 ml-2"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mt-4 mr-4">Update Password</button>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mt-4">Edit Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default UserProfile
