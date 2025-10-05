import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Interceptor = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [token, setToken] = useState(null);
  const fetchProtectedData = async () => {
    try {
      const response = await axios.get(
        "https://cotton-hub.vercel.app/api/v1/get-token"
      );
      setResponseMessage(response.data);
      setToken(response.data.token);
      setIsValid(true);
    } catch (err) {
      setIsValid(false);
      console.error("Error fetching protected data:", err);
    }
  };

  console.log(responseMessage);
  useEffect(() => {
    fetchProtectedData();
  }, []);
  return (
    <div className="mt-32 max-w-[1200px] m-auto">
      {isValid ? (
        <>
          <h2>You seems to be a valid user</h2> <p>Your token : {token}</p>
        </>
      ) : (
        <h1>You dont seem to be valid dude</h1>
      )}
    </div>
  );
};

export default Interceptor;
