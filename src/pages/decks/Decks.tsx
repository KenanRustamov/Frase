import React from 'react'
import Navbar from '../../components/navigation/Navbar'
import { Deck } from './Deck'

const Decks: React.FC = () => {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto pt-20">
          <div className="flex justify-between ml-5 lg-ml-0 w-4/5">
            <p className="text-4xl font-light">Most Recent</p>
            <p className="text-2xl font-light mt-3">View All &gt;</p>
          </div>
          <div className="flex w-full flex-wrap">
            <Deck />
            <Deck />
            <Deck />
            <Deck />
            <Deck />
          </div>
        </div>
      </div>
    );
}

export default Decks;
