import React from 'react'

const AdminBookings = () => {
  return (
    <div>
      Bookings made are listed below

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-black">
                <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
                    <tr>
                        <th scope="col" className="px-2 py-3">
                            Booking ID
                        </th>
                        <th scope="col" className="px-2 py-3">
                            Organizer ID
                        </th>
                        <th scope="col" className="px-5 py-3">
                              Name
                        </th>
                        <th scope="col" className="px-5 py-3">
                            Submission Date
                        </th>
                        <th scope="col" className="px-8 py-3">
                            Event Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Booking Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Event Mode
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Head Count
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Amount
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* Sample data rows */}
                    <tr className="bg-white-500 border-b border-blue-400">
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">Janani</td>
                        <td className="px-6 py-4">2024-03-22</td>
                        <td className="px-6 py-4">2024-04-15</td>
                        <td className="px-6 py-4">A thrilling event to launch Zoho's new product</td>
                        <td className="px-6 py-4">
                            <select className="block border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                            </select>
                        </td>
                        <td className="px-6 py-4">Offline</td>
                        <td className="px-6 py-4">80</td>
                        <td className="px-6 py-4">$599.00</td>
                    </tr>
                    {/* Add more rows with similar structure */}
                    <tr className="bg-white-500 border-b border-blue-400">
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">3</td>
                        <td className="px-6 py-4">Deeksha</td>
                        <td className="px-6 py-4">2024-04-12</td>
                        <td className="px-6 py-4">2024-06-30</td>
                        <td className="px-6 py-4">An insightful Conference on AI and future technologies</td>
                        <td className="px-6 py-4">
                            <select className="block border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                            </select>
                        </td>
                        <td className="px-6 py-4">Offline</td>
                        <td className="px-6 py-4">40</td>
                        <td className="px-6 py-4">$1999.00</td>
                    </tr>
                    <tr className="bg-white-500 border-b border-blue-400">
                        <td className="px-6 py-4">3</td>
                        <td className="px-6 py-4">5</td>
                        <td className="px-6 py-4">Deepak</td>
                        <td className="px-6 py-4">2024-05-17</td>
                        <td className="px-6 py-4">2024-08-25</td>
                        <td className="px-6 py-4">An inspiring meeting to discuss the future of Meta</td>
                        <td className="px-6 py-4">
                            <select className="block border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="pending">Confirmed</option>
                                <option value="confirmed">Pending</option>
                            </select>
                        </td>
                        <td className="px-6 py-4">Hybrid</td>
                        <td className="px-6 py-4">30</td>
                        <td className="px-6 py-4">$199.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AdminBookings
