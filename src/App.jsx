import React, { useEffect } from "react";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import axios from "axios";
// import { useState,useEffect } from "react";
import { useState } from "react";
// import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import AuthContextProvier from "./context/AuthContext";
import { GoogleOAuthProvider } from '@react-oauth/google';
import axiosConfig from "../src/Interceptors/axiosConfig"

const backgroundImageUrl =
  "url(https://blossomplant.com/assets/images/bg_disease_block_1-2_desk@2x.jpg)";

const App = () => {
  const [loginData, setLoginData] = useState([]);
  const [loggedIn,setIsLoggedIn] = useState(false);

  const isDashboardValid = async () => {
    try {
      // const token = localStorage.getItem("userDataToken");
        const response = await axios.get("http://localhost:3000/api/v1/get-token");
        const data = response.data;
        setLoginData(data);
        setIsLoggedIn(true)
    } catch (err) {
      console.error('Error fetching user data:', err);
      setLoginData(null);
      setIsLoggedIn(false);
    }
  };

  useEffect(() =>{
    isDashboardValid();
  },[])
  return (
    <GoogleOAuthProvider clientId="858506942106-jcr5epouv0mtgoc32tpouvprpi69i6ua.apps.googleusercontent.com">
    <AuthContextProvier>
    <div
      className="bg-cover bg-center min-h-screen border-black overflow-hidden"
      style={{ backgroundImage: backgroundImageUrl }}
    >
      <Toaster
        containerStyle={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 9999,

        }}
        toastOptions={{
          success: {
            style: {
              background: "white",
              color: "black",
              width: "270px",
              fontSize: "1.1rem",
              fontFamily: "cursive",
              textAlign : 'center'
            },
          },
          error: {
            style: {
              background: "white",
              color: "black",
              width: "300px",
              textAlign: "center",
              fontSize: "1rem",
              fontFamily: "cursive",

            },
          },
        }}
      />
      <Navbar login={loggedIn} loginData = {loginData} />
      <Outlet />
      <Footer />


    </div>
    </AuthContextProvier>
    </GoogleOAuthProvider>
  );
};

export default App;
