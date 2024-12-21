"use client";
import car1 from "@/public/Car (4).png";
import car2 from "@/public/Car (5).png";
import car3 from "@/public/Car (6).png";
import car4 from "@/public/Car (7).png";
import React from "react";
import Image from "next/image";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Dummy data for the chart
const chartData = [
  { name: "Sport Car", value: 17439 },
  { name: "SUV", value: 9478 },
  { name: "Coupe", value: 18197 },
  { name: "Hatchback", value: 12510 },
  { name: "MPV", value: 14406 },
];

// Colors for the chart
const COLORS = ["#0D3559", "#175D9C", "#2185DE", "#63A9E8", "#A6CEF2"];

// Dummy data for recent transactions
const transactions = [
  {
    id: 1,
    carImage: car1,
    name: "Nissan GT - R",
    type: "Sport Car",
    date: "20 July",
    price: "$80.00",
  },
  {
    id: 2,
    carImage: car2,
    name: "Koenigsegg",
    type: "Sport Car",
    date: "19 July",
    price: "$99.00",
  },
  {
    id: 3,
    carImage: car3,
    name: "Rolls - Royce",
    type: "Sport Car",
    date: "18 July",
    price: "$96.00",
  },
  {
    id: 4,
    carImage: car4,
    name: "CR - V",
    type: "SUV",
    date: "17 July",
    price: "$80.00",
  },
];

const CarRentalDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Top 5 Car Rental */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Top 5 Car Rental
          </h3>
          <div className="flex flex-col lg:flex-row justify-between items-center mt-6">
            {/* Pie Chart */}
            <div className="w-full lg:w-1/2 h-64">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    fill="#007bff"
                    paddingAngle={5}
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center font-bold text-2xl">
                72,030
              </div>
              <p className="text-center text-sm text-gray-500">Rental Car</p>
            </div>

            {/* Legend */}
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-8 space-y-3">
              {chartData.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                  <span className="text-gray-500">
                    {item.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Recent Transactions
            </h3>
            <button className="text-blue-500 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="mt-4 space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center bg-gray-100 rounded-lg p-4"
              >
                <Image
                  src={transaction.carImage}
                  alt={transaction.name}
                  width={64}
                  height={40}
                  className="rounded-lg"
                />
                <div className="ml-4 flex-grow">
                  <h4 className="text-md font-medium text-gray-800">
                    {transaction.name}
                  </h4>
                  <p className="text-sm text-gray-500">{transaction.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                  <p className="text-md font-bold text-gray-800">
                    {transaction.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentalDashboard;
