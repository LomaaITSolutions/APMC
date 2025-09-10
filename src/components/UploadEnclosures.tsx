// src/pages/BookSlot.tsx
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import apmcLogo from "../../public/favicon.ico";
import { Menu, X, GraduationCap, IndianRupee, Upload, Calendar, Search } from "lucide-react";

const PaymentIDCard: React.FC = () => {
  const [ackId, setAckId] = useState("");
  const [open, setOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
            const navigate = useNavigate();
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Acknowledgement ID submitted: ${ackId}`);
  };

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
          <div className="mb-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center font-semibold px-4 py-3 text-white border-b border-white/30">
              <GraduationCap className="mr-2" size={20} />
              M.B.B.S Studied In
            </div>
            <ul className="pl-6 pr-4 py-4 space-y-2 font-semibold">
              <li>
                <Link
                  to="/registration/ap"
                  className="block px-4 py-2 rounded-md transition-all duration-200 hover:bg-white/30 hover:shadow-lg hover:text-yellow-400 cursor-pointer"
                >
                  Andhra Pradesh
                </Link>
              </li>
              <li>
                <Link
                  to="/registration-other-state"
                  className="block px-4 py-2 rounded-md transition-all duration-200 hover:bg-white/30 hover:shadow-lg hover:text-yellow-400 cursor-pointer"
                >
                  Other State
                </Link>
              </li>
              <li>
                <Link
                  to="/registration-other-country"
                  className="block px-4 py-2 rounded-md transition-all duration-200 hover:bg-white/30 hover:shadow-lg hover:text-yellow-400 cursor-pointer"
                >
                  Other Country
                </Link>
              </li>
            </ul>
          </div>

          {/* Sidebar Links */}
          <nav className="space-y-4">
            <Link to="/payment-id-card" className="flex items-center hover:text-yellow-400">
              <IndianRupee className="mr-2" size={18} /> Payment
            </Link>
            <Link to="/upload-enclosures" className="flex items-center hover:text-yellow-400">
              <Upload className="mr-2" size={18} /> Upload Enclosures
            </Link>
            <Link to="/book-slot" className="flex items-center hover:text-yellow-400">
              <Calendar className="mr-2" size={18} /> Book Slot
            </Link>
            <Link to="/details" className="flex items-center hover:text-yellow-400">
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
<main className="flex-1 p-8"> 
    <h1 className="text-2xl font-bold text-teal-700 mb-6 text-center"> Upload Enclosures </h1> 
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
         <form onSubmit={handleSubmit} className="space-y-4">
         <div> <label className="block text-gray-700 font-medium"> Acknowledgement ID </label> 
         <input type="text" value={ackId} onChange={(e) => setAckId(e.target.value)} 
         placeholder="Enter Acknowledgement ID Received in SMS" className="w-full border rounded-lg px-4 py-2 mt-2 focus:ring-2 focus:ring-teal-500" required /> 
         <p className="text-red-600 text-sm mt-1"> * Enter Acknowledgement ID Received in SMS </p> 
         </div>
          <button type="submit" className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800" > Submit </button> 
          </form>
           </div> 
           </main>
                         </div>
    </div>
  );
};

export default PaymentIDCard;
