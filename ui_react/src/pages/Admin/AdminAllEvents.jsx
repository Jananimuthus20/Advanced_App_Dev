import React from 'react'

const AdminAllEvents = () => {
  return (
    <div className='mt-4'>
      
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black">
        <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Event Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Participant Count
                </th>
                <th scope="col" class="px-6 py-3">
                    Event Mode
                </th>
                <th scope="col" class="px-6 py-3">
                    Charges
                </th>
                <th scope="col" class="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white-500 border-b border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-black">
                    Conference
                </th>
                <td class="px-6 py-4">
                   An insightful Conference on AI and future technologies
                </td>
                <td class="px-6 py-4">
                    100
                </td>
                <td class="px-6 py-4">
                    Offline
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td className="px-6 py-4 flex gap-2">
                    <button className="font-medium text-white bg-green-500 px-3 py-1 rounded-md">Edit</button>
                    <button className="font-medium text-white bg-red-600 px-3 py-1 rounded-md">Delete</button>
                </td>
            </tr>
            <tr class="bg-white-500 border-b border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-black">
                    Product Launch
                </th>
                <td class="px-6 py-4">
                    A thrilling event to launch Zoho's new product
                </td>
                <td class="px-6 py-4">
                    500
                </td>
                <td class="px-6 py-4">
                    Offline
                </td>
                <td class="px-6 py-4">
                    $599
                </td>
                <td className="px-6 py-4 flex gap-2">
                    <button className="font-medium text-white bg-green-500 px-3 py-1 rounded-md">Edit</button>
                    <button className="font-medium text-white bg-red-600 px-3 py-1 rounded-md">Delete</button>
                </td>
            </tr>
            <tr class="bg-white-500 border-b border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-black">
                    Shareholders Meeting
                </th>
                <td class="px-6 py-4">
                    An inspiring meeting to discuss the future of Meta
                </td>
                <td class="px-6 py-4">
                    50
                </td>
                <td class="px-6 py-4">
                    Hybrid
                </td>
                <td class="px-6 py-4">
                    $199
                </td>
                <td className="px-6 py-4 flex gap-2">
                    <button className="font-medium text-white bg-green-500 px-3 py-1 rounded-md">Edit</button>
                    <button className="font-medium text-white bg-red-600 px-3 py-1 rounded-md">Delete</button>
                </td>
            </tr>
            <tr class="bg-white-500 border-b border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-black">
                    Company Milestones
                </th>
                <td class="px-6 py-4">
                    An exciting event to celebrate company's Milestones
                </td>
                <td class="px-6 py-4">
                    700
                </td>
                <td class="px-6 py-4">
                   Hybrid
                </td>
                <td class="px-6 py-4">
                   $399
                </td>
                <td className="px-6 py-4 flex gap-2">
                    <button className="font-medium text-white bg-green-500 px-3 py-1 rounded-md">Edit</button>
                    <button className="font-medium text-white bg-red-600 px-3 py-1 rounded-md">Delete</button>
                </td>
            </tr>
            <tr class="bg-white-500 border-b border-blue-400">
                <th scope="row" class="px-6 py-4 font-medium text-black">
                   Trade shows
                </th>
                <td class="px-6 py-4">
                    An event to connect companies with potential customers
                </td>
                <td class="px-6 py-4">
                    1000
                </td>
                <td class="px-6 py-4">
                    Offline
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td className="px-6 py-4 flex gap-2">
                    <button className="font-medium text-white bg-green-500 px-3 py-1 rounded-md">Edit</button>
                    <button className="font-medium text-white bg-red-600 px-3 py-1 rounded-md">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default AdminAllEvents
