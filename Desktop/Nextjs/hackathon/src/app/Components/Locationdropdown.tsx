"use client";
import React, { useState } from "react";
import Select from "react-select";

type LocationOption = {
  value: string;
  label: string;
};

const Locationdropdown = () => {
  const [selectedOption, setSelectedOption] = useState<LocationOption | null>(
    null
  );

  const locations = [
    { value: "Karachi", label: "Karachi" },
    { value: "lahore", label: "Lahore" },
    { value: "Islamabad", label: "Islamabad" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Faisalabad", label: "Faisalabad" },
  ];

  const handleChange = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md">
      {/* Label */}
      <label className="block text-gray-700 font-bold text-sm md:text-lg mb-2">
        Locations
      </label>

      {/* Dropdown */}
      <Select
        options={locations}
        value={selectedOption}
        onChange={handleChange}
        placeholder="Select your city"
        className="text-gray-700 outline-none"
        styles={{
          control: (base) => ({
            ...base,
            fontSize: "14px", // Adjust size for responsiveness
          }),
        }}
      />

      {/* Selected Option */}
      {selectedOption && (
        <p className="text-sm md:text-base text-gray-600 mt-2">
          You selected: <span className="font-bold">{selectedOption.label}</span>
        </p>
      )}
    </div>
  );
};

export default Locationdropdown;
