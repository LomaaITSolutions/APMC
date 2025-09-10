import React, { useState } from "react";
import { X } from "lucide-react";

const DoctorLogin: React.FC = () => {
  const [popupStep, setPopupStep] = useState<1 | 2 | null>(1);

  const steps = [
    {
      title: "Login via APMC - eDoctor",
      content: "Enter Username, Captcha & OTP.",
    },
    {
      title: "Home",
      content: "Includes Profile, UG & PG Details, Certificates etc.",
    },
    {
      title: "Services",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>Apply for required services (Good Standing, NOC, Renewal & Duplicate).</li>
          <li>Upload required documents based on service.</li>
          <li>
            Size of the documents:
            <ul className="list-disc pl-6">
              <li>Photo – 100KB, Other Documents – 200KB</li>
              <li>Only <b>jpg/png</b>, filename &lt; 20 characters</li>
            </ul>
          </li>
          <li>Payment based on Tatkal / Non-Tatkal.</li>
        </ul>
      ),
    },
    {
      title: "Subject to Verification from APMC",
      content: (
        <ul className="list-disc pl-5">
          <li>If corrections occur, APMC will reject the application.</li>
          <li>Reason will be sent by SMS to registered mobile number.</li>
        </ul>
      ),
    },
    {
      title: "Re-Apply",
      content: (
        <ul className="list-disc pl-5">
          <li>Rejected applications appear under Reapply option.</li>
          <li>Applicant must resubmit with corrections.</li>
        </ul>
      ),
    },
    {
      title: "Certificate Generation",
      content: (
        <ul className="list-disc pl-5">
          <li>After approval → sent via registered post.</li>
          <li>NOC & Good Standing → sent via email.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="p-6">
      {/* ---------------- FIRST POPUP ---------------- */}
      {popupStep === 1 && (
        <div className="fixed inset-0 flex justify-center items-start z-50">
          {/* Blurred background */}
          <div
            className="fixed inset-0 z-0 animate-fadeIn"
            style={{
              backgroundImage: "url('/doctors.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(8px)",
              WebkitFilter: "blur(8px)",
            }}
          ></div>

          {/* Modal Content */}
          <div className="bg-white rounded-xl shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative z-10 mt-8 animate-slideDown">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-green-700">
              eDoctor (Apply Services Through Online)
            </h2>
            <ul className="list-disc pl-4 space-y-2 text-gray-800 text-sm md:text-base">
              <li>
                Those <b>who have registered in APMC</b> and verified your
                profile by Capturing of Digital Photo, Thumb & Signature are
                eligible for <b>eDoctor Login</b>.
              </li>
              <li>
                The eDoctor login credentials have been sent to your registered
                mobile number via <b>SMS</b>.
              </li>
              <li>
                While facing any issues in login, please contact APMC technical
                team <b>0866 245 5297</b> (only on working days from 10:30 AM -
                05:30 PM).
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
             <a href="/services"><button
                className="px-4 py-2 rounded-md hover:bg-red-600  hover:text-white text-black border border-red-400"
              >
                Close
              </button></a>
              <button
                onClick={() => setPopupStep(2)}
                className="px-4 py-2 rounded-md bg-teal-700 text-white  transition-all duration-300 shadow-lg scale-105 active:scale-100"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- SECOND POPUP ---------------- */}
       {popupStep === 2 && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
             <div
            className="fixed inset-0 z-0 animate-fadeIn"
            style={{
              backgroundImage: "url('/doctors.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(8px)",
              WebkitFilter: "blur(8px)",
            }}
          ></div>
          <div className="bg-white rounded-xl shadow-lg w-11/12 md:w-3/5 lg:w-1/2 max-h-[85vh] overflow-y-auto relative">
            {/* Header */}
            <div className="bg-teal-700 text-white p-4 flex items-center justify-between rounded-t-xl"
                 style={{ position: "sticky", top: 0, zIndex: 20 }}>
            <h2 className="text-lg md:text-xl font-semibold w-full text-center">
                Step by Step Procedure for eDoctor
            </h2>
            </div>
            {/* Timeline */}
            <div className="p-6 relative">

              <div className="space-y-10">
                {steps.map((step, index) => (
                  <div key={index} className="relative pl-16">
                    {/* Circle */}
                    <div className="absolute left-4 top-1 w-6 h-6 rounded-full flex items-center justify-center bg-teal-700 text-white text-sm font-bold shadow-md">
                      {index + 1}
                    </div>
                    {/* Card */}
                    <div className="bg-gray-50 p-4 rounded-lg shadow-sm border">
                      <h3 className="font-semibold text-gray-800">
                        {step.title}
                      </h3>
                      <div className="text-gray-600 mt-1">{step.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer (fixed at bottom) */}
            <div
              className="flex justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-xl"
              style={{
                position: "sticky",
                bottom: 0,
                zIndex: 10,
                left: 0,
                right: 0,
              }}
            >
              <button
                onClick={() => setPopupStep(1)}
                className="px-4 py-2 rounded-md bg-white hover:bg-teal-700 hover:text-white text-black border border-teal-700 transition-all duration-300 shadow-lg scale-105 active:scale-100"
              >
                Back
              </button>
              <button
                onClick={() => {
                  setPopupStep(null);
                  window.location.href = "/services/doctor-login-page";
                }}
                className="px-4 py-2 rounded-md bg-teal-700 text-white "
              >
                I Agree & Continue
              </button>
            </div>
          </div>
        </div>
        )}
         {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease;
        }
        @keyframes slideDown {
          from { transform: translateY(-40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.5s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </div>

  );
};

export default DoctorLogin;