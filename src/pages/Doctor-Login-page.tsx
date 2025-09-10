import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, User, KeyRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DoctorLoginPage: React.FC = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col">
{/* ✅ Responsive Navbar */}
<div className="fixed top-0 left-0 w-full flex justify-between items-center py-3 px-4 md:px-6 bg-teal-700 shadow-md z-40">
  {/* Left Logo */}
  <img
    src="/favicon.ico"
    alt="APMC Logo"
    onClick={() => navigate("/")}
    className="h-12 w-12 md:h-24 md:w-24 object-contain cursor-pointer border-2 rounded-full"
  />

  {/* Center Text */}
  <div className="flex flex-col items-center mx-2 flex-1">
    <h1
      className="text-sm sm:text-lg md:text-3xl font-bold text-white mb-0.5 md:mb-2 text-center"
      style={{ fontFamily: "Noto Sans Telugu, sans-serif" }}
    >
      Online Doctors Registration System
    </h1>
    <h2 className="text-xs sm:text-base md:text-2xl font-semibold text-white text-center">
      Andhra Pradesh Medical Council
    </h2>
  </div>

  {/* Right Logo */}
  <img
    src="/logo.jpeg"
    alt="AP Govt Logo"
    className="h-12 w-12 md:h-24 md:w-24 object-contain border-2 rounded-full"
  />
</div>

        {/* ✅ Login Section */}
        <div className="flex flex-1 items-center justify-center px-3 pt-28 md:pt-32 mb-2  md:mt-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 "
          >
            {/* Left Image */}
            <div className="relative flex items-center justify-center  bg-gradient-to-br from-blue-600 to-indigo-700 p-4 md:p-0 ">
              <motion.img
            src="/Dc.png"
            alt="Doctor"
            className="rounded-xl w-full max-w-xs md:max-w-full mt-12 md:mt12 "
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
              />
              <div className="absolute top-2 left-2 md:top-4 md:left-4 text-white text-xs md:text-base">
            <div className="flex items-center gap-2 font-semibold">
              <Stethoscope className="w-4 h-4 md:w-6 md:h-6" />
              AP Medical Council
            </div>
            <p className="opacity-80">Online Doctors Registration System</p>
              </div>
            </div>

            {/* Login Form */}
            <div className="flex flex-col justify-center p-6 md:p-8">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-3xl font-bold text-center text-teal-700 mb-4 md:mb-6"
              >
                Login for Doctors
              </motion.h2>

              <form className="space-y-4 md:space-y-5">
                {/* Username */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1 flex items-center gap-2 text-sm md:text-base">
                    <User className="w-4 h-4 text-blue-600" /> Username
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Registration Number"
                    className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1 flex items-center gap-2 text-sm md:text-base">
                    <KeyRound className="w-4 h-4 text-blue-600" /> Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm md:text-base"
                  />
                </div>

                {/* Login Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-teal-700 to-teal-700 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90 transition"
                >
                  Login
                </motion.button>
              </form>

              {/* Footer Links */}
              <div className="flex justify-between mt-4 md:mt-6 text-xs md:text-sm text-gray-600">
                <a href="#" className="hover:text-blue-600">
                  New User? Signup
                </a>
                <a href="#" className="hover:text-blue-600">
                  Forgot Password?
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ✅ Footer */}
        <div className="w-full rounded-md py-6 px-4 text-center mt-6 md:mt-4 bg-white/40">
          <div className="flex flex-col md:flex-row justify-around items-start text-left gap-6">
            {/* Address */}
            <div>
              <div className="font-bold text-red-700 mb-1">Address</div>
              <div className="text-blue-700 text-sm md:text-base">
                2nd Floor<br />
                Dr. N.T.R. U H S<br />
                Vijayawada - 520 008, A.P<br />
                Ph : 0866-2455280, 2455281<br />
                <span className="flex items-center gap-1">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                  <a href="tel:9030999616" className="underline">
                    90309 99616
                  </a>
                </span>
              </div>
            </div>

            {/* Working Days */}
            <div>
              <div className="font-bold text-red-600 mb-1">Working Days</div>
              <div className="text-blue-700 text-sm md:text-base">
                Monday - Friday
              </div>
              <div className="mt-2 text-red-600 font-bold text-sm md:text-base">
                TATKAL - <span className="text-black font-normal">04 Working Days</span>
              </div>
              <div className="text-black text-xs md:text-sm">For Each Service</div>
              <div className="mt-2 text-green-700 font-bold text-sm md:text-base">
                NON-TATKAL - <span className="text-black font-normal">03 Weeks</span>
              </div>
            </div>

            {/* Counter Timings */}
            <div>
              <div className="font-bold text-red-700 mb-1">Counter Timings</div>
              <div className="text-blue-700 text-sm md:text-base">
                10:00 AM - 04:30 PM
              </div>
              <div className="mt-2 font-bold text-green-700 text-sm md:text-base">
                Lunch Break
              </div>
              <div className="text-blue-700 text-sm md:text-base">
                01:30 PM - 02:00 PM
              </div>
            </div>
          </div>

          <div className="mt-4 text-blue-700 text-xs md:text-sm">
            Designed, Developed and Hosted by LomaaITSolutions , A.P State
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorLoginPage;