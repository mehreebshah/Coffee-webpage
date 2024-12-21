
import React from "react";
import mark from "@/public/mark.png";
import Image from "next/image";
import Locationdropdown from "./Locationdropdown";
import Datepickup from "./Datepickup";
import Time from "./Time";
import picker from "@/public/Switch.png";

function Address() {
  return (
    <div className="flex flex-col lg:flex-row justify-between mx-4 md:mx-8 lg:mx-16 gap-6">
      {/* Pick-Up Section */}
      <div className="border border-gray-300 shadow-lg flex-grow max-w-[490px] lg:max-w-[45%] p-4 rounded-md bg-white">
        <div className="flex items-center mb-4">
          <Image src={mark} alt="mark" width={24} height={24} />
          <h1 className="text-lg md:text-xl font-semibold ml-2">Pick-Up</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-4  mx-2 sm:gap-8">
          <Locationdropdown />
          <Datepickup />
          <Time />
        </div>
      </div>

      {/* Switcher in the middle */}
      <div className="flex items-center justify-center lg:justify-start my-4 lg:my-0">
        <Image src={picker} alt="switcher" className="w-16 h-16 md:w-20 md:h-20" />
      </div>

      {/* Drop-Off Section */}
      <div className="border border-gray-300 shadow-lg flex-grow max-w-full lg:max-w-[45%] p-4 rounded-md bg-white">
        <div className="flex items-center mb-4">
          <Image src={mark} alt="mark" width={24} height={24} />
          <h1 className="text-lg md:text-xl font-semibold ml-2">Drop-off</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <Locationdropdown />
          <Datepickup />
          <Time />
        </div>
      </div>
    </div>
  );
}

export default Address;
