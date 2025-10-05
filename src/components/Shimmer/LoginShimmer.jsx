import React from "react";

const LoginShimmer = () => {
  return (
    <div className="min-h-screen py-8 md:py-16 lg:py-32 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-screen-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20 relative">
            <div className="animate-pulse bg-gray-200 h-96 rounded-md w-full"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-transparent opacity-20"></div>
          </div>
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-20">
            <div className="animate-pulse mb-4 bg-gray-200 h-8 rounded-md w-3/4"></div>
            <div className="animate-pulse mb-4 bg-gray-200 h-8 rounded-md w-5/6"></div>
            <div className="animate-pulse mb-6 bg-gray-200 h-8 rounded-md w-full"></div>
            <div className="animate-pulse mb-4 bg-gray-200 h-8 rounded-md w-full"></div>
            <div className="animate-pulse mb-6 bg-gray-200 h-8 rounded-md w-full"></div>
            <div className="animate-pulse mb-4 bg-gray-200 h-8 rounded-md w-3/4"></div>
            <div className="animate-pulse bg-gray-200 h-8 rounded-md w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginShimmer;
