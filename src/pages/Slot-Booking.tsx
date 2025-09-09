import React, { useState, useEffect } from "react";

export default function SlotBooking() {
  const [showPopup, setShowPopup] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // Auto-open popup when the page loads
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleAgree = () => {
    setAgreed(true);
    setShowPopup(false);
  };


                const [selectedSlotTime, setSelectedSlotTime] = useState("");
                const [selectedServices, setSelectedServices] = useState<string[]>([]);

                const services = [
                    "APMC Good Standing",
                    "Duplicate Registration Certificate",
                    "No Objection Certificate",
                    "Registration of Additional Qualification - P G",
                    "Renewal of Medical Registration",
                ];

                const handleSlotTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
                    setSelectedSlotTime(e.target.value);
                };

                const handleServiceChange = (service: string) => {
                    setSelectedServices((prev) =>
                        prev.includes(service)
                            ? prev.filter((s) => s !== service)
                            : [...prev, service]
                    );
                };


  return (
    <div className="p-6">
      {/* Popup Modal */}
      
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
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
          <div className="bg-white rounded-xl shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
            <h2 className="text-xl font-bold text-center mb-4 text-green-700">
              Instructions for Slot Booking
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base">
              <li>
                <b>Final Medical Registration / Permanent Registration (PR).</b>
                <ul className="list-none pl-4 mt-1">
                  <li>
                    <a href="#" className="text-blue-700 underline font-semibold">For Andhra Pradesh Graduates</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-700 underline font-semibold">For Other State Graduates</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-700 underline font-semibold">For Foreign Medical Graduates</a>
                  </li>
                </ul>
              </li>
              <li>
                <b>To avail APMC eDoctor Services (utilizing the online services of APMC).</b>
                <ul className="list-none pl-4 mt-1">
                  <li>
                    Those <b>who are registered in APMC</b> and obtained APMC Registration Number before <b>25 May, 2023</b> are eligible for <a href="#" className="text-blue-700 underline font-semibold">Signup</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="text-blue-700 underline font-semibold">Click here to check slot availability</a>
              </li>
              <li>
                <b>Slots will be released on every Friday at 12:00 noon.</b>
              </li>
              <li>
                With one slot you can avail multiple services. Avoid booking more than one slot, else duplication may lead to cancellation of your slot.
              </li>
              <li>
                Slot booking could be availed once in 30 days.
              </li>
              <li>
                Please ensure your presence atleast 20 minutes before the time slot booked.
              </li>
              <li>
                <b>For Application & Annexures</b> <a href="/downloads" className="text-blue-700 underline font-semibold">Click Here</a>
              </li>
            </ul>
            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={handleAgree}
                className="px-4 py-2 rounded-md bg-teal-700 text-white"
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      )}

    {/* Main Slot Booking Page (only after agree) */}
    {agreed && (
        <div>
            
            {/* Overlay content */}
            <div className="relative z-10">
                <div className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 bg-teal-700 shadow-md z-40">
                    <img
                        src="/favicon.ico"
                        alt="APMC Logo"
                        className="h-20 w-20 object-contain  border-2 rounded-full"
                    />
                    <div className="flex flex-col items-center flex-1">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "Noto Sans Telugu, sans-serif" }}>
                            ఆంధ్రప్రదేశ్ వైద్య మండలి
                        </h1>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                            Andhra Pradesh Medical Council
                        </h2>
                    </div>
                    <img
                        src="/logo.jpeg"
                        alt="AP Govt Logo"
                        className="h-20 w-20 object-contain  border-2 rounded-full"
                    />
                </div>
                <div className="h-28"></div>
                <div className="bg-white rounded-md p-4 mb-4">
                    <div className="text-sm text-gray-800 mb-2">
                        If slowness is observed during page loading, please refresh the page for better experience.
                    </div>
                    <div className="text-sm mb-1">
                        <span className="text-blue-700">To clear cache, please refresh this page by pressing </span>
                        <span className="text-red-600 font-semibold">Ctrl+Shift+R</span>.
                    </div>
                    <div className="text-sm">
                        <span className="text-blue-700">To clear cache in Mobile, please clear </span>
                        <span className="text-red-600 font-semibold">Browser History</span>.
                    </div>
                </div>
            </div>

            {/* Welcome Section */}
            <div className="bg-teal-700 text-white text-center py-1 text-xl font-semibold mb-6">
                WELCOME TO SLOT BOOKING
            </div>
            {/* Slot Booking Form */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 mt-6 mb-8">
                <div>
                    <label className="font-semibold mb-1 block">Select Date</label>
                    <input
                        type="date"
                        className="border p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="font-semibold mb-1 block">Select Slot Type</label>
                    <select className="border p-2 rounded-md w-full text-blue-700">
                        <option className="text-green-700">Select Slot Type</option>
                        <option className="text-green-700">TATKAL</option>
                        <option className="text-green-700">NON-TATKAL</option>
                    </select>
                </div>
                <div>
                    <label className="font-semibold mb-1 block">Select Slot Period</label>
                    <select className="border p-2 rounded-md w-full text-blue-700">
                        <option>Select Slot Period</option>
                        <option>10:00 AM - 10:30 AM</option>
                        <option>10:30 AM - 11:00 AM</option>
                        <option>11:00 AM - 11:30 AM</option>
                        <option>11:30 AM - 12:00 NOON</option>
                        <option>12:00 NOON - 12:30 NOON</option>
                        <option>12:30 NOON - 01:00 PM</option>
                    </select>
                </div>
                <div>
                    <label className="font-semibold mb-1 block">Select Slot Time</label>
                    <select onChange={handleSlotTimeChange} className="border p-2 rounded-md w-full text-blue-700 ">
                        <option value="">Select Slot Time</option>
                        <option value="10:14">10:14</option>
                        <option value="10:16">10:16</option>
                        <option value="10:18">10:18</option>
                        <option value="10:20">10:20</option>
                        <option value="10:22">10:22</option>
                        <option value="10:24">10:24</option>
                        <option value="10:26">10:26</option>
                        <option value="10:28">10:28</option>
                    </select>
                </div>

                {selectedSlotTime && (
                    <div className="col-span-4 mt-4">
                        <table className="w-full border rounded-md shadow-sm">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 text-left font-semibold">Select Service's</th>
                                    <th className="py-2 px-4 text-left font-semibold">Service Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((service, idx) => (
                                    <tr key={service} className={idx % 2 === 1 ? "bg-gray-50" : ""}>
                                        <td className="py-2 px-4 text-center">
                                            <input
                                                type="checkbox"
                                                checked={selectedServices.includes(service)}
                                                onChange={() => handleServiceChange(service)}
                                            />
                                        </td>
                                        <td className="py-2 px-4">{service}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Doctor's Profile Section */}
            <div className="bg-teal-700  text-white text-center py-1 text-xl font-semibold mb-6">
                DOCTOR'S PROFILE
            </div>
            <div className="text-green-700 font-semibold mb-2 pl-2 text-sm">
                * Registration Number and Name as per APMC Registration Certificate.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 mb-2">
                <div>
                    <label className="font-semibold mb-1 block">Registration Number</label>
                    <input
                        type="text"
                        placeholder="Enter Registration Number"
                        className="border p-2 rounded-md w-full"
                    />
                    <div className="text-red-600 text-xs mt-1">
                        * Eg: APMC/FMR/XXXXXX &nbsp; OR &nbsp; AMCXXXXX &nbsp; OR &nbsp; HMCXXXXX
                    </div>
                </div>
                <div>
                    <label className="font-semibold mb-1 block">Doctor Name</label>
                    <input
                        type="text"
                        placeholder="Doctor Name"
                        className="border p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="font-semibold mb-1 block">Mobile Number</label>
                    <input
                        type="text"
                        placeholder="Enter Mobile Number"
                        className="border p-2 rounded-md w-full"
                    />
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <button className="bg-blue-700 text-white px-6 py-2 rounded-md shadow-md font-semibold">
                    Verify Mobile Number
                </button>
                <button
                    className="bg-teal-700 text-white px-6 py-2 rounded-md shadow-md font-semibold ml-4"
                    onClick={() => window.location.href = "/slot"}
                >
                Check Slot Availability
                </button>
            </div>
            <div className="w-full mt-8 bg-[#fffff0] rounded-md py-6 px-2 text-center text-base shadow-md border border-gray-200">
                <div className="mb-2">
                    <span className="font-bold text-red-700 text-xl">
                        For Application & Annexures
                    </span>
                 <li>
                <b>For Application & Annexures</b> <a href="/downloads" className="text-blue-700 underline font-bold">Click Here</a>
              </li>
                </div>
                <div className="flex flex-col md:flex-row justify-around items-start text-left mt-4 gap-6">
                    <div>
                        <div className="font-bold text-red-700 mb-1">Address</div>
                        <div className="text-blue-700">
                            2nd Floor<br />
                            Dr. N.T.R. U H S<br />
                            Vijayawada - 520 008, A.P<br />
                            Ph : 0866-2455280, 2455281<br />
                            <span className="flex items-center gap-1">
                                <span className="inline-block align-middle mr-1">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                        alt="WhatsApp"
                                        style={{ width: "20px", height: "20px" }}
                                    />
                                </span>
                                <a href="tel:9030999616" className="underline">90309 99616</a>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-red-600 mb-1">Working Days</div>
                        <div className="text-blue-700">Monday - Friday</div>
                        <div className="mt-2 text-red-600 font-bold">TATKAL - <span className="text-black font-normal">04 Working Days</span></div>
                        <div className="text-black text-sm">For Each Service</div>
                        <div className="mt-2 text-green-700 font-bold">NON-TATKAL - <span className="text-black font-normal">03 Weeks</span></div>
                    </div>
                    <div>
                        <div className="font-bold text-red-700 mb-1">Counter Timings</div>
                        <div className="text-blue-700">10:00 AM - 04:30 PM</div>
                        <div className="mt-2 font-bold text-green-700">Lunch Break</div>
                        <div className="text-blue-700">01:30 PM - 02:00 PM</div>
                    </div>
                </div>
                <div className="mt-6 text-blue-700 text-sm">
                    Designed, Developed and Hosted by
                    <span className="mx-2">
                        <img src="/nic-logo.png" alt="NIC Logo" className="inline h-6 align-middle" />
                    </span>
                    NIC, AP State Centre, Ministry of Electronics & Information Technology, Government of India.
                </div>
            </div>
        </div>
    )}
  
    </div>
  );
}
