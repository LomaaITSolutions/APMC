// src/pages/RegistrationOtherState.tsx
import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import apmcLogo from "../../public/favicon.ico";
import { Menu, X, GraduationCap, IndianRupee, Upload, Calendar, Search } from "lucide-react";

const RegistrationOtherState: React.FC = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const navigate = useNavigate();
  

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      {/* Header */}
      <header className="bg-white text-teal-700 py-4 px-4 md:px-10 flex items-center justify-between shadow-md">
        {/* Mobile: Sidebar toggle */}
        <button
          className="md:hidden text-teal-700 mr-2"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        >
          {mobileSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo & Text */}
        <div className="flex items-center space-x-3">
            <img
              src={apmcLogo} // replace with your logo path
              alt="APMC Logo"
              onClick={() => navigate("/")}
              className="w-12 h-12 rounded-full cursor-pointer object-cover"
            />
          <div className="text-sm md:text-base">
            <h1 className="text-gray-900 font-bold">AP Medical Council</h1>
            <p className="text-gray-600 text-xs md:text-sm">Andhra Pradesh Medical Council</p>
          </div>
        </div>

        {/* Right Header */}
        <h1 className="hidden md:block text-xl font-bold text-right">
          Online Doctors Registration System - AP Medical Council
        </h1>
      </header>

      {/* Flex Container */}
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`w-64 bg-teal-700 shadow-md p-6 text-white
            fixed md:static z-50 transform transition-transform duration-300
            ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
            h-[calc(100vh-64px)] overflow-auto
          `}
        >
          {/* Dropdown */}
<div className="mb-6
                bg-white/20 backdrop-blur-md border border-white/30 
                rounded-lg shadow-md overflow-hidden">
  {/* Header with underline */}
  <div className="flex items-center font-semibold px-4 py-3 text-white border-b border-white/30">
    <GraduationCap className="mr-2" size={20} />
    M.B.B.S Studied In
  </div>

  {/* List inside same glass panel */}
  <ul className="pl-6 pr-4 py-4 space-y-2 font-semibold">
    <li>
      <Link
        to="/registration/ap"
        className="block px-4 py-2 rounded-md transition-all duration-200
                   hover:bg-white/30 hover:shadow-lg hover:text-yellow-400 cursor-pointer"
      >
         Andhra Pradesh
      </Link>
    </li>
    <li>
      <Link
        to="/registration-other-state"
        className="block px-4 py-2 rounded-md transition-all duration-200
                   hover:bg-white/30 hover:shadow-lg hover:text-yellow-400 cursor-pointer"
      >
         Other State
      </Link>
    </li>
    <li>
      <Link
        to="/registration-other-country"
        className="block px-4 py-2 rounded-md transition-all duration-200
                   hover:bg-white/30 hover:shadow-lg hover:text-yellow-400 cursor-pointer"
      >
         Other Country
      </Link>
    </li>
  </ul>
</div>

          {/* Sidebar Links */}
          <nav className="space-y-4">
                      <Link
                        to="/payment-id-card"
                        className="flex items-center hover:text-yellow-400"
                      >
                        <IndianRupee className="mr-2" size={18} /> Payment
                      </Link>
          
                      <Link
                        to="/upload-enclosures"
                        className="flex items-center hover:text-yellow-400"
                      >
                        <Upload className="mr-2" size={18} /> Upload Enclosures
                      </Link>
                      <Link
                        to="/book-slot"
                        className="flex items-center hover:text-yellow-400"
                      >
                        <Calendar className="mr-2" size={18} /> Book Slot
                      </Link>
                      <Link
                        to="/details"
                        className="flex items-center hover:text-yellow-400"
                      >
                        <Search className="mr-2" size={18} /> Check Details
                      </Link>
                    </nav>
        </aside>

        {/* Mobile overlay */}
        {mobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main
          className={`flex-1 p-8 h-[calc(100vh-64px)] overflow-auto ${
            mobileSidebarOpen ? "ml-64 md:ml-0" : ""
          }`}
        >
          <h1 className="text-2xl font-bold text-center text-teal-700 italic mb-6">
            Registration For M.B.B.S Accomplished in Other State
          </h1>

          <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-bold text-green-700">M.B.B.S Registration Details</h2>

            {/* Council */}
            <div>
              <label className="block text-gray-700 font-medium">M.B.B.S Registered in</label>
              <select className="w-full border rounded-lg px-4 py-2 mt-2 focus:ring-2 focus:ring-teal-500">
                <option>-- Select Council Name --</option>
                <option>TSMC</option>
                <option>KMC</option>
                <option>TNMC</option>
                <option>Other</option>
              </select>
              <p className="text-red-600 text-sm mt-1">* Select M.B.B.S Registered Council</p>
            </div>

            {/* Registration Number */}
            <div>
              <label className="block text-gray-700 font-medium">Registration Number</label>
              <input
                type="text"
                placeholder="Enter State Medical Council Reg. No."
                className="w-full border rounded-lg px-4 py-2 mt-2 focus:ring-2 focus:ring-teal-500"
              />
              <p className="text-red-600 text-sm mt-1">
                * Registration No. as per State Medical Council Certificate (e.g. TSMC/FMR/XXXXX)
              </p>
            </div>

            {/* Registration Date */}
            <div>
              <label className="block text-gray-700 font-medium">Registration Date</label>
              <input
                type="date"
                className="w-full border rounded-lg px-4 py-2 mt-2 focus:ring-2 focus:ring-teal-500"
              />
              <p className="text-red-600 text-sm mt-1">
                * Registration Date as per State Medical Council Certificate
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RegistrationOtherState;
