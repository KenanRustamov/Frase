import React from 'react'

export default function FrontFlashcard({children}) {
    return (
        <div className="flex justify-center rounded-md shadow-lg-full w-full h-full">
            <div className="flex justify-items-start items-center w-full">
                {children}
            </div>
        </div>
    )
};
