import React from 'react'

const AdminAddEvent = () => {
  return (
    <div className='overflow-hidden'>
      <div className="w-[90%] mt-[-48px] flex justify-center items-center overflow-hidden">
             <section class="bg-gray-50 dark:bg-gray-900 w-full">
             <br/><br/>
                 <div class="flex flex-col items-center px-6 py-4 mx-auto  lg:py-0">
      
         <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 lg:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-800">
          <div class="p-6 space-y-2 md:space-y-3 sm:p-8 ">
             
              <form class="space-y-2 md:space-y-3" action="#">
                  <div>
                      <label for="eventType" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Event Type</label>
                      <input type="eventType" name="eventType" id="eventType" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autoFocus required=""/>
                  </div>
                  <div>
                      <label for="description" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                      <input type="description" name="description" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="participantCount" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Participant Count</label>
                      <input type="number" name="participantCount" id="participantCount" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label htmlFor="eventMode" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Event Mode</label>
                          <select name="eventMode" id="eventMode" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                              <option value="">Select Event Mode</option>
                              <option value="offline">Offline</option>
                               <option value="hybrid">Hybrid</option>
                          </select>
                   </div>
                  <div>
                      <label for="charges" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Charges</label>
                      <input type="number" name="charges" id="charges" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                  <button type="button" 
                  class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600" >
                    Add Event</button>
                  
              </form>
          </div>
      </div>
  </div>
</section>
</div>
    </div>
  )
}

export default AdminAddEvent
