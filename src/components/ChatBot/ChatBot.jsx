import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";
import Chattingld from "./Chattingld";


const ChatBot = ({ isChatBotOpen, setChatBotOpen }) => {
  const [messages, setMessages] = useState(["Welcome to chatbot!"]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, `User: ${inputValue}`]);
      const userMessage = inputValue;
      setInputValue("");
      setIsTyping(true);

      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/generate",
          { prompt: userMessage }
        );
        const aiResponse = formatResponse(response.data);
        setMessages((prevMessages) => [...prevMessages, `AI: ${aiResponse}`]);
      } catch (error) {
        console.error("Error generating response:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          "AI: Sorry, I couldn't generate a response.",
        ]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const formatResponse = (response) => {
    return response
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong><br>") // Bold and newline after each bold text
      .replace(/\* (.+?)(?=\*|$)/g, "<li>$1</li>"); // Convert * bullet points to <li>
  };

  return (
    <div className="w-[35vw] mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-[80vh] flex flex-col ">
      <div className="bg-blue-900 text-white p-5 pl-3 pr-5 text-center font-bold relative ">
        <p>Chat Bot</p>
        <span className="absolute right-4 bottom-3 cursor-pointer">
          <AiFillCloseCircle
            onClick={() => setChatBotOpen(false)}
            size={30}
            className="h-15 w-6"
          />
        </span>
      </div>

      <div
        ref={chatContainerRef}
        className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-100"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.startsWith("User:") ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-xl ${
                message.startsWith("User:")
                  ? "bg-gray-200 text-gray-900"
                  : "bg-teal-500 text-white"
              } shadow-md`}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: message.replace("User: ", "").replace("AI: ", ""),
                }}
              />
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[50%] p-3 rounded-xl bg-teal-500 text-white shadow-md animate-pulse">
              <div>generating .... </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 flex bg-white">
        <input
          type="text"
          placeholder="Enter your message here"
          className="w-full border rounded-l-lg p-3 text-gray-700"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={handleSend}
          className="bg-blue-900 text-white p-3 rounded-r-lg ml-3"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
