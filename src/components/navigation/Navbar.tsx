import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-primary p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-light text-3xl tracking-tight">
              <Link to="/">Frase</Link>
            </span>
            <span className="font-light text-3xl tracking-tight ml-5">
              <Link to="/decks">Decks</Link>
            </span>
            <span className="font-light text-3xl tracking-tight ml-5">
              <Link to="/learn">Learn</Link>
            </span>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;