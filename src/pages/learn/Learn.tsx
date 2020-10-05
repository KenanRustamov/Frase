import React from "react";
import Flashcard from "../../components/learn/Flashcard";
import Navbar from "../../components/navigation/Navbar";

const Landing: React.FC = () => {
    return (
      <div>
        <Navbar />
        <div className="flex justify-center mt-8">
          <div className="flex justify-center h-64 items-center rounded-md w-2/5 border border-teal-700">
            <Flashcard />
            <div>Test 2</div>
          </div>
        </div>
      </div>
    );
}

export default Landing;