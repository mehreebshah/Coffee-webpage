import React from "react";
import view from "@/public/View.png";
import view1 from "@/public/View 1.png";
import view2 from "@/public/View 2.png";
import view3 from "@/public/View 3.png";
import Image from "next/image";
import CarDetail from "./CarDetail";
import Sidebar from "@/app/Components/Sidebar";
import ReviewsSection from "./Review";


const Catelog = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col lg:flex-row mt-6">
        {/* Left Section: Images */}
        <div className="flex flex-col items-center lg:items-start lg:ml-60 lg:w-2/3 px-4 mb-8 lg:mb-0">
          <Image src={view} alt="Nissan GT-R" className="w-full lg:w-auto" />
          <div className="flex flex-row sm:flex-wrap gap-4 mt-8 justify-center lg:justify-center ">
            <Image src={view1} alt="Car View 1" className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg" />
            <Image src={view2} alt="Car View 2" className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg" />
            <Image src={view3} alt="Car View 3" className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg" />
          </div>
      <ReviewsSection/>

        </div>

        {/* Right Section: Car Detail */}
        <div className="lg:w-1/3 px-4">
          <CarDetail />
        </div>
      </div>
    </div>
  );
};

export default Catelog;
