import React from "react";
import { Home, Car, BarChart, Calendar, Mail, Settings, HelpCircle, Moon, Sun } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-100 text-gray-700 flex flex-col shadow-lg">
      {/* Main Menu */}
      <div className="p-4 text-sm font-semibold text-gray-400">MAIN MENU</div>
      <nav className="flex-1 p-4 space-y-2">
        <MenuItem  icon={<Home />} label="Dashboard" active  />
        <MenuItem icon={<Car />} label="Car Rent" />
        <MenuItem icon={<BarChart />} label="Insight" />
        <MenuItem icon={<Mail />} label="Reimburse" />
        <MenuItem icon={<Mail />} label="Inbox" />
        <MenuItem icon={<Calendar />} label="Calender" />
      </nav>

      {/* Preferences */}
      <div className="p-4 text-sm font-semibold text-gray-500">PREFERENCES</div>
      <nav className="p-4 space-y-2">
        <MenuItem icon={<Settings />} label="Settings" />
        <MenuItem icon={<HelpCircle />} label="Help & Center" />
        <MenuItem icon={<Moon />} label="Dark Mode" toggle />
      </nav>

      {/* Footer */}
      <div className="p-4 mt-auto">
        <MenuItem icon={<Home />} label="Logout" />
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label, active, toggle }: { icon: React.ReactNode; label: string; active?: boolean; toggle?: boolean }) => {
  return (
    <div
      className={`flex items-center gap-3 p-2 rounded-lg hover:bg-blue-500 hover:text-white ${
        active ? "bg-blue-500 text-white" : "hover:bg-gray-200"
      } cursor-pointer` }
    >
      <div className={`w-5 h-5  hover:text-white ${active ? "text-white" : "text-gray-500"}`}>{icon}</div>
      <span className="flex-1">{label}</span>
      {toggle && (
        <div className="flex items-center space-x-1">
          <Sun className="w-4 h-4 text-gray-500" />
          <Moon className="w-4 h-4 text-gray-500" />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
