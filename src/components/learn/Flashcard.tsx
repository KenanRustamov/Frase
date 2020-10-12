import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import './Flashcard.css'
import FrontFlashcard from "./FrontFlashcard";
import BackFlashCard from './BackFlashcard';

const Flashcard: React.FC = () => {

  const [flipped, setFlipped] = useState(false);
  const [frontText, setFrontText] = useState(`Hacerlo mal no importa: la es avanzar. Frase is an app that allows you
          to learn a language seamlessly and naturally through a
          spaced-repetition system.`)
  const [backText, setBackText] = useState(`The Answer`);

  return (
    <div>
      <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
        <FrontFlashcard>
          This is the front of the card.
        </FrontFlashcard>

        <BackFlashCard>
          This is the back of the card.
        </BackFlashCard>
      </ReactCardFlip>
    </div>
  );
};

export default Flashcard;
 