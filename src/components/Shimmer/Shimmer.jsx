import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-28">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-white shadow-lg w-96 rounded-2xl mt-20">
          <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse rounded-t-2xl"></div>
          <div className="p-3">
            <div className="grid grid-cols-3 gap-4 mt-2">
              {[...Array(7)].map((_, index) => (
                <div key={index} className="h-8 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
