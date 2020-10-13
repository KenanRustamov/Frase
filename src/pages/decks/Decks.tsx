import React from 'react'
import Navbar from '../../components/navigation/Navbar'
import { Deck } from './Deck'

const Decks: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto pt-20">
                <p className="text-4xl font-light">Most Recent</p>
                <div className="flex w-full flex-wrap">
                    <Deck />
                    <Deck />
                    <Deck />
                    <Deck />
                    <Deck />
                </div>
            </div>
        </div>
    )
}

export default Decks;
