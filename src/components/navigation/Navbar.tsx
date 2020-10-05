import React from 'react';
import Flashcard from '../../components/learn/Flashcard';

const Navbar: React.FC = () => {
    return (
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-primary p-4">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-light text-4xl tracking-tight">Frase</span>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;