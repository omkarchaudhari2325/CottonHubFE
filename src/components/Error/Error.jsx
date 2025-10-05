import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'
import errImage from "../../assets/error404.jpg"
const Error = () => {

  const err = useRouteError();
  console.log(err)
  return (
    <div className="flex items-center justify-center h-screen bg-white">
    <div className="max-w-md text-center">
    <img src={errImage} alt="" />
      <h2 className='text-4xl font-bold text-gray-800 mb-4 font-mulish'>404 Page not Found</h2>

      <p className="text-lg text-gray-600 mb-6">It looks like this page is missing.</p>
      {/* <p className="text-lg text-gray-600 mb-8">Maybe it was moved or never existed.</p> */}
      <NavLink href="/" className="text-lg bg-[rgba(1,212,180,255)] text-white px-6 py-3 rounded-lg hover:bg-[rgb(72,193,175)] transition duration-300 ease-in-out mt-5">Go back to Home</NavLink>
    </div>
  </div>
  )
}

export default Error
