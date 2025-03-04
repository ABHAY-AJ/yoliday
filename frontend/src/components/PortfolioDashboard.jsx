// import React, { useState } from 'react';
// import { Bell, ChevronDown, Filter, Search, LayoutGrid, Package, FileInputIcon as Input, User } from 'lucide-react';
// import NavItem from './NavItem';
// import usePortfolioData from '../hooks/usePortfolioData';

// const PortfolioDashboard = () => {
//   const [activeTab, setActiveTab] = useState('Project');
//   const [searchQuery, setSearchQuery] = useState('');
//   const { portfolioItems, loading, error } = usePortfolioData();
//   console.log("sffff",portfolioItems)

//   const tabs = ['Project', 'Saved', 'Shared', 'Achievement'];

//   if (loading) {
//     return <div className="flex justify-center items-center h-screen">Loading...</div>;
//   }

//   if (error) {
//     return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;
//   }

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-[212px] bg-[#E84C24] text-white flex flex-col">
//         <div className="p-6 flex items-center">
//           <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center mr-2">
//             <div className="w-4 h-4 rounded-full border-2 border-white"></div>
//           </div>
//           <span className="font-bold text-lg">LOGO</span>
//         </div>

//         <div className="mt-8">
//           <NavItem icon={<LayoutGrid size={20} />} label="Dashboard" />
//           <NavItem icon={<Package size={20} />} label="Portfolio" active />
//           <NavItem icon={<Input size={20} />} label="Inputs" />
//           <NavItem icon={<User size={20} />} label="Profile" />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Top Navigation */}
//         <div className="h-16 border-b flex items-center justify-end px-6">
//           <div className="flex items-center">
//             <div className="relative mr-4">
//               <Bell size={20} />
//               <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
//                 1
//               </div>
//             </div>
//             <div className="flex items-center">
//               <img
//                 src="/placeholder.svg?height=40&width=40"
//                 alt="User"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div className="ml-2">
//                 <div className="flex items-center">
//                   <span className="font-medium">Lorem Ips</span>
//                   <ChevronDown size={16} className="ml-1" />
//                 </div>
//                 <span className="text-sm text-gray-500">Manager</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Content Area */}
//         <div className="flex-1 overflow-auto p-6">
//           <h1 className="text-2xl font-bold mb-6">Portfolio</h1>

//           {/* Tabs */}
//           <div className="border-b mb-6">
//             <div className="flex justify-between items-center">
//               <div className="flex">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab}
//                     className={`px-6 py-3 font-medium ${
//                       activeTab === tab ? 'text-[#E84C24] border-b-2 border-[#E84C24]' : 'text-gray-500'
//                     }`}
//                     onClick={() => setActiveTab(tab)}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>

//               <div className="flex items-center">
//                 <button className="flex items-center px-3 py-2 border rounded-md mr-4">
//                   <Filter size={18} className="mr-2" />
//                   <span>Filter</span>
//                 </button>

//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Search a project"
//                     className="pl-3 pr-10 py-2 border rounded-md w-64"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                   />
//                   <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#E84C24] p-1 rounded-md">
//                     <Search size={18} className="text-white" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Portfolio Items */}
//           <div className="space-y-6">
//             {portfolioItems.map((item) => (
//               <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
//                 <div className="flex">
//                   <div className="w-[260px] h-[180px]">
//                     <img
//                       src={
//                         item.image?.data?.attributes?.url ||
//                         '/placeholder.svg'
//                       }
//                       alt={item.title || 'No Title'}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="flex-1 p-6 flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-xl font-medium mb-2">
//                         {item.title || 'Untitled'}
//                       </h3>
//                       <p className="text-gray-600 text-sm mb-4">
//                         {item.description || 'No description available.'}
//                       </p>
//                       <div className="text-sm">
//                         <div className="font-medium">
//                           {item.language || 'Language not specified'}
//                         </div>
//                         <div className="text-gray-500">
//                           Oleh {item.author || 'Unknown Author'}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex justify-end">
//                       <button className="bg-[#F9A826] text-white px-4 py-2 rounded-md">
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PortfolioDashboard;