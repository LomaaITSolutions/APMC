import React, { useState } from "react";
import {
  FaPenAlt,
  FaRupeeSign,
  FaUpload,
  FaCalendarAlt,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RegisterForm: React.FC = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar visible by default
const [activePage, setActivePage] = useState("register"); // default: registration form
  const navigate = useNavigate();

  return (

    
    <div className="bg-[#f5f7ff] min-h-screen flex flex-col">
      {/* Header (Top Bar) */}
<header className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 bg-white shadow-md">
  {/* Left: Logo */}
  <div className="flex items-center cursor-pointer gap-2 sm:gap-3"
   onClick={() => navigate("/")}
    >
    <img src="/favicon.ico" alt="APMC Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
    <span className="text-primary font-bold text-lg sm:text-xl">e-Doctor</span>
  </div>

  {/* Center: Title */}
  <h1 className="hidden md:block text-primary font-bold text-lg md:text-2xl lg:text-3xl text-center flex-1 px-4">
    Online Doctors Registration System - AP Medical Council
  </h1>

  {/* Right: Toggle Button */}
  <button
    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    className="text-2xl text-black"
  >
    {isSidebarOpen ? <FaTimes /> : <FaBars />}
  </button>
</header>


      {/* Layout with Sidebar + Main Content */}
      <div className="flex flex-1 mt-2 relative">
        {/* Sidebar */}
 {isSidebarOpen && (
     <aside className="w-16 md:w-60 bg-white  shadow-md pt-8 transition-all duration-300">
      <nav className="px-2 md:px-6 mt-4 flex flex-col gap-2">
    <a
     onClick={() => setActivePage("register")}
     className={`flex items-center justify-center md:justify-start w-full py-3 px-0 md:px-4 rounded-lg ${
     activePage === "register" ? "bg-primary text-white" : "text-primary hover:bg-[#ede9fe]"
     } font-semibold mb-2 cursor-pointer`}
     >
     <FaPenAlt className="text-lg md:mr-2" />
     <span className="hidden md:inline">Registration Form</span>
    </a>

    <a
     onClick={() => setActivePage("payment")}
     className={`flex items-center justify-center md:justify-start w-full py-3 px-0 md:px-4 rounded-lg ${
     activePage === "payment" ? "bg-primary text-white" : "text-primary hover:bg-[#ede9fe]"
     } font-medium mb-2 cursor-pointer`}
     >
     <FaRupeeSign className="text-lg md:mr-2" />
     <span className="hidden md:inline">Payment</span>
   </a>

    <a
     onClick={() => setActivePage("upload")}
     className={`flex items-center justify-center md:justify-start w-full py-3 px-0 md:px-4 rounded-lg ${
     activePage === "upload" ? "bg-primary text-white" : "text-primary hover:bg-[#ede9fe]"
     } font-medium mb-2 cursor-pointer`}
      >
     <FaUpload className="text-lg md:mr-2" />
     <span className="hidden md:inline">Upload Enclosures</span>
   </a>

    <a
      onClick={() => setActivePage("bookslot")}
       className={`flex items-center justify-center md:justify-start w-full py-3 px-0 md:px-4 rounded-lg ${
       activePage === "bookslot" ? "bg-primary text-white" : "text-primary hover:bg-[#ede9fe]"
     } font-medium mb-2 cursor-pointer`}
      >
     <FaCalendarAlt className="text-lg md:mr-2" />
        <span className="hidden md:inline">Book Slot</span>
   </a>
   
    <a
      onClick={() => setActivePage("checkdetails")}
      className={`flex items-center justify-center md:justify-start w-full py-3 px-0 md:px-4 rounded-lg ${
       activePage === "checkdetails" ? "bg-primary text-white" : "text-primary hover:bg-[#ede9fe]"
      } font-medium mb-2 cursor-pointer`}
      >
        <FaSearch className="text-lg md:mr-2" />
        <span className="hidden md:inline">Check Details</span>
   </a>
    </nav>
  </aside>
 )}


        {/* Main Content */}
       <main className="flex-1 py-8 px-4 md:px-8 transition-all duration-300">
        {activePage === "register" && (
          <section>    
              <div className="text-center mb-6">
            <h2 className="text-[#2d1e6b] font-semibold text-lg md:text-2xl mt-4">
              Profile Registration for APMC Registered Doctor's
            </h2>
          </div>

          {/* Form */}
          <section className="bg-white rounded-3xl max-w-4xl mx-auto p-6 md:p-10 shadow-lg">
            <h3 className="text-primary font-medium text-xl md:text-2xl mb-6">
              Personal Details
            </h3>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="flex-1">
                <label className="font-semibold mb-2 block">
                  Final Registration Number
                </label>
                <input
                  type="text"
                  placeholder="Enter APMC Registration Number"
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  className="w-full py-3 px-4 rounded-lg border border-gray-300 text-base"
                />
                <div className="text-[#e53935] text-sm mt-1">
                  * Registration Number as per APMC Registration Certificate
                </div>
              </div>
              <div className="flex-1">
                <label className="font-semibold mb-2 block">
                  Registration Date
                </label>
                <input
                  type="text"
                  placeholder="DD-MM-YYYY"
                  value={registrationDate}
                  onChange={(e) => setRegistrationDate(e.target.value)}
                  className="w-full py-3 px-4 rounded-lg border border-gray-300 text-base"
                />
                <div className="text-[#e53935] text-sm mt-1">
                  * Registration Date (DD-MM-YYYY) as per APMC Registration
                  Certificate
                </div>
              </div>
            </div>
          </section>
          </section>
       )}

        {activePage === "payment" && (
          <section>    
              <div className="text-center mb-6">
            <h2 className="text-[#2d1e6b] font-semibold text-lg md:text-2xl mt-4">
              Payment
            </h2>
          </div>

          {/* Form */}
          <section className="bg-white rounded-3xl max-w-4xl mx-auto p-6 md:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Input Field */}
           <div className="flex-1 w-full">
           <label className="font-semibold mb-2 block">
         Acknowledgement ID
         </label>
        <input
        type="text"
        placeholder="Enter Acknowledgement ID Received in SMS"
        value={registrationNumber}
        onChange={(e) => setRegistrationNumber(e.target.value)}
        className="w-full py-3 px-4 rounded-lg border border-gray-300 text-base"
         />
         <div className="text-[#e53935] text-sm mt-1">
        * Enter Acknowledgement ID Received in SMS
         </div>
         </div>

         {/* Search Button */}
         <div className="flex items-center">
         <button
          className="px-6 py-3 rounded-lg bg-primary text-white font-medium transition"
          >
          Search
         </button>
         </div>
         </div>
        </section>

          </section>
         )}

         {activePage === "upload" && (
     <section>    
              <div className="text-center mb-6">
            <h2 className="text-[#2d1e6b] font-semibold text-lg md:text-2xl mt-4">
              Upload Enclosures
            </h2>
          </div>

          {/* Form */}
          <section className="bg-white rounded-3xl max-w-4xl mx-auto p-6 md:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Input Field */}
           <div className="flex-1 w-full">
           <label className="font-semibold mb-2 block">
         Acknowledgement ID
      </label>
      <input
        type="text"
        placeholder="Enter Acknowledgement ID Received in SMS"
        value={registrationNumber}
        onChange={(e) => setRegistrationNumber(e.target.value)}
        className="w-full py-3 px-4 rounded-lg border border-gray-300 text-base"
      />
      <div className="text-[#e53935] text-sm mt-1">
        * Enter Acknowledgement ID Received in SMS
      </div>
    </div>

    {/* Search Button */}
    <div className="flex items-center">
      <button
        className="px-6 py-3 rounded-lg bg-primary text-white font-medium transition"
      >
        Search
      </button>
    </div>
  </div>
</section>

          </section>
         )}

  
        {activePage === "bookslot" && (
         <section>    
              <div className="text-center mb-6">
            <h2 className="text-[#2d1e6b] font-semibold text-lg md:text-2xl mt-4">
              Slot Booking for SignUp
            </h2>
          </div>

          {/* Form */}
          <section className="bg-white rounded-3xl max-w-4xl mx-auto p-6 md:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Input Field */}
           <div className="flex-1 w-full">
           <label className="font-semibold mb-2 block">
         Acknowledgement ID
      </label>
      <input
        type="text"
        placeholder="Enter Acknowledgement ID Received in SMS"
        value={registrationNumber}
        onChange={(e) => setRegistrationNumber(e.target.value)}
        className="w-full py-3 px-4 rounded-lg border border-gray-300 text-base"
      />
      <div className="text-[#e53935] text-sm mt-1">
        * Enter Acknowledgement ID Received in SMS
      </div>
    </div>

         {/* Search Button */}
        <div className="flex items-center">
        <button
        className="px-6 py-3 rounded-lg bg-primary text-white font-medium transition"
         >
        Search
         </button>
        </div>
        </div>
      </section>

      </section>
          )}

        {activePage === "checkdetails" && (
         <section>    
              <div className="text-center mb-6">
            <h2 className="text-[#2d1e6b] font-semibold text-lg md:text-2xl mt-4">
              Basic Details
            </h2>
          </div>

          {/* Form */}
          <section className="bg-white rounded-3xl max-w-4xl mx-auto p-6 md:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Input Field */}
           <div className="flex-1 w-full">
           <label className="font-semibold mb-2 block">
        Registration Number
      </label>
      <input
        type="text"
        placeholder="Enter Registration Number"
        value={registrationNumber}
        onChange={(e) => setRegistrationNumber(e.target.value)}
        className="w-full py-3 px-4 rounded-lg border border-gray-300 text-base"
      />
      <div className="text-[#e53935] text-sm mt-1">
        * Registration number as entered in profile submission
      </div>
    </div>

         {/* Search Button */}
        <div className="flex items-center">
        <button
        className="px-6 py-3 rounded-lg bg-primary text-white font-medium transition"
         >
        Search
         </button>
        </div>
        </div>
      </section>

      </section>
          )}


          {/* Footer */}
       <footer className="mt-12 pt-6 text-gray-500 text-sm text-center">
  <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto gap-8 md:gap-0 text-center md:text-left">
    
    {/* Content Owned by */}
    <div className="flex flex-col items-center md:items-start">
      <div className="font-semibold">Content Owned by</div>
      <div>Andhra Pradesh Medical Council</div>
      <div>Vijayawada</div>
      <div>Last Updated : 10-09-2025</div>
    </div>

    {/* Designed and Developed by */}
    <div className="flex flex-col items-center">
      <div className="font-semibold">Designed and Developed by</div>
      <div className="flex justify-center items-center mt-1">
        <a
          href="https://www.lomaait.com"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          Lomaa IT Solutions
        </a>
      </div>
      <div className="mt-1">A.P State</div>
    </div>

    {/* Support */}
    <div className="flex flex-col items-center md:items-start">
      <div className="font-semibold">Support</div>
      <div className="mt-1">📞 0866 - 2455280 / 2455281</div>
      <div className="mt-1">📱 90309 99616</div>
      <div className="mt-1">
        <span>✉️ </span>
        registrar@apmedicalcouncil.in
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        contact@apmedicalcouncil.in
      </div>
    </div>
  </div>
</footer>

        </main>
      </div>
    </div>
  );
};

export default RegisterForm;