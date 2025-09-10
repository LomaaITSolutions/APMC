import React, { useState } from "react";
import { Users, UserPlus, GraduationCap, Stethoscope, Menu, X } from "lucide-react";
import CmeSiderbar from "./CmeSiderbar";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CmeHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="relative bg-primary py-4 md:py-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/header-bg.jpg"
            alt="Medical Education"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary" />
        </div>

        {/* Header Content */}
        <div className="relative container px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row items-center space-x-4 text-white text-center md:text-left">
            <div className="bg-white text-primary p-3 rounded-full">
              <GraduationCap className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl md:text-2xl font-bold">
                Continuing Medical Education - AP Medical Council
              </h1>
              <p className="mt-2 text-sm md:text-lg">
                Professional Development Through Quality Education
              </p>
            </div>
          </div>

          {/* Right Section with Dropdown */}
          <div className="flex flex-row-reverse items-center gap-6 md:gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="bg-white px-4 py-2 w-36 md:w-48 rounded-md flex items-center justify-center gap-2 font-bold text-green-700 shadow-sm">
                  <Stethoscope className="h-5 w-5" /> Login as...
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md">
                <DropdownMenuItem>
                  <Link to="/cme/organ-login" className="flex items-center gap-2 w-full">
                    <UserPlus className="h-4 w-4 text-green-700" /> Organisation Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/cme/ober-login" className="flex items-center gap-2 w-full">
                    <Users className="h-4 w-4 text-green-700" /> Observer Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/cme/apmc-login" className="flex items-center gap-2 w-full">
                    <GraduationCap className="h-4 w-4 text-green-700" /> APMC Login
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex">
          <div className="w-64 bg-white h-full shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-primary">Menu</h2>
              <button onClick={() => setIsSidebarOpen(false)}>
                <X className="h-6 w-6 text-primary" />
              </button>
            </div>
            <CmeSiderbar />
          </div>
          <div className="flex-1" onClick={() => setIsSidebarOpen(false)}></div>
        </div>
      )}
    </>
  );
};

export default CmeHeader;
