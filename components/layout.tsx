// 'use client'
// import React from 'react';
// import Head from 'next/head';
// import { useState } from 'react';
// import { Menu, X, Home, BarChart2, Droplet, Bell, Settings, LogOut } from 'lucide-react';

// interface MainLayoutProps {
//   children: React.ReactNode;
// }
// const MainLayout = ({ children}: MainLayoutProps)=> {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Head>
//         <title>Energy and Water Management Dashboard</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Sidebar */}
//       <div className={`bg-blue-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
//         <nav>
//           <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
//             <Home className="inline-block mr-2" size={20} />
//             Dashboard
//           </a>
//           <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
//             <BarChart2 className="inline-block mr-2" size={20} />
//             Energy
//           </a>
//           <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
//             <Droplet className="inline-block mr-2" size={20} />
//             Water
//           </a>
//           <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
//             <Bell className="inline-block mr-2" size={20} />
//             Alerts
//           </a>
//           <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
//             <Settings className="inline-block mr-2" size={20} />
//             Settings
//           </a>
//         </nav>
//       </div>

//       {/* Content area */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <header className="bg-white shadow-md">
//           <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//             <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden">
//               <Menu size={24} />
//             </button>
//             <h1 className="text-2xl font-semibold text-gray-900">Energy and Water Dashboard</h1>
//             <button className="text-gray-500 focus:outline-none focus:text-gray-700">
//               <LogOut size={24} />
//             </button>
//           </div>
//         </header>

//         {/* Main content */}
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
//           <div className="container mx-auto px-6 py-8">
//             {children}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;