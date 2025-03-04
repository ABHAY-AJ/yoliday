import React from 'react';
import { Filter, Search } from 'lucide-react';

const Tabs = ({ activeTab, setActiveTab, searchQuery, setSearchQuery }) => {
  const tabs = ['Project', 'Saved', 'Shared', 'Achievement'];

  return (
    <>
      {/* Desktop Layout */}
      <div className="mb-6 hidden sm:block">
        <div className="flex justify-between items-center">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={` cursor-pointer px-6 py-3 font-medium ${
                  activeTab === tab ? 'text-[#E84C24] border-b-2 border-[#E84C24]' : 'text-gray-500'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center">
            <button className="flex items-center px-3 py-2 rounded-md mr-4">
              <Filter size={18} className="mr-2" />
              <span>Filter</span>
            </button>

            <div className="relative">
              <input
                type="text"
                placeholder="Search a project"
                className="pl-3 pr-10 py-2 border border-black-500/50 rounded-md w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#E84C24] p-1 rounded-md">
                <Search size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden px-4 pt-4">

        {/* Tabs - Mobile View (Stacked) */}
        <div className="flex justify-between">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === tab ? 'text-[#E84C24] border-b-2 border-[#E84C24]' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search a project"
              className="w-full pl-4 pr-12 py-3 border rounded-full text-gray-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#E84C24] p-2 rounded-full">
              <Search size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Filter Button */}
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2">
          <button className="bg-[#E84C24] text-white px-8 py-3 rounded-full flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            <span>Filter</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Tabs;
