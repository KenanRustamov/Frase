import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import FlashcardSide from "./FlashcardSide";
import UserResponse from "./UserResponse";

const Flashcard: React.FC = () => {

  const [flipped, setFlipped] = useState(true);
  const [frontText, setFrontText] = useState(`Hacerlo mal no importa: la es avanzar. Frase is an app that allows you
          to learn a language seamlessly and naturally through a
          spaced-repetition system.`)
  const [backText, setBackText] = useState(`The Answer`);

  const toggleFlipped = () => {
    setFlipped(!flipped)
  }

  return (
    <div className="w-full h-full">
      <ReactCardFlip
        isFlipped={flipped}
        flipDirection="vertical"
        containerStyle={{ height: "100%" }}
      >
        <FlashcardSide toggleFlipped={toggleFlipped}>
          {frontText}
        </FlashcardSide>

        <FlashcardSide toggleFlipped={toggleFlipped}>
          {backText}
        </FlashcardSide>

      </ReactCardFlip>

      {flipped && <UserResponse />}
    </div>
  );
};

export default Flashcard;
 