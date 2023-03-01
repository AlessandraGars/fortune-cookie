import React from "react";

const FortuneCookie = ({ message, setMessage }) => {
  const handleClick = () => {
    const newMessage = getRandomMessage();
    setMessage(newMessage);
  };

  function getRandomMessage() {
    return message;
  }

  return (
    <div className="cookie" onClick={handleClick}>
      <div className="fortune">{message}</div>
    </div>
  );
};

export default FortuneCookie;
