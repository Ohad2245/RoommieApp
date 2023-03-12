/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/router";

const ChooseOffer = () => {
    const handleClick = () =>{
        router.push("/Seeking")
    }
    const handleClick2 = () =>{
        router.push("/Offering")
    }
  const router = useRouter();

  return (
    <div className="auto-max">
      <div className="flex justify-center items-center h-full">
        <div className="glass">
          <div className="flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Choose
            </span>
            <div className="flex gap-5">
            <button className="seeking" data-hover='test' onClick={handleClick}>
                <h1>Seeking?</h1>
              <img
                src="/4fc2ba69-2011-4876-8178-28731ed094e7.jpg"
                
                className="img1"
              />
              </button>
              <button className="offering" onClick={handleClick2}>
              <h1>Offering?</h1>

               <img
                src="/planet-02.png"
                className="img2"

              />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseOffer;