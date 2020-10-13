import React from 'react';

const Navbar: React.FC = () => {
    return (
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-primary p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-light text-5xl tracking-tight">Frase</span>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;