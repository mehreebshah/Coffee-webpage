import React from "react";
import picker from "@/public/Switch.png";
import Image from "next/image";
import Mark from "@/public/mark.png";
import Locationdropdown from "./Locationdropdown";
import Datepickup from "./Datepickup";
import PayPal from "@/public/PayPal.png";
import BitCoin from "@/public/Bitcoin.png";
import Time from "./Time";
const Dashboard = () => {
  return (
    <div className="bg-white w-full max-w-4xl mt-12 shadow-md shadow-gray-500 p-8 rounded-lg">
      <form>
        {/* Form Header */}
        <div className="text-gray-900 font-semibold mb-6">
          <h1 className="text-xl">Billing Info</h1>
          <p className="text-sm text-gray-500">
            Please enter your billing info
          </p>
          <p className="text-sm text-gray-500 mt-1">Step 1 of 4</p>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-lg text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-transparent border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-lg text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="tel"
              placeholder="Phone number"
              className="w-full bg-transparent border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-lg text-gray-700 mb-2">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="w-full bg-transparent border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Town/City Field */}
          <div>
            <label className="block text-lg text-gray-700 mb-2">
              Town / City
            </label>
            <input
              type="text"
              name="city"
              placeholder="Town or city"
              className="w-full bg-transparent border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </form>

      {/* Rental Info */}
      {/* Form Header */}
      <div className="text-gray-900 font-semibold mb-6">
        <h1 className="text-xl">Rental Info</h1>
        <p className="text-sm text-gray-500">Please select your rental date</p>
        <p className="text-sm text-gray-500 mt-1">Step 2 of 4</p>
        <Image src={Mark} alt="Mark" className="mt-2" />
        <p>Pick-Up</p>
      </div>
      {/* Form Fields */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <Locationdropdown />
          <Datepickup />
          <Time />
        </div>
      </form>

      {/* Rental Info */}
      {/* Form Header */}
      <div className="text-gray-900 font-semibold mb-6">
        <h1 className="text-xl">Rental Info</h1>
        <p className="text-sm text-gray-500">Please select your rental date</p>
        <p className="text-sm text-gray-500 mt-1">Step 3 of 4</p>
        <Image src={Mark} alt="Mark" className="mt-2" />
        <p>Drop-down</p>
      </div>
      {/* Form Fields */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <Locationdropdown />
          <Datepickup />
          <Time />
        </div>
      </form>
      {/* Form Fields */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <Locationdropdown />
          <Datepickup />
          <Time />
        </div>
      </form>

      {/* Rental Info */}
      {/* Form Header */}
      <div className="text-gray-900 font-semibold mb-6">
        <h1 className="text-xl">Payment Method</h1>
        <p className="text-sm text-gray-500">
          Please enter your payment method
        </p>
        <p className="text-sm text-gray-500 mt-1">Step 3 of 4</p>
        <Image src={Mark} alt="Mark" className="mt-2" />
        <p>Credit Card</p>
      </div>
      {/* Form Fields */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <label className="block text-lg text-gray-700 mb-2">
              CardNumber
            </label>
            <input
              type="text"
              placeholder="CardNumber"
              className="w-full bg-transparent border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg text-gray-700 mb-2">
              Expration Date
            </label>
            <input
              type="date"
              placeholder="Expration Date"
              className="w-full bg-transparent border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg text-gray-700 mb-2">
              Card Holder
            </label>
            <input
              type="text"
              placeholder="Card Holder"
              className="w-full bg-transparent border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg text-gray-700 mb-2">CVC</label>
            <input
              type="text"
              placeholder="CVC"
              className="w-full bg-transparent border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </form>
      <form className="grid grid-cols-1 gap-6">
        {/* PayPal Option */}
        <div className="flex items-center gap-4">
          <input
            type="radio"
            id="PayPal"
            name="paymentMethod"
            value="PayPal"
            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="PayPal"
            className="flex items-center gap-2 cursor-pointer"
          >
            <Image src={PayPal} alt="PayPal" width={40} height={40} />
            <span className="text-gray-700">PayPal</span>
          </label>
        </div>

        {/* Bitcoin Option */}
        <div className="flex items-center gap-4">
          <input
            type="radio"
            id="BitCoin"
            name="paymentMethod"
            value="BitCoin"
            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="BitCoin"
            className="flex items-center gap-2 cursor-pointer"
          >
            <Image src={BitCoin} alt="Bitcoin" width={40} height={40} />
            <span className="text-gray-700">Bitcoin</span>
          </label>
        </div>

        {/* Selected Payment */}
        <div className="mt-4">
          <p className="text-gray-800">
            Selected Payment Method:{" "}
            <span className="font-semibold">PayPal</span>
          </p>
        </div>
      </form>
      <div className="text-gray-900 font-semibold mb-6">
        <h1 className="text-xl">Confirmation</h1>
        <p className="text-sm text-gray-500">
          We are getting to the end. Just few clicks and your rental is ready!
        </p>
        <p className="text-sm text-gray-500 mt-1">Step 4 of 4</p>
      </div>
      <form className="grid grid-cols-1 gap-6">
        {/* PayPal Option */}
        <div className="flex items-center gap-4">
          <input
            type="radio"
            id="PayPal"
            name="paymentMethod"
            value="PayPal"
            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="PayPal"
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-gray-700">
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </span>
          </label>
        </div>

        {/* Bitcoin Option */}
        <div className="flex items-center gap-4">
          <input
            type="radio"
            id="BitCoin"
            name="paymentMethod"
            value="BitCoin"
            className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="BitCoin"
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-gray-700">
              I agree with our terms and conditions and privacy policy.
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full"
        >
          Rent Now
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
