import React, { useState } from 'react';
import admin_icon from '../../assets/Images/admin_icon.gif';

const UserProfile = () => {
    // State variables
    const [showEditForm, setShowEditForm] = useState(false);
    const [editedUserData, setEditedUserData] = useState({
        name: "User1",
        email: localStorage.getItem('email'), // Fetch email from localStorage
        phoneNumber: "123-456-7890",
        password: "********",
    });

    // Function to handle opening the edit form
    const handleEditButtonClick = () => {
        setShowEditForm(true);
    };

    // Function to handle closing the edit form
    const handleCloseForm = () => {
        setShowEditForm(false);
    };

    // Function to handle updating user data
    const handleUpdateUserData = (event) => {
        event.preventDefault();
        // Prepare updated user data object
        const updatedUserData = {
            ...editedUserData,
            name: event.target.name.value,
            phoneNumber: event.target.phoneNumber.value,
            password: event.target.password.value,
        };
        setEditedUserData(updatedUserData);
        // You can perform additional actions like updating the backend here
        setShowEditForm(false); // Close the edit form after updating
    };

    return (
        <>
            <br />
            <div className="flex items-center justify-center h-[80%]">
                <div className=" border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-white p-8 w-[500px]">
                    <div className="flex flex-col items-center pb-10">
                        <img src={admin_icon} alt="Admin" />
                        <div className="mb-6 mt-4 ml-2">
                            <h2 className="text-lg font-semibold mr-15">Account</h2>
                            <div className="flex mb-2">
                                <label className="block mb-0 mr-3">Email:</label>
                                <input
                                    type="text"
                                    value={editedUserData.email}
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
                                    value={editedUserData.name}
                                    readOnly
                                    className="border border-gray-300 rounded-md px-3 py-1 ml-2"
                                />
                            </div>
                            <div className="flex mb-2">
                                <label className="block mb-1">Phone:</label>
                                <input
                                    type="text"
                                    value={editedUserData.phoneNumber}
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
                                    value={editedUserData.password}
                                    readOnly
                                    className="border border-gray-300 rounded-md px-3 py-1 ml-2"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button className="bg-blue-700 hover:bg-blue-600 mb-8 text-white font-semibold px-4 py-2 rounded mt-4" onClick={handleEditButtonClick}>Edit Details</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pop-up form */}
            {showEditForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg w-[500px]">
                        <h2 className="text-lg font-semibold mb-4">Edit Details</h2>
                        <form onSubmit={handleUpdateUserData}>
                        <div className="mb-4">
                                <label className="block mb-1">Email:</label>
                                <input
                                    type="text"
                                    name="Email"
                                    defaultValue={editedUserData.email}
                                    className="border border-gray-300 rounded-md px-3 py-1 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={editedUserData.name}
                                    className="border border-gray-300 rounded-md px-3 py-1 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Phone:</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    defaultValue={editedUserData.phoneNumber}
                                    className="border border-gray-300 rounded-md px-3 py-1 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    defaultValue={editedUserData.password}
                                    className="border border-gray-300 rounded-md px-3 py-1 w-full"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded mr-2" onClick={handleCloseForm}>Cancel</button>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserProfile;