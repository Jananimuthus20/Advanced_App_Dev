import React, { useState } from 'react';
import toast,{Toaster} from 'react-hot-toast'

const UserEvents = () => {
    const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    submissionDate: '',
    eventDate: '',
    description: '',
    headcount: '',
    amount: ''
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBookNowClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log(formData);
    toast.success("Booking successfull")
    // Reset form data after submission
    setFormData({
      userName: '',
      submissionDate: '',
      eventDate: '',
      description: '',
      headcount: '',
      amount: ''
    });
    // Close the form after submission
    setShowForm(false);
  };
  return (
    <div>
         <div><Toaster/></div>
         {showForm && (
            <div>
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50"></div>
  <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
    <div className="bg-white rounded-lg p-8 w-[39vw] ">
      <h2 className="text-xl font-bold mb-4">Booking Form</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  User Name
                </label>
                <input
                  type="text"   
                  id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Submission Date
                </label>
                <input
                  type="date"
                  id="submissionDate"
                  name="submissionDate"
                  value={formData.submissionDate}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md "
                  required
                />
              </div>
              <div className="mb-4">
                <label  className="block text-sm font-medium text-gray-700">
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md "
                  required
                />
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md "
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Head Count
                </label>
                <input
                  type="number"   
                  id="headcount"
                  name="headcount"
                  value={formData.headcount}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md "
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <input
                  type="number"   
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md"
                  required
                />
              </div>
              </div>
              
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Book
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      )}
      <br/>
      <h1 className='text-2xl text-center font-bold text-blue-800'>EVENT DETAILS</h1><br/>
        

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-black-400 ">
            <thead className="text-sm text-blue-800 uppercase bg-cyan-300 dark:text-indigo-950">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Event Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Event Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Participants
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Mode
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       1
                    </th>
                    <td scope="row" className="px-6 py-4">
                       Conference
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                        An insightful conference on AI and future techhnologies.
                    </td>
                    <td className="px-8 py-4">
                        100
                    </td>
                    <td className="px-6 py-4">
                        Offline
                    </td>
                    <td className="px-6 py-4">
                        $1999
                    </td>
                   
                    <td className="px-6 py-4">
                    <button
                  className="font-medium text-blue-600 hover:underline"
                  onClick={handleBookNowClick}
                >
                  Book Now
                </button>
                    </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       2
                    </th>
                    <td scope="row" className="px-6 py-4">
                       Product Launch
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                        A thrilling event to announce Zoho's new product/service. 
                    </td>
                    <td className="px-8 py-4">
                        500
                    </td>
                    <td className="px-6 py-4">
                        Offline
                    </td>
                    <td className="px-6 py-4">
                        $599
                    </td>
                   
                    <td className="px-6 py-4">
                    <button
                  className="font-medium text-blue-600 hover:underline"
                  onClick={handleBookNowClick}
                >
                  Book Now
                </button>
                    </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       3
                    </th>
                    <td scope="row" className="px-6 py-4">
                       Shareholder Meeting
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                        A inspiring meeting to discuss the future of Meta.
                    </td>
                    <td className="px-8 py-4">
                        50
                    </td>
                    <td className="px-6 py-4">
                        Hybrid
                    </td>
                    <td className="px-6 py-4">
                        $199
                    </td>
                    
                    <td className="px-6 py-4">
                        <button
                  className="font-medium text-blue-600 hover:underline"
                  onClick={handleBookNowClick}
                >
                  Book Now
                </button>
                    </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       4
                    </th>
                    <td scope="row" className="px-6 py-4">
                    Company milestones
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                        An Exciting celeboratory event to celebrate a company's milestones.
                    </td>
                    <td className="px-8 py-4">
                        700
                    </td>
                    <td className="px-6 py-4">
                        Hybrid
                    </td>
                    <td className="px-6 py-4">
                        $399
                    </td>
                    
                    <td className="px-6 py-4">
                    <button
                  className="font-medium text-blue-600 hover:underline"
                  onClick={handleBookNowClick}
                >
                  Book Now
                </button>
                    </td>
                </tr>
                <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       5
                    </th>
                    <td scope="row" className="px-6 py-4">
                        Trade shows
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                        An event to connect companies with potential customers.
                    </td>
                    <td className="px-8 py-4">
                        1000
                    </td>
                    <td className="px-6 py-4">
                        Offline
                    </td>
                    <td className="px-6 py-4">
                        $999
                    </td>
              
                    <td className="px-6 py-4">
                    <button
                  className="font-medium text-blue-600 hover:underline"
                  onClick={handleBookNowClick}
                >
                  Book Now
                </button>
                    </td>
                </tr>
                </tbody>
        </table>
    </div>
    
    </div>
  )
}

export default UserEvents
