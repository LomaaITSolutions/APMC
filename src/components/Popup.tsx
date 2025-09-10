"use client";

import React, { useState } from "react";

const FinalMedicalRegistration: React.FC = () => {
  const [popupStep, setPopupStep] = useState<1 | 2 | null>(1);

  const steps = [
    {
      title: "Filled in Online Registration Form",
      content: (
        <p>
          Includes Provisional Registration Details, Personal Details, Address
          for Communication, Educational Details & Internship Details.
        </p>
      ),
    },
    {
      title: "Payment for ID Card",
      content: (
        <p>
          ID Card will be sent through the registered post along with your
          registration certificate, after verification of your profile.
        </p>
      ),
    },
    {
      title: "Upload Enclosures",
      content: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Upload Passport Size Photo & Academic Certificates (SSC, APMC
            Provisional Registration (TR), Internship, Ethics Awareness, M.B.B.S
            Degree, (Notarised Affidavit & Testimonials - if necessary)).
          </li>
          <li>
            Size of the documents to be uploaded:
            <ul className="list-disc pl-6">
              <li>Photo – 100KB, Other Documents – 200KB</li>
              <li>
                Documents are allowed <b>jpg/png</b> only, with Proper Naming
                Conventions. Filename should not contain special characters and
                should be &lt; 20 characters.
              </li>
              <li>For Testimonials allowed <b>pdf</b> only.</li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      title: "Slot Booking",
      content: (
        <ul className="list-disc pl-5">
          <li>Book the Slot for Verification.</li>
          <li>
            Please Report in Person at APMC with all Required Documents both
            (Original & Xerox) for the Permanent Registration & Allotment of
            Login Credentials for eDoctor.
          </li>
        </ul>
      ),
    },
    {
      title: "Check Details",
      content: (
        <p>
          Know your <b>Acknowledgement Id</b>, <b>Status</b> & <b>Slot Id</b>.
        </p>
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
              Final Medical Registration
            </h2>
            <ul className="list-disc pl-4 space-y-2 text-gray-800 text-sm md:text-base">
              <li>
                Those who have pursued <b>M.B.B.S in Andhra Pradesh</b> and
                completed their Internship are eligible for Final Medical
                Registration (Permanent Registration).
              </li>
              <li>
                After successful verification of your profile, login credentials
                for <b>eDoctor</b> (utilizing the online services of APMC) will
                be sent to your registered Mobile Number.
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <a href="/services">
                <button className="px-4 py-2 rounded-md hover:bg-red-600 hover:text-white text-black border border-red-400">
                  Close
                </button>
              </a>
              <button
                onClick={() => setPopupStep(2)}
                className="px-4 py-2 rounded-md bg-teal-700 text-white transition-all duration-300 shadow-lg scale-105 active:scale-100"
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
            <div
              className="bg-teal-700 text-white p-4 flex items-center justify-between rounded-t-xl"
              style={{ position: "sticky", top: 0, zIndex: 20 }}
            >
              <h2 className="text-lg md:text-xl font-semibold w-full text-center">
                Step by Step Procedure for Andhra Pradesh Graduates
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
                      <h3 className="font-semibold text-gray-800">{step.title}</h3>
                      <div className="text-gray-600 mt-1">{step.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
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
                  window.location.href = "/registration/ap";
                }}
                className="px-4 py-2 rounded-md bg-teal-700 text-white"
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

export default FinalMedicalRegistration;
