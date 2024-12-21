// import React from 'react'
// import Sidebar from './SideBarMenu'
// import RentalDetails from './RentalDetail'
// import CarRentalDashboard from './RentalDashboard'
// const AdminDashboard = () => {
//   return (
//     <div >
//       <Sidebar/>
//       <RentalDetails/>
//       <CarRentalDashboard/>
//     </div>
//   )

// }
// export default AdminDashboard
import React from "react";
import Sidebar from "./SideBarMenu";
import RentalDetails from "./RentalDetail";
import CarRentalDashboard from "./RentalDashboard";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col max-w-[1440px] lg:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div className="lg:w-1/4 bg-white shadow-lg rounded-lg p-4">
        <Sidebar />
      </div>

      {/* Rental Details */}
      <div className="lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
        <RentalDetails />
      </div>

      {/* Car Rental Dashboard */}
      <div className="lg:w-1/4">
        <CarRentalDashboard />
      </div>
    </div>
  );
};

export default AdminDashboard;
