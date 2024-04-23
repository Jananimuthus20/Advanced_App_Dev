import React from 'react'

const AdminAllPayments = () => {
  return (
    <div>
      <>
      <br/>
      <h1 className='text-2xl text-center font-bold text-blue-800'>All the Payments made by the users</h1><br/>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-black-400 ">
            <thead className="text-sm text-white uppercase bg-sky-500 dark:bg-blue-600 dark:text-white">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Payment Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Organizer Id
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Organizer name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Amount Paid
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Payment Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Mode of Payment
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                <tr className=" border-b border-blue-400 bg-cyan-100">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       1
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       2
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       Janani
                    </th>
                    <td scope="row" className="px-6 py-4">
                       Paid
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                       $2999
                    </td>
                    <td className="px-6 py-4">
                        10/02/2024
                    </td>
                    <td className="px-6 py-4">
                        Credit
                    </td>
                </tr>
                <tr className="bg-cyan-100 border-b border-blue-400">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       2
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       3
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       Deeksha
                    </th>
                    <td scope="row" className="px-6 py-4">
                       Paid
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                       $199
                    </td>
                    <td className="px-6 py-4">
                        19/02/2024
                    </td>
                    <td className="px-6 py-4">
                        Online Banking
                    </td>
                </tr>
                <tr className="bg-cyan-100 border-b border-blue-400">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       3
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       5
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       Deepak
                    </th>
                    <td scope="row" className="px-6 py-4">
                       Paid
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                       $499
                    </td>
                    <td className="px-6 py-4">
                        22/03/2024
                    </td>
                    <td className="px-6 py-4">
                        Cash
                    </td>
                </tr>
                <tr className="bg-cyan-100 border-b border-blue-400">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       4
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       7
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       Pavi
                    </th>
                    <td scope="row" className="px-6 py-4">
                       Paid
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                       $299
                    </td>
                    <td className="px-6 py-4">
                        02/02/2024
                    </td>
                    <td className="px-6 py-4">
                        Credit
                    </td>
                </tr>
                </tbody>
        </table>
    </div>
    
        </>
    </div>
  )
}

export default AdminAllPayments
