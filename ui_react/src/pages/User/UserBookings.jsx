import React, { useState } from 'react';

const UserBookings = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentMode, setPaymentMode] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(1);

  const handlePayNow = (bookingId) => {
    setShowPaymentForm(true);
    setSelectedBooking(bookingId);
  };

  const handleClosePaymentForm = () => {
    setShowPaymentForm(false);
    setSelectedBooking(null);
    setPaymentMode('');
    setAmount('');
  };

  const handlePaymentModeChange = (e) => {
    setPaymentMode(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    console.log('Payment Mode:', paymentMode);
    console.log('Amount:', amount);
    console.log('Selected Booking:', selectedBooking);
    // Placeholder for actual payment processing logic
    alert('Payment processing...');
    handleClosePaymentForm();
  };

  return (
    <div>     
        <br/>
         <h1 className='text-2xl text-center font-bold text-blue-800'>BOOKING DETAILS</h1><br/>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-black-400 ">
          <thead className="text-sm text-blue-800  uppercase bg-cyan-300 dark:text-indigo-950">
            <tr>
              <th scope="col" className="px-3 py-3">
                Booking Id
              </th>
              {/* Add other table headings */}
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
                        <th scope="col" className="px-3 py-3">
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
            <tr className="odd:bg-white-100 even:bg-white-200 border-b dark:border-cyan-700">
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
                        <td className="px-10 py-4">
                            100
                        </td>
                        <td className="px-1 py-4">
                            Offline
                        </td>
                        <td className="px-6 py-4">
                            Confirmed
                        </td>
                        <td className="px-6 py-4">
                            $1999
                        </td>

              {/* Add other table data */}
              <td className="px-3 py-4">
                <button onClick={() => handlePayNow(1)} className='text-blue-900 font-bold'>Pay Now</button>
              </td>
            </tr>
            {/* Add other booking rows similarly */}
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
                        <td className="px-10 py-4">
                            500
                        </td>
                        <td className="px-1 py-4">
                            Offline
                        </td>
                        <td className="px-6 py-4">
                            Confirmed
                        </td>
                        <td className="px-6 py-4">
                            $599
                        </td>
                        <td className="px-3 py-4">
                <button onClick={() => handlePayNow(1)} className='text-blue-900 font-bold'>Pay Now</button>
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
                        <td className="px-10 py-4">
                            50
                        </td>
                        <td className="px-1 py-4">
                            Hybrid
                        </td>
                        <td className="px-6 py-4">
                            Pending
                        </td>
                        <td className="px-6 py-4">
                            $199
                        </td>
                        <td className="px-3 py-4">
                <button onClick={() => handlePayNow(1)} className='text-blue-900 font-bold'>Pay Now</button>
              </td>
            </tr>


          </tbody>
        </table>
      </div>

      {showPaymentForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Payment Form</h2>
            <form onSubmit={handleSubmitPayment}>
              <div className="mb-4">
                <label htmlFor="paymentMode" className="block text-sm font-medium text-gray-700">
                  Payment Mode
                </label>
                <select
                  id="paymentMode"
                  className="mt-1 p-2 border rounded-md w-full"
                  value={paymentMode}
                  onChange={handlePaymentModeChange}
                >
                  <option value="">Select Payment Mode</option>
                  <option value="card">Card</option>
                  <option value="upi">UPI</option>
                  <option value="netbanking">Netbanking</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  className="mt-1 p-2 border rounded-md w-full"
                  value={amount}
                  onChange={handleAmountChange}
                />
              </div>
              <div className="flex justify-end">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-4" type="submit">Pay</button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleClosePaymentForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBookings;