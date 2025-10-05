import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import Shimmer from "../Shimmer/Shimmer";
import Loader from "../Loaders/Loader";
axios.defaults.baseURL = `https://cotton-hub.vercel.app/`;
const ImageInfo = ({ cardData }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const deleteHandler = async () => {
    setShowModal(true);
  };

  const [isDeleted, setIsDeleted] = useState(false);

  const confirmDelete = async () => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `/api/v1/deleteImage/${cardData.imageId}`
      );
      const data = response.data;
      console.log(data);
      setLoading(false);
      toast.success("Deleted Successfully");
      setIsDeleted(true); // Set state to indicate that the image has been deleted
      console.log("Image deleted successfully");
    } catch (error) {
      setLoading(false);
      console.error("Error deleting image:", error);
      // Handle error
    }
    setShowModal(false);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleString(undefined, options);
  };
  console.log(cardData);
  if (isDeleted) {
    // Return null or a placeholder if the image has been deleted
    return null;
  }

  return (
    <div>
      <div className="card h-[450px] shadow-lg rounded-sm shadow-slate-300 p-4 transform transition-transform duration-300 hover:scale-105 bg-gray-100 flex flex-col  items-center  relative z-10 group text-left">
        <div className="">
          <img src={cardData.imageUrl} className="h-64 w-72" alt="" />

          <h1 className="mt-4">Disease : {cardData.diseaseName}</h1>
          <h1 className="mt-2">
            Uploaded on : {formatDate(cardData?.dateField)}
          </h1>
          {/* <button>hii</button> */}
          <div className="buttons mt-7">
            <button
              className="flex items-center justify-between bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 relative"
              onClick={deleteHandler}
            >
              <span className="font-mulish">Delete</span>
              <MdDelete size={20} color="white" className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
          <div className="modal-container bg-white w-96 rounded-lg shadow-lg z-50 p-6">
            <h1 className="text-xl font-semibold mb-4">Confirm Deletion</h1>
            <p className="mb-4">Are you sure you want to delete the Record?</p>
            {loading ? (
              <div className="flex justify-center">
                <Loader />
              </div>
            ) : (
              <div className="flex justify-end">
                <button
                  className="btn bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={confirmDelete}
                >
                  Delete
                </button>
                <button
                  className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={cancelDelete}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageInfo;
