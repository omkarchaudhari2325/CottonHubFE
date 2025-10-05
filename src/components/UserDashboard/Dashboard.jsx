import React, { useState ,useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

const Dashboard = () => {
  const {login,setLogin} = useContext(AuthContext)
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const{data,setData} = useContext(AuthContext)

  const isDashboardValid = async () => {
    try {
      const response = await axios.get("/api/v1/get-token");
      const data = response.data;
      setLogin(true)
      setLoginData(data);
      console.log(data)
      setData(data?.user);
    } catch (err) {
      console.error("Error fetching user data:", err);
      setLogin(false);
      setData({})
    }
  };

  const deleteHandler = async () => {
    try {
      const id = loginData?.user?._id;
      if (id) {
        const response = await axios.post("/api/v1/delete-user/" + id);
        const data = await response.data;
        toast.success("User deleted successfully");
        setShowConfirmation(false);
        localStorage.clear();
        setLogin(false);
        navigate("/")

         // Reload the page after deletion
      }
    } catch (err) {
      console.log(err);
      setLogin(true)
      toast.error("Something went wrong");
    }
  };

  const toggleConfirmation = () => {
    setShowConfirmation((prev) => !prev);
  };

  useEffect(() => {
    isDashboardValid();
  }, []);

  if(!login){
    return (
      <div className="mt-32 max-w-[1200px] mx-auto">
        <h1>You are not a valid user</h1>
      </div>
    )
  }
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-2xl w-full mx-4 mt-32">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-center items-center">
          { loginData && loginData?.user?.profileImageUrl?  <img
              src={loginData && loginData?.user?.profileImageUrl}
              alt="Profile"
              className="w-[350px] h-[350px] rounded-full mb-4"
            />:(<div className="flex items-center justify-center h-full">
            <h2 className="w-[400px] h-[100px]">Please click on edit details to upload your profile image</h2>

            </div>)

          }

          </div>
          <hr />
          <div className="flex flex-col mb-6 mt-6">
            <label className="text-gray-600">First Name</label>
            <p className="text-gray-800 font-semibold">
              {loginData && loginData?.user?.firstName}
            </p>
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-gray-600">Last Name</label>
            <p className="text-gray-800 font-semibold">
              {loginData && loginData?.user?.lastName}
            </p>
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-gray-600">Email</label>
            <p className="text-gray-800 font-semibold">
              {loginData && loginData?.user?.email}
            </p>
          </div>
          <div className="flex justify-self-start gap-5">
            <NavLink
              to={`edit-user/${
                loginData && loginData.user && loginData.user._id
              }`}
            >
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
                Edit Details
              </button>
            </NavLink>
            <button
              onClick={toggleConfirmation}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
            >
              Delete Profile
            </button>



          </div>

          <div>
          <NavLink to="history">
            <p className="mt-4 text-blue-900 font-semibold underline">show previous uploads</p>
            </NavLink>
          </div>

          {/* Confirmation Modal */}
          {showConfirmation && (
            <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-lg font-semibold mb-4">
                  Are you sure you want to delete your profile?
                </h2>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={deleteHandler}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                  >
                    Yes
                  </button>
                  <button
                    onClick={toggleConfirmation}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
