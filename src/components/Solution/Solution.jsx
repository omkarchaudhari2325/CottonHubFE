import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import diseasesData from "./solutions.json"; // Import the JSON data
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import ChatBot from "../ChatBot/ChatBot";
const Solution = () => {
  const[isChatBotOpen,setChatBotOpen] = useState(false);
  const navigate = useNavigate();

  const { login, setLogin } = useContext(AuthContext);
  const { data, setData } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const { id } = useParams(); // Get the disease id from the URL
  const diseaseNameFromParam = id.toLowerCase(); // Convert id to lowercase to match with disease names
  const disease = diseasesData.find(
    (item) => item.name.toLowerCase() === diseaseNameFromParam
  ); // Find the disease object matching the name
  const isDashboardValid = async () => {
    try {
      // const token = localStorage.getItem("userDataToken");
      const response = await axios.get(
        "http://localhost:3000/api/v1/get-token"
      );
      const data = response.data;
      // setLoginData(data);
      setData(data);
      setLogin(true);
    } catch (err) {
      console.error("Error fetching user data:", err);
      // setLoginData(null);
      setData(null);
      // setIsLoggedIn(false);
      setLogin(false);
    }
  };
  const handleChatBotToggle = () => {
    setChatBotOpen(!isChatBotOpen); // Toggle the state when clicking on the link
  };

  useEffect(() => {
    isDashboardValid();
    // window.scrollTo(0, 0);
  }, []);

  console.log("The data from the solution " , data)
  if (!disease) {
    // Handle case when disease is not found
    return <div className="text-center max-w-[1100px] mt-32">Coming Soon!</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-[1100px] mt-32 relative z-10">
      <h1 className="font-bold text-3xl mb-6 text-center">
        Solution for the {disease.name.toUpperCase()} Disease
      </h1>
      <div className=" mb-8 ">
        <img
          src={disease.img}
          alt="no-data"
          className="mx-auto rounded-lg"
          width={600}
          height={500}
        />
      </div>
      <h1 className="font-bold text-2xl">Identification : </h1>
      <div className="description mb-8 mt-4 text-left">
        {disease.description}
      </div>
      <h1 className="font-bold text-2xl">Damage Symptoms : </h1>
      <div className="description mb-8 mt-4 text-left">
        {disease["damage-symptons"]}
      </div>
      <h1 className="font-bold text-2xl">Mechanical Control : </h1>
      <div className="description mb-8 mt-4 text-left">
        {disease["mechanical-control"]}
      </div>
      <h1 className="font-bold text-2xl">Biologial Control : </h1>
      <div className="description mb-8 mt-4 text-left">
        <p  dangerouslySetInnerHTML={{ __html: disease["biological-control"] }}></p>
      </div>
      <h1 className="font-bold text-2xl">Chemical Control : </h1>
      <div className="description mb-8 mt-4 text-left">
        {disease["chemical-control"]}
      </div>
      <h1 className="font-bold text-2xl mt-2 mb-6">Products : </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {disease.products &&
          disease.products.map((product, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="mb-4">{product.description}</p>
              {product.img && (
                <img
                  src={product.img}
                  alt={`Product ${index + 1}`}
                  className="w-full rounded-lg shadow-lg mb-4"
                />
              )}
            </div>
          ))}
      </div>
      <h1 className="font-bold text-2xl mt-10">Additional Information</h1>
      <div className="additional-details mt-3">
        <p>{disease["additional-details"]}</p>
      </div>
      <p className="mt-5" onClick={handleChatBotToggle}>
        {" "}
        <span className="underline text-blue-500 cursor-pointer">
          Still not resolved ? Ask our chat-bot
        </span>
      </p>

      {isChatBotOpen && (
        <div className="chat-bot absolute bottom-0 right-[-100px] rounded-e-2xlxl shadow-lg">
          <ChatBot isChatBotOpen = {isChatBotOpen} setChatBotOpen = {setChatBotOpen} />
        </div>
      )}

    </div>
  );
};

export default Solution;
