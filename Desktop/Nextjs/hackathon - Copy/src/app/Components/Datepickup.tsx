"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepickup = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md space-y-4">
      {/* Date Selector */}
      <div>
        <label className="block text-gray-700 font-bold text-sm md:text-lg mb-2">
          Date
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          className="w-full border border-gray-300 p-2 rounded-md text-sm md:text-base"
          dateFormat="MMMM d, yyyy"
          placeholderText="Select a date"
        />
        {selectedDate && (
          <p className="text-sm md:text-base text-gray-600 mt-2">
            You selected:{" "}
            <span className="font-bold">
              {selectedDate.toLocaleDateString()}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Datepickup;
