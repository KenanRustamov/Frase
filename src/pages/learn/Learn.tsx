import React from "react";
import Flashcard from "../../components/learn/Flashcard";
import Navbar from "../../components/navigation/Navbar";

import './Learn.css'

const Landing: React.FC = () => {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center mt-8">
          <div className="flashcard flex justify-center md:w-4/5 lg:w-2/5">
            <Flashcard />
          </div>
        </div>
      </div>
    );
}

export default Landing;