/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";

const Footer = () => {
  return (
    <div className="footer2">
      <div className="footer-gradient" />
      <div className="mx-auto flex flex-col gap-8">
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-black opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="roommie font-thin text-[24px] leading-[30px] text-black text-center footer ">
              <p>R</p>
              <p>O</p>
              <p>O</p>
              <p>M</p>
              <p>M</p>
              <p>I</p>

              <div className="title2 grid gap-1 md:gap-1">
                <div className="e"></div>
                <div className="e"></div>
                <div className="e"></div>
              </div>
            </div>{" "}
            <p className="font-normal text-[14px] text-black opacity-50">
              Copyright © 2022 - Roommie. All right reserved
            </p>


            <div className="flex gap-5">
              <button>
                <a
                  href="https://www.linkedin.com/company/roommie/about/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-400"
                >
                  <img src="/linkedin-icon.png" width="27"  />
                </a>
              </button>

              <button className="btn">
                <a
                  href="https://instagram.com/roommieofficial?igshid=YmMyMTA2M2Y="
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white"
                >
                  <img src="/instagram-icon.png" width="27"  />
                </a>
              </button>

              <button className="btn">
                <a
                  href="https://www.facebook.com/RoommieOfficial/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-400"
                >
                  <img src="/facebook.png" width="27"/>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
