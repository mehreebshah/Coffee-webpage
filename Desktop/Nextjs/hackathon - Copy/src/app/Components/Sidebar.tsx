
"use client";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar toggle button for small screens */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden fixed top-4 left-4 z-20 p-2 bg-blue-600 text-white rounded shadow-md"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar overlay for small screens */}
      <div
        className={`fixed inset-0 bg-black/30 z-10 transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } sm:hidden`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar content */}
      <div
        className={`fixed top-0 left-0 h-screen w-60 bg-white shadow-lg p-4 transition-transform transform z-20 sm:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* T Y P E Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-3 text-gray-900">T Y P E</h2>
          <ul className="space-y-3">
            {[
              { label: "Sport", count: 10 },
              { label: "SUV", count: 12 },
              { label: "MPV", count: 16 },
              { label: "Sedan", count: 20 },
              { label: "Coupe", count: 14 },
              { label: "Hatchback", count: 14 },
            ].map((type, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  id={type.label}
                  className="w-4 h-4 border-gray-300 rounded accent-blue-600 focus:ring focus:ring-blue-300"
                />
                <label htmlFor={type.label} className="ml-3 cursor-pointer">
                  {type.label} <span className="text-gray-400">({type.count})</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* C A P A C I T Y Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-3 text-gray-900">C A P A C I T Y</h2>
          <ul className="space-y-3">
            {[
              { label: "2 Person", count: 10 },
              { label: "4 Person", count: 14 },
              { label: "6 Person", count: 12 },
              { label: "8 or More", count: 16 },
            ].map((capacity, index) => (
              <li key={index} className="flex items-center text-sm text-gray-700">
                <input
                  type="checkbox"
                  id={capacity.label}
                  className="w-4 h-4 border-gray-300 rounded accent-blue-600 focus:ring focus:ring-blue-300"
                />
                <label htmlFor={capacity.label} className="ml-3 cursor-pointer">
                  {capacity.label} <span className="text-gray-400">({capacity.count})</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* P R I C E Section */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-gray-900">P R I C E</h2>
          <div className="text-sm text-gray-700">
            Max. <span className="text-gray-900 font-semibold">$100.00</span>
          </div>
          <input
            type="range"
            max="100"
            min="0"
            className="w-full mt-4 accent-blue-600"
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
