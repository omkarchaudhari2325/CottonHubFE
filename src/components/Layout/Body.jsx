import React from 'react';
import cottonImg from "../../assets/cotton_image.png";
import KeyFeatures from './KeyFeatures';
import Main from './Main';
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';
axios.defaults.baseURL = `http://localhost:3000`;

const Body = () => {
  const {login,setLogin} = useContext(AuthContext);

  const [loginData,setLoginData] = useState(null);
  const navigate = useNavigate();

  const isDashBoardValid = async () => {
      let token = localStorage.getItem("userDataToken");

      try{
          const response = await axios.get("api/v1/validUser", {
              headers : {
                  Authorization : token,
              },
          });

          const data = await response.data;
          // toast.success("user verified");
          setLogin(true);

          // navigate("/dashboard");

      }
      catch(err){
          console.log("User is not valid hence on the same page")
          }


  }
  // isDashBoardValid();
  useEffect(() =>{
      isDashBoardValid();
  },[]);


  return (
    <div>
        <Main />
        <KeyFeatures />

    </div>

  );
}

export default Body;
