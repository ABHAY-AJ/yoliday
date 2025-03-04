import React from 'react';

const PortfolioItem = ({ item }) => {
  const imgBaseUrl = import.meta.env.VITE_API_URL;
  const imageUrl = item.image?.formats?.small?.url || item.image?.url || '/placeholder.svg';

  // Extract description text
  const description =
    item.description?.map((desc) =>
      desc.children?.map((child) => child.text).join(' ')
    ).join(' ') || 'No description available.';

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* Small Screen Layout */}
      <div className="flex sm:hidden">
        <div className="w-[120px] h-[120px]">
          <img src={`${imgBaseUrl}${imageUrl}`} alt={item.title || 'No Title'} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-medium mb-2">{item.title || 'Untitled'}</h3>
            <div className="text-sm">
              <div className="font-medium">{item.language || 'Language not specified'}</div>
              <div className="text-gray-500">Oleh {item.author || 'Unknown Author'}</div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-[#F9A826] text-white font-bold w-10 h-10 rounded-md flex items-center justify-center">
              A
            </button>
          </div>
        </div>
      </div>

      {/* Large Screen Layout */}
      <div className="hidden sm:flex">
        <div className="w-[260px] h-[180px]">
          <img src={`${imgBaseUrl}${imageUrl}`} alt={item.title || 'No Title'} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-medium mb-2">{item.title || 'Untitled'}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <div className="text-sm">
              <div className="font-medium">{item.language || 'Language not specified'}</div>
              <div className="text-gray-500">By {item.author || 'Unknown Author'}</div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-[#F9A826] text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
