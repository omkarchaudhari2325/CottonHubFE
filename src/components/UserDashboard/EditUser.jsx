import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Loader from "../Loaders/Loader";
axios.defaults.baseURL = `https://cotton-hub.vercel.app/`;

const EditUser = () => {
  const { login, setLogin } = useContext(AuthContext);
  const { data, setData } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id)
  // const [imageUploadLoading,setImageUploadLoading] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/get-token");
        const data = response.data;
        setLoginData(data);
        setLogin(true);
        setIsLoggedIn(true);
        setData(data?.user);
        // Set initial values for input fields
        setUserData({
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          email: data.user.email,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsLoggedIn(false);
        setLogin(false);
        setData({});
      }
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    console.log(userData);

    try {
      const response = await axios.post("/api/v1/update-user/" + id, userData);

      const data = await response.data;
      toast.success("User updated successfully");
      setData(data && data?.user);
      console.log(data);

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
      setData(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImageName(file.name);
  };

  const handleUploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("file", imageFile);
      setLoading(true);
      const response = await axios.post("/api/v1/profilePicture", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = await response.data;

      console.log(data);
      setLoading(false);
      window.location.reload();

      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image");
    }
  };

  console.log("This is the data i am receving", data);

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center mt-20">
      <div className="max-w-2xl w-full mx-4 mt-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col justify-center items-center">
            <img
              src={loginData.user && loginData.user.profileImageUrl}
              alt="Profile"
              className="w-[300px] h-[300px] rounded-full mb-4"
            />
            {loading && (
              <div>
                <Loader />
                <p>Please wait...</p>
              </div>
            )}
            <div className="flex gap-14 items-center mt-4 mb-4">
              <label
                htmlFor="imageUpload"
                className="relative cursor-pointer border p-2 flex items-center justify-center rounded-sm"
              >
                <input
                  id="imageUpload"
                  className="hidden"
                  type="file"
                  onChange={handleFileChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-2 top-2 w-6 h-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="ml-8 text-gray-600">
                  {imageName ? imageName : "Choose Image"}
                </span>
              </label>
              <button
                disabled={loading}
                onClick={handleUploadImage}
                className={
                  loading
                    ? "loading-class px-4 py-2 ml-4 bg-blue-300 text-white rounded-md  transition duration-300 border border-blue-500"
                    : "normal-class px-4 py-2 ml-4 bg-blue-600 text-white rounded-md hover:bg-blue-600 transition duration-300 border border-blue-500"
                }
              >
                Upload Image
              </button>
            </div>
          </div>
          <hr />
          <div className="flex flex-col mb-6 mt-6">
            <label className="text-gray-600">First Name</label>
            <input
              autoFocus
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleInputChange}
              className="text-gray-800 font-semibold border rounded-sm p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-gray-600">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleInputChange}
              className="text-gray-800 font-semibold border rounded-sm p-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              readOnly
              className="text-gray-800 font-semibold border rounded-sm p-2 focus:outline-none"
            />
          </div>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
          >
            Save
          </button>
          <NavLink to="/dashboard">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ml-4">
              Cancel
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
