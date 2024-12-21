
import React from "react";
import Sidebar from "./Sidebar";
import Popular from "./Popular";
import Recomended from "./Recomended";
import Address from "./Address";

const MainPage = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-[360px]  h-[1600px]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:ml-30 xl:ml-60">
        {/* Address, Popular, and Recommended Sections */}
        <Address />
        <Popular />
        <Recomended />
      </div>
    </div>
  );
};

export default MainPage;
