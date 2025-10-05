import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";
import Loader from "../Loaders/Loader";
import { NavLink } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
import UserNotValid from "../UserDashboard/UserNotValid";
import { useNavigate } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
// import axios from "axios";

const Predict = () => {

  // const [login,isLoggedIn] = useState(false);
  const {login,setLogin} = useContext(AuthContext);
  const{data,setData} = useContext(AuthContext)
  const [loginData,setLoginData] = useState(null);
  const [loginGoogle,setLoginGoogle] = useState(false);
  const navigate = useNavigate();

  const isDashBoardValid = async () => {
      try {
        // const token = localStorage.getItem("userDataToken");
          const response = await axios.get("http://localhost:3000/api/v1/get-token");
          const resData = await response.data.user;
          setLoginData(data);

          setData(resData);
          setLogin(true);
          // isLoggedIn(true);


      } catch (err) {
        console.error('Error fetching user data:', err);
        setLoginData(null);
        setData({})
        // isLoggedIn(false);
        setLogin(false);
        navigate("/inValidUser")
      }
  }

//   const isGoogleValid = async () => {
//     let token = localStorage.getItem("userDataToken2");

//     try{
//         const response = await axios.get("api/v1/validUser", {
//             headers : {
//                 Authorization : token,
//             },
//         });

//         const data = await response.data;
//         setLoginData(data);
//         console.log(data);
//         // toast.success("user verified");
//         setLogin(true);

//         // navigate("/dashboard");

//     }
//     catch(err){
//         if(err.response){
//             if(err.response.status == 401){
//                 navigate("/inValidUser");
//             }
//         }

//     }
// }
  // isDashBoardValid();
  useEffect(() =>{
      isDashBoardValid();
  },[])


  console.log("The data from context is " , data)

  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  useEffect(() => {
    if (prediction !== "") {
      sendData();
      setButtonVisible(false);
    } else {
      setButtonVisible(true);
    }
    window.scrollTo(0, 0);
  }, [prediction]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const fileExtension = selectedFile.name.split(".").pop().toLowerCase();

      if (["jpg", "jpeg", "png"].includes(fileExtension)) {
        setFile(selectedFile);
        setImagePreview(URL.createObjectURL(selectedFile));
        setPrediction("");
      } else {
        console.log("Please upload a valid image");
      }
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error("Please select a file first")
      return;
    }


    const formData = new FormData();
    formData.append("file", file);


    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setPrediction(response.data.prediction);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false)
    }
  };

  const sendData = async () => {
    try {


    if (!file) {
      toast.error("Please select a file first")
    }

      let token = localStorage.getItem("userDataToken");
      const fileDataPromise = new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (event) {
          resolve(event.target.result);
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.readAsBinaryString(file);
      });

      const fileData = await fileDataPromise;
      const hash = await CryptoJS.SHA256(fileData).toString(CryptoJS.enc.Hex);
      const fileName = `${hash}_${file.name}`;

      const formData = new FormData();
      formData.append("file", file, fileName);
      formData.append("prediction", prediction);
      if(token){
        formData.append("token",token);
      }

      const response = await axios.post(
        "http://localhost:3000/api/v1/imageUpload",
        formData
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    handleFileChange({ target: { files: [droppedFile] } });
  };
  useEffect(() =>{
    window.scrollTo(0, 0);
  },[])

  return (
    login ? (

      <div className="w-[100vw] h-full flex justify-center p-7 ">
      <div className="mt-20 flex flex-col md:flex-row max-w-[1200px] mx-auto  gap-20 p-10 rounded-lg ">
      <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-left text-gray-900 font-mulish">
            Cotton Disease Detection Using Deep Learning
          </h1>
          <div className="bg-gray-700 w-full h-[2px] rounded-full mb-2"></div>
          <p className="text-justify  font-mulish text-green-800">
            Cotton disease prediction is crucial for farmers and agricultural
            professionals to ensure the health and productivity of cotton crops.
            By accurately predicting diseases that may affect cotton plants,
            farmers can take proactive measures to prevent or mitigate the
            spread of these diseases. Timely intervention can save crops from
            extensive damage, leading to increased yield and profitability for
            farmers. A web application dedicated to cotton disease prediction
            provides an accessible and convenient tool for farmers to assess the
            health of their crops and make informed decisions about disease
            management strategies.
          </p>

          <p className="text-black mt-4">
            We are pleased to announce that our predictive disease detection
            system has demonstrated accurate identification for the following
            eight diseases:
          </p>

          <ul className="list-disc list-inside text-blue-800 mt-4 grid grid-cols-2">
            <li>Aphids</li>
            <li>Armyworm</li>
            <li>Bacterial Blight</li>
            <li>Cotton Boll Rot</li>
            <li>Green Cotton Boll</li>
            <li>Healthy</li>
            <li>Powdery Mildew</li>
            <li>Target Spot</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-900">
              Upload Image and Get Prediction
            </h1>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="flex flex-col items-center border border-gray-200 p-8 rounded-lg shadow-md text-center bg-white"
              style={{ cursor: "pointer" }}
            >
              {/* File input */}
              <input
                type="file"
                name="file_upload"
                onChange={handleFileChange}
                className="hidden"
              />
              {/* File upload area */}
              <div className="w-[25rem] mb-7">
                <label className="flex justify-center w-full h-20 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-medium text-gray-600">
                      Drop files to Attach, or
                      <span className="text-blue-600 underline"> browse</span>
                    </span>
                  </span>
                  <input
                    type="file"
                    name="file_upload"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
              {/* Image preview */}
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-72 w-[25em] mb-4 rounded-md shadow-md"
                />
              )}
              {/* Predict button */}
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                style={{ display: buttonVisible ? "block" : "none" }}
              >
                Predict
              </button>
              {/* Prediction */}
              {prediction || !loading ? (
                <div>
                  <p className="text-lg mt-4 text-gray-700 mb-2">
                    Prediction: <span className="font-mulish">{prediction}</span>
                  </p>
                </div>
              ) : (
                <Loader />
              )}
              {/* Solution link */}
              {prediction.length !== 0 && prediction !== "Healthy" && (
                <NavLink to={"/solution/" + prediction}>
                  <h1 className="font-mulish font-bold cursor-pointer">
                    Worried ? 😊 Click here to get{" "}
                    <span className="underline text-green-600">solution.</span>
                  </h1>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    ) : (

      <UserNotValid />
    )

  );
};

export default Predict;
