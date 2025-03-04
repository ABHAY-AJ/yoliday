import React, { useState } from 'react';
import usePortfolioData from '../hooks/usePortfolioData';
import Sidebar from '../components/Sidebar';
import TopNavigation from '../components/TopNavigation';
import Tabs from '../components/Tabs';
import PortfolioItem from '../components/PortfolioItem';

const PortfolioDashboard = () => {
  const [activeTab, setActiveTab] = useState('Project');
  const [searchQuery, setSearchQuery] = useState('');
  const { portfolioItems, loading, error } = usePortfolioData();

  // Filter items based on search query
  const filteredItems = portfolioItems.filter((item) => {
    const titleMatch = item.title?.toLowerCase().includes(searchQuery.toLowerCase());
    const descriptionMatch = item.description?.some((desc) =>
      desc.children?.some((child) => child.text.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return titleMatch || descriptionMatch;
  });

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <TopNavigation />

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
        <h1 className="text-2xl font-bold mb-6 hidden sm:block">Portfolio</h1>


          {/* Tabs & Search */}
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          {/* Portfolio Items */}
          <div className="space-y-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => <PortfolioItem key={item.id} item={item} />)
            ) : (
              <p className="text-center text-gray-500">No matching projects found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDashboard;
