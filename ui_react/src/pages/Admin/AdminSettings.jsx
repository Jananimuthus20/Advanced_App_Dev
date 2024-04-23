import React, { useState } from 'react';
import admin_icon from '../../assets/Images/admin_icon.gif'

const AdminSettings = () => {
  const [adminData, setAdminData] = useState({
    name: "Admin1",
    email: "admin@gmail.com",
    phoneNumber: "123-456-7890",
    password: "********",
  });
  // State variable to control the visibility of the edit form
  const [showEditForm, setShowEditForm] = useState(false);

  // Function to handle opening the edit form
  const handleEditButtonClick = () => {
    setShowEditForm(true);
  };

  // Function to handle closing the edit form
  const handleCloseForm = () => {
    setShowEditForm(false);
  };

  // Function to handle updating admin data
  const handleUpdateAdminData = (event) => {
    event.preventDefault();
    // Prepare updated admin data object
    const updatedAdminData = {
      ...adminData,
      name: event.target.name.value,
      email: event.target.email.value,
      phoneNumber: event.target.phoneNumber.value,
      password: event.target.password.value,
    };
    setAdminData(updatedAdminData); // Update admin data state
    // You can perform additional actions like updating the backend here
    setShowEditForm(false); // Close the edit form after updating
  };
  
  return (
    <>
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
                  name="name"
                  defaultValue={adminData.name}
                  readOnly={!showEditForm}
                  className="border border-gray-300 rounded-md px-3 py-1 ml-2"
                />
            </div>

            <div className="flex mb-2">
              <label className="block mb-2">Email:&nbsp;</label>
              <input
                  type="text"
                  name="email"
                  defaultValue={adminData.email}
                  readOnly={!showEditForm}
                  className="border border-gray-300 rounded-md px-3 py-1 ml-2"
                />
            </div>

            <div className="flex mb-2">
              <label className="block mb-1">Phone:</label>
              <input
                  type="text"
                  name="phoneNumber"
                  defaultValue={adminData.phoneNumber}
                  readOnly={!showEditForm}
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
                  name="password"
                  defaultValue={adminData.password}
                  readOnly={!showEditForm}
                  className="border border-gray-300 rounded-md px-3 py-1 ml-2"
                />
            </div>
            </div>
          
            <div className="flex justify-between">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded mt-4 mr-4" onClick={handleEditButtonClick}>
                Edit details
              </button>
          </div>
        </div>
      </div>
    
    </div>
     {/* Pop-up form */}
     {showEditForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg w-[500px]">
            <h2 className="text-lg font-semibold mb-4">Edit Admin Details</h2>
            <form onSubmit={handleUpdateAdminData}>
              <div className="mb-4">
                <label className="block mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={adminData.name}
                  className="border border-gray-300 rounded-md px-3 py-1 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Email:</label>
                <input
                  type="text"
                  name="email"
                  defaultValue={adminData.email}
                  className="border border-gray-300 rounded-md px-3 py-1 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Phone:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  defaultValue={adminData.phoneNumber}
                  className="border border-gray-300 rounded-md px-3 py-1 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Password:</label>
                <input
                  type="password"
                  name="password"
                  defaultValue={adminData.password}
                  className="border border-gray-300 rounded-md px-3 py-1 w-full"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded mr-2" onClick={handleCloseForm}>
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default AdminSettings
