import React, { useState } from 'react';

const AdminAllEvents = () => {
    const [showEditForm, setShowEditForm] = useState(false);
  const [editFormData, setEditFormData] = useState({
    eventId: '',
    eventType: '',
    description: '',
    participantCount: '',
    eventMode: '',
    charges: ''
  });
  const handleEditClick = (event) => {
    // Retrieve event data from the row and set it to the edit form data state
    const eventData = {
      eventId: event.target.dataset.eventId,
      eventType: event.target.dataset.eventType,
      description: event.target.dataset.description,
      participantCount: event.target.dataset.participantCount,
      eventMode: event.target.dataset.eventMode,
      charges: event.target.dataset.charges
    };
    setEditFormData(eventData);
    setShowEditForm(true);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log(editFormData);
    // Close the edit form after submission
    setShowEditForm(false);
    // Optionally, reset edit form data after submission
    setEditFormData({
      eventId: '',
      eventType: '',
      description: '',
      participantCount: '',
      eventMode: '',
      charges: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };

  return (
    <div className='mt-4'>
       {/* Edit Form */}
       {showEditForm && (
         <div>
         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50"></div>
<div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
 <div className="bg-white rounded-lg p-8 w-[39vw] ">
            <h2 className="text-xl font-bold mb-4">Edit Event</h2>
            <form onSubmit={handleEditFormSubmit}>
              {/* Event Type */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Event Type</label>
                <input
                  type="text"
                  name="eventType"
                  value={editFormData.eventType}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md"
                  required
                />
              </div>
              {/* Description */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={editFormData.description}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md"
                  required
                />
              </div>
              {/* Participant Count */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Participant Count</label>
                <input
                  type="number"
                  name="participantCount"
                  value={editFormData.participantCount}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md"
                  required
                />
              </div>
              {/* Event Mode */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Event Mode</label>
                <select
                  name="eventMode"
                  value={editFormData.eventMode}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md"
                  required
                >
                  <option value="Offline">Offline</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              {/* Charges */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Charges</label>
                <input
                  type="number"
                  name="charges"
                  value={editFormData.charges}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => setShowEditForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      )}
      {/* Event Table */}
      <h1 className='text-2xl text-center font-bold text-blue-800'>All the Events till date</h1><br/>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black">
        <thead class="text-xs text-white uppercase bg-sky-500 dark:text-white">
            <tr>
                <th scope="col" class="px-4 py-3">
                    Event ID
                </th>
                <th scope="col" class="px-3 py-3">
                    Event Type
                </th>
                <th scope="col" class="px-5 py-3">
                    Description
                </th>
                <th scope="col" class="px-0 py-3">
                    Participant Count
                </th>
                <th scope="col" class="px-1 py-3">
                    Event Mode
                </th>
                <th scope="col" class="px-1 py-3">
                    Charges
                </th>
                <th scope="col" class="px-3 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-cyan-100 border-b border-blue-400">
                <th scope="row" class="px-4 py-3 font-medium text-black">
                    1
                </th>
                <th scope="row" class="px-3 py-3 font-medium text-black">
                    Conference
                </th>
                <td class="px-1 py-3">
                   An insightful Conference on AI and future technologies
                </td>
                <td class="px-2 py-3">
                    100
                </td>
                <td class="px-2 py-3">
                    Offline
                </td>
                <td class="px-2 py-3">
                    $1999
                </td>
                <td className="px-1 py-3 flex gap-2">
                <button
                  className="font-medium text-white bg-green-500 px-3 py-1 rounded-md"
                  onClick={handleEditClick}
                  data-event-id="1"
                  data-event-type="Conference"
                  data-description="An insightful Conference on AI and future technologies"
                  data-participant-count="100"
                  data-event-mode="Offline"
                  data-charges="1999"
                >
                  Edit
                </button>
                    <button className="font-medium text-white bg-red-600 px-1 py-1 rounded-md">Delete</button>
                </td>
            </tr>
            <tr class="bg-cyan-100 border-b border-blue-400">
                <th scope="row" class="px-4 py-3 font-medium text-black">
                    2
                </th>
                <th scope="row" class="px-2 py-3 font-medium text-black">
                    Product Launch
                </th>
                <td class="px-2 py-3">
                    A thrilling event to launch Zoho's new product
                </td>
                <td class="px-2 py-3">
                    500
                </td>
                <td class="px-2 py-3">
                    Offline
                </td>
                <td class="px-2 py-3">
                    $599
                </td>
                <td className="px-1 py-3 flex gap-2">
                <button
                  className="font-medium text-white bg-green-500 px-3 py-1 rounded-md"
                  onClick={handleEditClick}
                  data-event-id="2"
                  data-event-type="Product Launch"
                  data-description="A thrilling event to launch Zoho's new product"
                  data-participant-count="500"
                  data-event-mode="Offline"
                  data-charges="599"
                >
                  Edit
                </button>
                    <button className="font-medium text-white bg-red-600 px-1 py-1 rounded-md">Delete</button>
                </td>
            </tr>
            <tr class="bg-cyan-100 border-b border-blue-400">
                <th scope="row" class="px-4 py-3 font-medium text-black">
                    3
                </th>
                <th scope="row" class="px-2 py-3 font-medium text-black">
                    Shareholders Meeting
                </th>
                <td class="px-2 py-3">
                    An inspiring meeting to discuss the future of Meta
                </td>
                <td class="px-2 py-3">
                    50
                </td>
                <td class="px-2 py-3">
                    Hybrid
                </td>
                <td class="px-2 py-3">
                    $199
                </td>
                <td className="px-1 py-3 flex gap-2">
                <button
                  className="font-medium text-white bg-green-500 px-3 py-1 rounded-md"
                  onClick={handleEditClick}
                  data-event-id="3"
                  data-event-type="Shareholders Meeting"
                  data-description="An inspiring meeting to discuss the future of Meta"
                  data-participant-count="50"
                  data-event-mode="Hybrid"
                  data-charges="199"
                >
                  Edit
                </button>
                    <button className="font-medium text-white bg-red-600 px-1 py-1 rounded-md">Delete</button>
                </td>
            </tr>
            <tr class="bg-cyan-100 border-b border-blue-400">
                <th scope="row" class="px-4 py-3 font-medium text-black">
                    4
                </th>
                <th scope="row" class="px-2 py-3 font-medium text-black">
                    Company Milestones
                </th>
                <td class="px-2 py-3">
                    An exciting event to celebrate company's Milestones
                </td>
                <td class="px-2 py-3">
                    700
                </td>
                <td class="px-2 py-3">
                   Hybrid
                </td>
                <td class="px-2 py-3">
                   $399
                </td>
                <td className="px-1 py-3 flex gap-2">
                <button
                  className="font-medium text-white bg-green-500 px-3 py-1 rounded-md"
                  onClick={handleEditClick}
                  data-event-id="4"
                  data-event-type=" Company Milestones"
                  data-description="An exciting event to celebrate company's Milestones"
                  data-participant-count="700"
                  data-event-mode="Hybrid"
                  data-charges="399"
                >
                  Edit
                </button>
                    <button className="font-medium text-white bg-red-600 px-1 py-1 rounded-md">Delete</button>
                </td>
            </tr>
            <tr class="bg-cyan-100 border-b border-blue-400">
                <th scope="row" class="px-4 py-3 font-medium text-black">
                   5
                </th>
                <th scope="row" class="px-2 py-3 font-medium text-black">
                   Trade shows
                </th>
                <td class="px-2 py-3">
                    An event to connect companies with potential customers
                </td>
                <td class="px-2 py-3">
                    1000
                </td>
                <td class="px-2 py-3">
                    Offline
                </td>
                <td class="px-2 py-3">
                    $999
                </td>
                <td className="px-1 py-3 flex gap-2">
                <button
                  className="font-medium text-white bg-green-500 px-3 py-1 rounded-md"
                  onClick={handleEditClick}
                  data-event-id="5"
                  data-event-type=" Trade shows"
                  data-description=" An event to connect companies with potential customers"
                  data-participant-count="1000"
                  data-event-mode="Offline"
                  data-charges="999"
                >
                  Edit
                </button>
                    <button className="font-medium text-white bg-red-600 px-1 py-1 rounded-md">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default AdminAllEvents
