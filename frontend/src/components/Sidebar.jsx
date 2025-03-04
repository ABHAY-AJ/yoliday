import React from 'react';
import { Package, FileInput as Input, User, Home } from 'lucide-react';
import NavItem from './NavItem';
import Vector from "../assets/Vector.png"
import profile from "../assets/profile.png"
import portfolio from "../assets/portfolio.png"
import input from "../assets/input.png"
import Group from "../assets/Group.png"

const Sidebar = () => {
  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="hidden sm:flex w-[212px] bg-[#E84C24] text-white flex-col">
        <div className="p-6 flex items-center">
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center mr-2">
            <div><img src={Group}></img></div>
          </div>
          <span className="font-bold text-lg">LOGO</span>
        </div>

        <div className="mt-8">
          <NavItem icon={<img src={Vector} alt='dash'></img>} label="Dashboard" />
          <NavItem icon={<img src={portfolio} alt='port'></img>} label="Portfolio" active />
          <NavItem icon={<img src={input} alt='input'></img>} label="Inputs" />
          <NavItem icon={<img src={profile} alt='profile'></img>} label="Profile" />
        </div>
      </div>

     {/* Bottom navigation for small screens */}
<div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t py-2">
  <div className="flex justify-around items-center">
    <div className="flex flex-col items-center">
      <NavItem icon={<Home size={24} className="text-orange-500" />} />
      <span className="text-xs">Home</span>
    </div>
    <div className="flex flex-col items-center">
      <NavItem icon={<Package size={24} className="text-orange-500" />} active />
      <span className="text-xs">Portfolio</span>
    </div>
    <div className="flex flex-col items-center">
      <NavItem icon={<Input size={24} className="text-orange-500" />} />
      <span className="text-xs">Input</span>
    </div>
    <div className="flex flex-col items-center">
      <NavItem icon={<User size={24} className="text-orange-500" />} />
      <span className="text-xs">Profile</span>
    </div>
  </div>
</div>


    </>
  );
};

export default Sidebar;
