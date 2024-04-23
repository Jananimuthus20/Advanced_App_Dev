import React from 'react'

const AdminAllUsers = () => {
  return (
    <div>
      <br/>      
      <h1 className='text-2xl text-center font-bold text-blue-800'>All the Users of Corpify</h1><br/>
       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-black-400 ">
            <thead className="text-sm text-white uppercase bg-sky-500 dark:bg-blue-600 dark:text-white">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        User ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        User Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Password
                    </th>
                    
                    
                </tr>
            </thead>
            <tbody>
                <tr className="bg-cyan-100 border-b border-blue-400">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       1
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       Janani
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       janani@gmail.com
                    </th>
                    <td scope="row" className="px-6 py-4">
                       8270599889
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                       ********
                    </td>
                    
                </tr>
                <tr className="bg-cyan-100 border-b border-blue-400">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       2
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       Deeksha
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       deeksha@gmail.com
                    </th>
                    <td scope="row" className="px-6 py-4">
                       9270599889
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                       ********
                    </td>                    
                </tr>
                <tr className="bg-cyan-100 border-b border-blue-400">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       3
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       Deepak
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       deepak@gmail.com
                    </th>
                    <td scope="row" className="px-6 py-4">
                       7270599889
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                       ********
                    </td>
                </tr>
                <tr className="bg-cyan-100 border-b border-blue-400">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       4
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       Pavi
                    </th>
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                       pavi@gmail.com
                    </th>
                    <td scope="row" className="px-6 py-4">
                       6270599889
                    </td>
                    <td scope="row" className="px-6 py-4 ">
                       ********
                    </td>
                </tr>
                
                
                
                </tbody>
        </table>
    </div>
    
    </div>
  )
}

export default AdminAllUsers
