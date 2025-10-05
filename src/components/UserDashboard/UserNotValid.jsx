import React from 'react'
import { Link } from 'react-router-dom';
import errImg from "./not-auth.jpg"
const UserNotValid = () => {
  return (
    <div className='max-w-[1200px] mx-auto h-full'>


    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center mt-[4rem]">
      {/* Access Denied Image */}
      <img src={errImg} alt="Access Denied" className="w-[30vw] mb-8" />

      {/* Access Denied Message */}
      <h2 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h2>
      <p className="text-lg text-gray-700 mb-8">You do not have permission to access this page.</p>

      {/* Return Button */}
      <div className='flex flex-row gap-6 items-center justify-center'>
      <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Return to Home
      </Link>


      </div>

      {/* Optional: Link to Login Page */}
      {/* <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-4">
        Log In
      </Link> */}
    </div>
    </div>

  )
}

export default UserNotValid;

