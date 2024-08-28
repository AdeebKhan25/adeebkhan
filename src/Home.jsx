import React, { useState } from "react";
import Adeeb from "./assets/Adeeb.jpg";

function Home() {
  return (
    <main className="flex-grow flex flex-col justify-center items-center">
      <div className="h-1/4 sm:h-60 md:h-60 lg:h-80 w-3/4 sm:w-60 md:w-60 lg:w-80 flex justify-center items-center">
        <img
          className="rounded-full animate-fadeIn"
          src={Adeeb}
          alt="Profile Pic"
        />
      </div>
      <div className="animate-fadeUp text-center mt-4 text-gray-500 font-pPins">
        M.Tech CSE'25 @ MNNIT Allahabad <br />
        B.Tech CSE'22 @ BIET Jhansi <br />
        Software Developer || ML Enthusiast <br />
        Competitive Coder
      </div>
    </main>
  );
}

export default Home;
