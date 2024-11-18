import React from "react";
import { GiEvilWings } from "react-icons/gi";
import Maerquee from "../components/Maerquee";
import About from "../components/about";

export default function Home() {
  return (
    <div className="w-full h-screen bg-white pt-1">
      <div className=" hidden sm:inline justify-between items-center">
        <div className="font-fgsemibold  h-3 w-full  text-8xl">
          <div className=" text-[#F16128] hover:text-[#004D43] transition-colors duration-300  px-80 py-30">
            <div className="px-10">WELCOME</div>
          </div>
          <div className="px-80">
            <div className="px-56 hover:text-[#F16128] transition-colors duration-300 ">
              <GiEvilWings />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-60 "></div>
      <div className="textstructure mt-60  px-3">
        <div className="masker">
          <h1 className=" text-6xl leading-[.75] tracking-tighter font-fgsemibold">
            we CREATE
          </h1>
        </div>
        <div className="masker flex items-center gap-1 ">
          <div className="mr-[.75vw] w-[6vw] rounded-md h-[3vw] -top-[.7vw]  bg-[#F16128] hover:bg-red-300 transition-colors duration-300"></div>
          <h1 className=" text-6xl  tracking-tighter leading-[.95] font-fgsemibold">
            eye-opening
          </h1>
        </div>
        <div className="masker"></div>
        <div className="masker">
          <h1 className=" text-[9vw] leading-[.95] tracking-tighter font-fgsemibold">
            SOLUTION'S
          </h1>
        </div>
      </div>
      <div className=""></div>
      <Maerquee />
      <About />
    </div>
    
  );
}
