import React from 'react'

import './UserResponse.css'

export default function UserResponse() {
    return (
        <div className="flex mt-8 justify-around">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-2/5 button-style">
                Incorrect
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-2/5 button-style">
                Correct
            </button>
        </div>
    )
};
