import React from "react";
import Image from "next/image";
import Nisan from "@/public/Car (3).png";
import mark from "@/public/mark.png";
import Locationdropdown from "./Locationdropdown";
import Datepickup from "./Datepickup";
import Time from "./Time";
import map from "@/public/Maps.png";
const RentalDetails = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Map Section */}
      <div className=" rounded-lg  mb-4 flex items-center justify-center">
        <Image src={map} alt="mark" width={500}  />
      </div>

      {/* Car Information */}
      <div className="flex flex-col sm:flex-row items-center mb-4 gap-4">
        <Image
          src={Nisan}
          alt="Car"
          width={100}
          height={60}
          className="rounded-lg"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">Nissan GT - R</h3>
          <p className="text-sm text-gray-500">Sport Car</p>
        </div>
        <div className="text-gray-500 font-medium">#9761</div>
      </div>

      {/* Pick-Up and Drop-Off Details */}
      <div className="mb-6  gap-6">
        {/* Pick-Up */}
        <div className="border border-gray-300 shadow-lg p-4 rounded-md bg-white">
          <div className="flex items-center mb-4">
            <Image src={mark} alt="mark" width={24} height={24} />
            <h1 className="text-lg md:text-xl font-semibold ml-2">Pick-Up</h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <Locationdropdown />
            <Datepickup />
            <Time />
          </div>
        </div>

        {/* Drop-Off */}
        <div className="border border-gray-300 shadow-lg p-4 rounded-md bg-white">
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

      {/* Price Section */}
      <div className="border-t pt-4">
        <h4 className="text-sm font-semibold text-gray-700">Total Rental Price</h4>
        <p className="text-xs text-gray-500 mb-2">
          Overall price and includes rental discount
        </p>
        <p className="text-2xl font-bold text-blue-500">$80.00</p>
      </div>
    </div>
  );
};

export default RentalDetails;
