import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
// import { AuthContext } from '../../context/AuthContext';
// import { AuthContext } from "../context/AuthContext";
// import ImageInfo from './ImageInfo';
import ImageInfo from "../UserDashboard/ImageInfo";
import { AuthContext } from "../../context/AuthContext";
axios.defaults.baseURL = `http://localhost:3000`;
import { NavLink } from "react-router-dom";
const History = () => {
  const [loginData, setLoginData] = useState([]);
  // const [loggedIn,setIsLoggedIn] = useState(false);
  const {login,setLogin} = useContext(AuthContext)
  const {data,setData} = useContext(AuthContext)
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const isDashBoardValid = async () => {
    try {
      // const token = localStorage.getItem("userDataToken");
        const response = await axios.get("http://localhost:3000/api/v1/get-token");
        const data = await response.data;
        setLoginData(data);
        setData(data.user)
        setCards(data?.user?.imageInfo);
        setLogin(true)
    } catch (err) {
      console.error('Error fetching user data:', err);
      setLoginData(null);

      setLogin(false);
      navigate("/inValidUser");
    }
  };
  console.log(loginData)
  // isDashBoardValid();
  // useEffect(() =>{
  //     isDashBoardValid();
  // },[])
  useEffect(() => {
    isDashBoardValid();
    // setLoginData(true);
  }, []);
//   if(cards.length === 0){
//     return (
//       <div className=" mt-40 max-w-[1200px] mx-auto flex flex-row justify-center h-[30vh]">
//         <h1 className="font-mulish font-bold text-xl">Looks like you cleared up everything ➡️</h1>
//         <span className="font-bold font-mulish text-xl text-blue-700"><Link to = "/predict">lets predict more</Link></span>
//       </div>
//     )
//   }

if(!cards || cards.length === 0){
  return(

    <div className="max-w-[1000px] mx-auto mt-32">
     <h1 className="ml-4 mb-4 font-mulish font-bold text-2xl">Upload History </h1>
      <hr className="mb-14 font-bold bg-blue-gray-300 h-1 rounded-lg" />
      <h3>You haven't uploaded anything yet , <NavLink to="/predict"> <span href="" className="text-blue-900 underline">click here to make predictions 😊</span> </NavLink> </h3>

    </div>
  )
}
  return (
    <div>
    {
      login && <div className=" mt-40 max-w-[1000px] mx-auto">
      <h1 className="ml-4 mb-4 font-mulish font-bold text-2xl">Upload History </h1>
      <hr className="mb-14 font-bold bg-blue-gray-300 h-1 rounded-lg" />


        <div className="grid grid-cols-3 gap-10">
          {cards.map((card) => {
            return (
              <div key={card?.imageId} className="cursor-pointer">
                <div className="">
                  <ImageInfo cardData={card} />
                </div>
              </div>
            );
          })}
        </div>

    </div>
    }

  </div>
  );
};

export default History;
