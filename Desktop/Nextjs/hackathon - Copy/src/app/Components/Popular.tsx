
import React from "react";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import Koeingsegg from "@/public/car.png";
import Image from "next/image";
import fuel from "@/public/Gasoline.png";
import Mannual from "@/public/Car (10).png";
import Capacity from "@/public/Capacity.png";
import Nisan from "@/public/car(1).png";
import Rolls from "@/public/Car (2).png";

const Popular = () => {
  return (
    <div className="text-base text-gray-400 mx-6 my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Cars</h2>
      <Link href="/Products" className="text-blue-500 underline">
        View All
      </Link>
      
      {/* Responsive Grid Container */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Card Component */}
        {[ 
          { name: "Koenigsegg", type: "Sport", image: Koeingsegg },
          { name: "Nissan GT-R", type: "Sport", image: Nisan },
          { name: "Rolls-Royce", type: "Sedan", image: Rolls },
          { name: "Nissan GT-R", type: "Sport", image: Nisan },
        ].map((car, index) => (
          <div
            key={index}
            className="flex flex-col p-6 bg-white rounded-xl border border-gray-200 relative shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg"
          >
            {/* Heart Icon */}
            <div className="absolute top-3 right-3 w-6 h-6 cursor-pointer z-10 hover:text-red-600">
              <CiHeart />
            </div>

            {/* Header */}
            <div className="flex flex-col mb-6">
              <div className="text-xl font-semibold text-gray-900">{car.name}</div>
              <div className="mt-1 text-sm text-gray-400">{car.type}</div>
            </div>

            {/* Car Image */}
            <Image
              src={car.image}
              alt={car.name}
              className="object-contain self-center max-w-full h-auto transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />

            {/* Features */}
            <div className="flex gap-4 items-center mt-6 text-sm font-medium text-gray-400">
              <Image src={fuel} alt="Fuel" />
              <Image src={Mannual} alt="Manual" />
              <Image src={Capacity} alt="Capacity" />
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6">
              <div className="text-xl font-bold text-gray-900">
                $99.00/ <span className="text-sm text-gray-400">day</span>
              </div>
             <Link href='/Detail'>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Rent Now
              </button>
             </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
