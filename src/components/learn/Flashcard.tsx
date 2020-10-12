import React, { useState } from "react";

import './Flashcard.css'

const Flashcard: React.FC = () => {

  const [flipped, setFlipped] = useState(false);
  const [frontText, setFrontText] = useState(`Hacerlo mal no importa: la es avanzar. Frase is an app that allows you
          to learn a language seamlessly and naturally through a
          spaced-repetition system.`)
  const [backText, setBackText] = useState(`The Answer`);

  return (
    <div 
      className="card flex justify-center rounded-md shadow-lg-full w-full h-full"
      onClick={ () => setFlipped(!flipped) }>
      <div className="card-body flex justify-items-start items-center w-full">
        <div className={"card-front"}>
          {frontText}
        </div>
        <div className={"card-back"}>
          {backText}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
 