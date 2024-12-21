import Link from "next/link";
import React from "react";
import rush from "@/public/Car (4).png";
import CR from "@/public/Car (5).png";
import Terios from "@/public/Car (6).png";
import V from "@/public/Car (7).png";
import MG from "@/public/Car (8).png";
import NewMG from "@/public/Car (9).png";
import { CiHeart } from "react-icons/ci";
import fuel from "@/public/Gasoline.png";
import Mannual from "@/public/Car (10).png";
import Capacity from "@/public/Capacity.png";
import Image from "next/image";
const Recomended = () => {
  return (
    <div className="text-base text-gray-400 mx-6 my-12">
      <h2 className="text-xl font-bold text-gray-400 mb-8">
        Recomendation Cars
      </h2>

      {/* Responsive Grid Container */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Card Component */}
        {[
          { name: "All New Rush", type: "SUV", image: rush },
          { name: "CR-V", type: "SUV", image: CR },
          { name: "All New Terios", type: "SUV", image: Terios },
          { name: "CR-V", type: "SUV", image: V },
          { name: "MG ZX Exclusive", type: "Hatchback", image: MG },
          { name: "New MG ZS", type: "SUV", image: NewMG },
          { name: "MG ZX Excite", type: "Hatchback", image: MG },
          { name: "New MG ZS", type: "SUV", image: NewMG },
        ].map((car, index) => (
          <div
            key={index}
            className="flex flex-col p-6 bg-white rounded-xl border border-gray-200 relative shadow-sm"
          >
            {/* Heart Icon */}
            <div className="absolute top-3 right-3 w-6 h-6 cursor-pointer z-10 hover:text-red-600">
              <CiHeart />
            </div>

            {/* Header */}
            <div className="flex flex-col mb-6">
              <div className="text-xl font-semibold text-gray-900">
                {car.name}
              </div>
              <div className="mt-1 text-sm text-gray-400">{car.type}</div>
            </div>

            {/* Car Image */}
            <Image
              src={car.image}
              alt={car.name}
              className="object-contain self-center max-w-full h-auto  transform hover:scale-105 transition-transform duration-300 ease-in-out"
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
                $78.00/<span className="text-sm text-gray-400">day</span>
              </div>

              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
        <div className="flex  items-center my-6 justify-center ">
        <Link href="/Categories">
        <button className="bg-blue-700 px-4 py-2 p-2 rounded-md text-white hover:bg-blue-900 transition-colors duration-300 ease-in-out">Show more car</button>
        </Link>
        </div>
    </div>
  );
};

export default Recomended;
