import React, { useState } from "react";
import FortuneCookie from "./components/FortuneCookie";
import messages from "./components/messages";
import "./App.css";

function App(){
  const [message, setMessage] = useState(getRandomMessage());

  function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }

  function handleClick() {
    const newMessage = getRandomMessage();
    setMessage(newMessage);

  }

  const fondo = [
    1, 2, 3, 4
  ]

  const [indexFondo, setIndexFondo] = useState(0)

  const changeFondo = () => {
    if (indexFondo === fondo.length -1) {
      setIndexFondo(0);
    }
    else {
      setIndexFondo(indexFondo + 1)
    }
  }
  
  return (
    <div className="container" style={{backgroundImage: "url('fondo"+fondo[indexFondo]+".png')"}}>
      <h1 className="title">Galleta de la fortuna</h1>
      <div className="cookie-container">
        <div className="cookie-wrapper">
          <div className="cookie" onClick={() => {handleClick(), changeFondo()}}>
            <FortuneCookie message={message} />
          </div>
          <button onClick={() => {handleClick(), changeFondo()}} className="button">
            ¡Abrir galleta!
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
