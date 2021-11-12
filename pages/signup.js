import { useState } from 'react'
import Link from 'next/link'
import { auth } from '../firebase'
import toast, { Toaster } from 'react-hot-toast';
import { handleRegister } from '../services/common';


export default function Signup() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    handleRegister(name, email, password)

  }


  return (


    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-20 w-auto flex-no-shrink fill-current" viewBox="0 0 20 20" fill="currentColor">
            <path color="#3b82f6" fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
          </svg>


          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>

        </div>
        <Toaster />
        <form class="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Name</label>
              <input
                value={name} onChange={(e) => setName(e.target.value)}
                name="name" type="text"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border 
           border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none 
           focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter Your Name" />
            </div>

            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address"
                value={email} onChange={(e) => setEmail(e.target.value)}
                name="email" type="email" autocomplete="email"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border 
           border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none 
           focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>


            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password"
                value={password} onChange={(e) => setPassword(e.target.value)}

                name="password" type="password" autocomplete="current-password"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 
            focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
          </div>



          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">

                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </span>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}