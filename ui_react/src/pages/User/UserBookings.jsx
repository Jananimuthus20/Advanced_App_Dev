import React from 'react'

const UserBookings = () => {
  return (
    <div>     

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-black-400 ">
                <thead className="text-sm text-white uppercase bg-blue-500 dark:bg-blue-600 dark:text-white">
                    <tr>
                        <th scope="col" className="px-3 py-3">
                            Booking Id
                        </th>
                        <th scope="col" className="px-3 py-3">
                            Event Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Submission Date
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Event Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Participants Count
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Mode
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Booking status
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
                        <td scope="row" className="px-5 py-4">
                           Conference
                        </td>
                        <td scope="row" className="px-6 py-4 ">
                            An insightful conference on AI techhnologies.
                        </td>
                        <td scope="row" className="px-6 py-4 ">
                            23/02/2024
                        </td>
                        <td scope="row" className="px-4 py-4 ">
                            24/04/2024
                        </td>
                        <td className="px-6 py-4">
                            100
                        </td>
                        <td className="px-4 py-4">
                            Offline
                        </td>
                        <td className="px-6 py-4">
                            Confirmed
                        </td>
                        <td className="px-6 py-4">
                            $1999
                        </td>
                       
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 hover:underline">Pay </a>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                           2
                        </th>
                        <td scope="row" className="px-5 py-4">
                           Product Launch
                        </td>
                        <td scope="row" className="px-6 py-4 ">
                            A thrilling event to announce a new product. 
                        </td>
                        <td scope="row" className="px-6 py-4 ">
                            19/02/2024
                        </td>
                        <td scope="row" className="px-4 py-4 ">
                            09/04/2024
                        </td>
                        <td className="px-6 py-4">
                            500
                        </td>
                        <td className="px-4 py-4">
                            Offline
                        </td>
                        <td className="px-6 py-4">
                            Confirmed
                        </td>
                        <td className="px-6 py-4">
                            $599
                        </td>
                       
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 hover:underline">Pay </a>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                           3
                        </th>
                        <td scope="row" className="px-5 py-4">
                           Shareholder Meeting
                        </td>
                        <td scope="row" className="px-6 py-4 ">
                            A inspiring meeting to discuss the future of Meta.
                        </td>
                        <td scope="row" className="px-6 py-4 ">
                            13/02/2024
                        </td>
                        <td scope="row" className="px-4 py-4 ">
                            30/04/2024
                        </td>
                        <td className="px-6 py-4">
                            50
                        </td>
                        <td className="px-4 py-4">
                            Hybrid
                        </td>
                        <td className="px-6 py-4">
                            Pending
                        </td>
                        <td className="px-6 py-4">
                            $199
                        </td>
                        <td className="px-6 py-4  text-blue-500">--</td>
                        
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                           4
                        </th>
                        <td scope="row" className="px-5 py-4">
                        Company milestones
                        </td>
                        <td scope="row" className="px-6 py-4 ">
                            An Exciting event to celebrate company's milestones.
                        </td>
                        <td scope="row" className="px-6 py-4 ">
                            10/02/2024
                        </td>
                        <td scope="row" className="px-4 py-4 ">
                            04/04/2024
                        </td>
                        <td className="px-6 py-4">
                            700
                        </td>
                        <td className="px-4 py-4">
                            Hybrid
                        </td>
                        <td className="px-6 py-4">
                            Confirmed
                        </td>
                        <td className="px-6 py-4">
                            $399
                        </td>
                        
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 hover:underline">Pay</a>
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                           5
                        </th>
                        <td scope="row" className="px-5 py-4">
                            Trade shows
                        </td>
                        <td scope="row" className="px-6 py-4 ">
                            An event to connect companies with customers.
                        </td>
                        <td scope="row" className="px-6 py-4 ">
                            03/03/2024
                        </td>
                        <td scope="row" className="px-4 py-4 ">
                            06/04/2024
                        </td>
                        <td className="px-6 py-4">
                            1000
                        </td>
                        <td className="px-4 py-4">
                            Offline
                        </td>
                        <td className="px-6 py-4">
                            Pending
                        </td>
                        <td className="px-6 py-4">
                            $999
                        </td>
                  
                        <td className="px-6 py-4 text-blue-500">
                           --
                        </td>
                    </tr>
                    </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default UserBookings
