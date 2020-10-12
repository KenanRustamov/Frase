import React from 'react'

export default function FrontFlashcard({onClick, children}) {
    return (
        <div className="flex justify-center rounded-md shadow-lg-full w-full h-full">
            <div className="flex justify-items-start items-center w-full m-5">
                <div className="font-light text-4xl text-center">
                    {children}
                </div>
            </div>
        </div>
    )
};
