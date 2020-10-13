import React from 'react'

export const Deck: React.FC = () => {
    return (
      <div className="rounded-md border-solid border-2 border-black cursor-pointer sm:w-full md:w-1/4 mt-8 mr-5">
        <div className="font-light h-full m-3">
          <div className="text-4xl ">Deck Name</div>
          <div className="mt-2 text-2xl">Number of Terms</div>
          <div className="mt-12">Created by: Elijah Kajinic</div>
        </div>
      </div>
    );
};
