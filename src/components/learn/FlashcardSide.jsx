import React from 'react'

export default function FlashcardSide({toggleFlipped, children}) {
    return (
        <div className="rounded-md shadow-lg-full w-full h-full" onClick={() => toggleFlipped()}>
            <div className="font-light text-4xl h-full flex justify-center items-center m-5">
                <div className="text-center">{children}</div>
            </div>
        </div>
    )
};
