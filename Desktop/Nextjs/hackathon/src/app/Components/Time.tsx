"use client";
import React, { useState } from "react";
import Select from "react-select";

// Define the type for the options
type TimeOption = {
  label: string; // The text to display in the dropdown
  value: string; // The value that will be used in the state
};

const Time = () => {
  const [selectedOption, setSelectedOption] = useState<TimeOption | null>(null);

  // Update the Time array to match the required structure
  const timeOptions: TimeOption[] = [
    { label: "01:00", value: "01:00" },
    { label: "02:00", value: "02:00" },
    { label: "03:00", value: "03:00" },
    { label: "04:00", value: "04:00" },
    { label: "05:00", value: "05:00" },
    { label: "06:00", value: "06:00" },
    { label: "07:00", value: "07:00" },
    { label: "08:00", value: "08:00" },
    { label: "09:00", value: "09:00" },
    { label: "10:00", value: "10:00" },
    { label: "11:00", value: "11:00" },
    { label: "12:00", value: "12:00" },
  ];

  const handleChange = (option: TimeOption | null) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md space-y-4">
      <label className="block text-gray-700 font-bold text-sm md:text-lg mb-2">
        Time
      </label>
      <Select
        options={timeOptions}
        value={selectedOption}
        onChange={handleChange}
        placeholder="Select time"
        className="text-gray-700"
        styles={{
          control: (base) => ({
            ...base,
            fontSize: "14px", // Adjust font size for small screens
          }),
        }}
      />
      {selectedOption && (
        <p className="text-sm md:text-base text-gray-600 mt-2">
          You selected:{" "}
          <span className="font-bold">{selectedOption.value}</span>
        </p>
      )}
    </div>
  );
};

export default Time;
