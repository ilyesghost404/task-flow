import React, { useState } from "react";
import "./chat.css";
import Lottie from "lottie-react";
import Chatbot from "./chatbott.json";
import NewBotAnimation from "./chatbot2.json"; 

function Chat() {
  const [inputValue, setInputValue] = useState(""); 
  const [elements, setElements] = useState([]); 
  const [showNewBot, setShowNewBot] = useState(false); 

 
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setElements([...elements, inputValue]); 
      setInputValue(""); 
      setShowNewBot(true); 
    }
  };

  return (
    <div className="content">
      {/* Header */}
      <nav className="chathead">
        <h1>CHAT-BOT</h1>
        <div></div>
      </nav>

      {/* Original Bot Section */}
      {!showNewBot && (
        <div className="bot1">
          <Lottie animationData={Chatbot} loop={true} className="bot" />
          <h1>What can I help with?</h1>
        </div>
      )}

      {/* New Bot Section */}
      {showNewBot && (
        <div className="bot2">
          <Lottie animationData={NewBotAnimation} loop={true} className="new-bot" />
        </div>
      )}

      {/* Messages Section */}
      <div className="inside-message">
        {elements.map((element, index) => (
          <h1 key={index}>{element}</h1>
        ))}
      </div>

      {/* Chat Input */}
      <div className="chat">
        <div className="messages">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter your question"
            className="message"
          />
          <button
            type="submit"
            className="send"
            onClick={handleSubmit}
          >
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
