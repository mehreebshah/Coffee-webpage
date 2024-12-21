import React from "react";
import Fivestar from "./Fivestar";
import Link from "next/link";
const CarDetail = () => {
  return (
    <div>
      <section className="bg-white border w-full max-w-[492px] h-auto border-gray-200 rounded-lg shadow-lg p-6 mx-auto">
        <div className="flex flex-col gap-4">
          {/* Car Title and Reviews */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Nissan GT-R</h2>
            <div className="flex items-center gap-2 opacity-100">
              <div className="p-6">
                {/* Example with a rating of 3 */}
                <div className="flex items-center">
                  <Fivestar rating={3} />
                  <span className="ml-2 text-sm text-gray-600">3/5</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">440+ Reviewer</p>
            </div>
          </div>

          {/* Car Description */}
          <div>
            <p className="text-gray-700 text-sm md:text-base">
              NISMO has become the embodiment of Nissan&apos;s outstanding
              performance, inspired by the most unforgiving proving ground,
              &quot;the race track.
            </p>
          </div>

          {/* Car Details */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-sm">Type</p>
              <p className="text-sm">Sport</p>
            </div>
            <div>
              <p className="font-semibold text-sm">Capacity</p>
              <p className="text-sm">2 Person</p>
            </div>
            <div>
              <p className="font-semibold text-sm">Steering</p>
              <p className="text-sm">Manual</p>
            </div>
            <div>
              <p className="font-semibold text-sm">Fuel</p>
              <p className="text-sm">Gasoline</p>
            </div>
            <div>
              <p className="font-semibold text-sm">Fuel Capacity</p>
              <p className="text-sm">70 L</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-lg font-bold text-gray-800">$80.00 / day</p>
            <p className="line-through text-gray-500">$100.00</p>
          </div>

          {/* Rent Button */}
          <Link href="/Dashboard">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mt-4">
              Rent Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CarDetail;
