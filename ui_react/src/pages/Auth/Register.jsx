import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

const Register = () => {

    const navigate = useNavigate()
   
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Check if any field is empty
        for (const field in formData) {
          if (formData[field].trim() === '') {
            alert(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
            return;
          }
        }
        // Proceed with form submission if all fields are filled
        console.log(formData);
        toast.success("YAY");
        // You can add your form submission logic here
      };

     

  return (
    <div>
     <section class="bg-gray-50 dark:bg-gray-900">
        <br/>
  <div class="flex flex-col items-center px-6 py-2 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class=" space-y-2 md:space-y-5 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign Up
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit} >
              <div>
                      <input type="name" 
                      name="name"
                       id="name" 
                       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                       placeholder='Enter your Name'
                       onChange={handleChange}
                       autoFocus
                       required=""/>
                  </div>
                  <div>
                      <input type="email" 
                      name="email"
                       id="email" 
                       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                       placeholder='Enter your email'
                       onChange={handleChange}
                       required=""/>
                  </div>
                  <div>
                      <input type="phoneNumber" 
                      name="phoneNumber"
                       id="phoneNumber" 
                       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                       placeholder='Enter your phone number'
                       onChange={handleChange}
                       required=""/>
                  </div>
                  
                  <div>
                      <input type="password"
                       name="password" 
                       id="password" 
                       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                       placeholder='Enter your Password'
                       onChange={handleChange}/>
                  </div>
                  <div>                     
                      <input type="password"
                       name="confirmPassword" 
                       id="confirmPassword" 
                       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                       placeholder='Enter Confirm Password'
                       onChange={handleChange}/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-0 mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
                  <Toaster />
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400 mb-3">
                      Already have an account yet? <span class="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={()=> navigate('/login')}>Login</span>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
<br/><br/>
    </div>
    
  )
}

export default Register
