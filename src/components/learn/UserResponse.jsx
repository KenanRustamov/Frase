import React from 'react'

export default function UserResponse() {
    return (
        <div className="flex mt-8 justify-around">
            <button class="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-2/5">
                Incorrect
            </button>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-2/5">
                Correct
            </button>
        </div>
    )
};
