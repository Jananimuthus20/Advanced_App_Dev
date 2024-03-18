import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import login_image from '../../assets/Images/login_image.png'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'


const Login = () => {

        const navigate = useNavigate()

        const handleLogin = (e) => {
            e.preventDefault();
            navigate('/admin/dashboard'); // Navigate to the admin dashboard route
        };
        const [formData, setFormData] = useState({
            email: ''
          });
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
              ...formData,
              [name]: value
            });
          };
          const [errors, setErrors] = useState({
            email: ''
          });
       
            const validateEmail = (email) => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
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
        if (!validateEmail(formData.email)) {
          setErrors({ ...errors, email: 'Invalid email format' });
          return;
        }
        setErrors({ ...errors, email: '' });

        console.log(formData);
        localStorage.setItem('email',formData.email)
        toast.promise(
          new Promise((resolve) => {
            // Simulate some asynchronous operation
            setTimeout(() => {
              resolve('Logged in successfully!');
            }, 2000); // Adjust the delay as needed
          }),
          {
            loading: 'Logging in...',
            success: 'Logged in successfully!',
            error: 'An error occurred while logging in.',
          }
        ).then(() => {
          // Navigate to the next page after the toast is closed or after a delay
          setTimeout(() => {
            if(formData.email=="admin@gmail.com")
            {
              navigate('/admin/dashboard')
            }
            else{
              navigate('/user/dashboard')
            }
            
          }, 1000); // Adjust the delay as needed
        });
      };
      

  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="w-[49%] flex justify-center">
                <img src={login_image} alt="Login Illustration" className="h-auto max-h-99 mb-24 ml-2" />
        </div>
            <div className="w-[70%] flex justify-center">
             <section class="bg-gray-50 dark:bg-gray-900 w-full">
              <br/><br/>
                 <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
         <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 lg:max-w-md xl:p-0 dark:bg-gray-900 dark:border-gray-800">
          <div class="p-6 space-y-4 md:space-y-5 sm:p-8 ">
              <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" 
                       name="email"
                       id="email" 
                       class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                       onChange={handleChange}
                       autoFocus required=""/>
                        {errors.email && <p className="text-red-600">{errors.email}</p>}
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" 
                      name="password" 
                      id="password" 
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
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
                      <div class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</div>
                  </div>
                  <button type="submit" 
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >
                    Log In</button>
                    <Toaster />
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <span class="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={() => navigate('/register')}>Sign up</span>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</div>
<br/><br/><br/>
    </div>
  )
}

export default Login
