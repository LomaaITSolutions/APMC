import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SlotBooking() {
  const [showPopup, setShowPopup] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClose = () => {
    navigate("/services"); // redirects to home page
  };

  const handleAgree = () => {
    setAgreed(true);
    setShowPopup(false);
  };

  return (
    <div className="p-4 md:p-6">
      {/* First Popup */}
      {showPopup && !agreed && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
          <div
            className="fixed inset-0 z-0"
            style={{
              backgroundImage: "url('/doctors.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(8px)",
              WebkitFilter: "blur(8px)",
            }}
          ></div>

          <div className="bg-white rounded-xl shadow-lg w-full max-w-md md:max-w-2xl lg:max-w-2xl p-6 relative">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 text-primary">
              Profile Registration (Signup)
            </h2>
            <hr />
            <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-800 text-sm sm:text-base">
              <li>
                Those <b>who have registered in APMC</b> and obtained APMC
                Registration Number before <b>25 May, 2023</b> are eligible for{" "}
                <b>Signup</b>.
              </li>
              <li>
                Those who have already verified your profile in APMC by
                Capturing of Digital Information like <b>Photo, Thumb & Signature</b> need not apply again.
              </li>
              <li>
                After successful verification of your profile, login credentials
                for <b>eDoctor</b> will be sent to your registered <b>Mobile Number</b>.
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
              <button
                onClick={handleClose}
                className="px-4 py-2 rounded-md bg-white hover:bg-red-500 hover:text-white text-black border border-red-500 transition-all duration-300 shadow-lg scale-105 active:scale-100"
              >
                Close
              </button>
              <button
                onClick={handleAgree}
                className="px-4 py-2 rounded-md bg-primary text-white w-full sm:w-auto"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Second Popup */}
      {agreed && (
        <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
          {/* Blurred Background */}
          <div
            className="fixed inset-0 z-0"
            style={{
              backgroundImage: "url('/doctors.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(8px)",
              WebkitFilter: "blur(8px)",
            }}
          ></div>

          {/* Popup Container */}
          <div className="relative z-10 bg-white rounded-xl shadow-xl w-full max-w-lg md:max-w-2xl lg:max-w-3xl max-h-[90vh] p-4 sm:p-6 overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl"
              onClick={() => navigate('/services')}
              aria-label="Close"
            >
              &times;
            </button>

            {/* Header */}
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-primary mb-4 text-center sm:text-left">
              Profile Registration (Signup)
            </h2>

            {/* Step Info Banner */}
            <div className="bg-primary text-white rounded-lg mb-4 p-2 sm:p-3 flex items-center text-sm sm:text-base">
              <span className="mr-2 text-lg sm:text-2xl">&#9776;</span>
              <span className="font-semibold">
                Step by Step Procedure for Signup
              </span>
            </div>

            {/* Steps List */}
            <div className="pl-4 max-h-[55vh] sm:max-h-[60vh] overflow-y-auto pr-2">
              <ol className="relative border-gray-300 space-y-6">
                {[1, 2, 3, 4, 5].map((step) => (
                  <li key={step}>
                    <div className="flex items-start">
                      <span className="w-6 h-6 flex items-center justify-center bg-white border-2 border-primary rounded-full mt-1 mr-3 flex-shrink-0 font-semibold text-primary">
                        {step}
                      </span>
                      <div>
                        {step === 1 && (
                          <>
                            <span className="font-semibold">
                              Filled in Profile Registration Form.
                            </span>
                            <div className="text-gray-700 text-sm sm:text-base mt-1">
                              Includes Personal Details, Address for Communication, Educational Details.
                            </div>
                          </>
                        )}
                        {step === 2 && (
                          <>
                            <span className="font-semibold">Payment for Id Card.</span>
                            <div className="text-gray-700 text-sm sm:text-base mt-1">
                              Id Card will be sent through the registered post, after verification of your profile.
                            </div>
                          </>
                        )}
                        {step === 3 && (
                          <>
                            <span className="font-semibold">Upload Enclosures.</span>
                            <ul className="list-decimal ml-6 text-gray-700 text-sm sm:text-base mt-1 space-y-1">
                              <li>
                                Upload Passport Size Photo & Academic Certificates (SSC, Intermediate, Internship, M.B.B.S Degree, Final Medical Registration (PR), etc.).
                              </li>
                              <li>
                                Those who obtained Additional Qualifications (P.G) upload Additional Qualification Registration Certificate only, issued by the APMC. Don't upload Provisional / OD.
                              </li>
                              <li>
                                Size of the documents to be uploaded.
                                <ul className="list-disc ml-6 mt-1">
                                  <li>Photo - 100KB, Other Documents - 200KB.</li>
                                  <li>
                                    Documents are allowed <b>jpg / png</b> only, with proper naming conventions. File name should not contain special characters and should have less than 20 characters.
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </>
                        )}
                        {step === 4 && (
                          <>
                            <span className="font-semibold">Slot Booking.</span>
                            <ul className="list-decimal ml-6 text-gray-700 text-sm sm:text-base mt-1 space-y-1">
                              <li>Book the Slot for Verification.</li>
                              <li>Please Report in Person at APMC with all Original (UG / PG) Certificates for the Allotment of Login Credentials of eDoctor.</li>
                            </ul>
                          </>
                        )}
                        {step === 5 && (
                          <>
                            <span className="font-semibold">Check Details.</span>
                            <div className="text-gray-700 text-sm sm:text-base mt-1">
                              Know your Acknowledgement Id, Status & Slot Id.
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Footer Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4 sm:mt-6">
              <button
                onClick={() => {
                  setAgreed(false);
                  setShowPopup(true);
                }}
                className="px-4 py-2 rounded-md bg-white hover:bg-red-500 hover:text-white text-black border border-red-500 transition-all duration-300 shadow-lg scale-105 active:scale-100"
              >
                Back
              </button>
              <button
                onClick={() => navigate("/services/doctor-signup/Form")}
                className="px-4 py-2 rounded-md bg-primary text-white w-full sm:w-auto"
              >
                I Agree & Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}