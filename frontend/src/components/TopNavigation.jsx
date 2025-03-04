import React from 'react';
import { Bell, ShoppingBag, ChevronDown } from 'lucide-react';
import user from "../assets/user.png"

const TopNavigation = () => {
  return (
    <>
      {/* Desktop Layout */}
      <div className="h-16 shadow-md flex items-center justify-end px-6 hidden sm:flex">
        <div className="flex items-center">
          {/* Notification Icon */}
          <div className="relative mr-4">
            <Bell size={20} />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
              1
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center">
            <img
              src={`${user}`}
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-2">
              <div className="flex items-center">
                <span className="font-medium">Lorem Ips</span>
                <ChevronDown size={16} className="ml-1" />
              </div>
              <span className="text-sm text-gray-500">Manager</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="px-6 py-4 flex justify-between items-center sm:hidden">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <div className="flex items-center space-x-4">
          <ShoppingBag className="w-6 h-6 text-[#E84C24]" />
          <Bell className="w-6 h-6 text-[#E84C24]" />
        </div>
      </div>
    </>
  );
};

export default TopNavigation;
