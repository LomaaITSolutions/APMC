import React from "react";

const HomePage = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* What's New */}
      <section className="border rounded-md shadow bg-white">
        <h2 className="bg-red-600 text-white font-semibold px-4 py-2 text-lg">
          WHAT'S NEW
        </h2>
         <ul className="p-4 list-disc list-inside space-y-2 text-blue-700">
          <li><a href="#">Applications for Renewal and Other Services in A.P Medical Council will not be accepted by Post or through a Third-Party.</a></li>
          <li><a href="#">Click Here For Final Registration // Profile Registration.</a></li>
          <li><a href="#">Notification for MopUp Counselling, May 2023 Batch</a></li>
          <li><a href="#">Instruction for Provisionally Vacant List, May 2023 Batch</a></li>
        </ul>
        <div className="p-4 text-gray-700">
          Applications for Renewal and Other Services in A.P Medical Council will not be accepted by Post or through a Third-Party.
          Click Here For Final Registration // Profile Registration.
Applications for No Objection & Good Standing Certificates would be accepted only after the Final Registration Certificate issued by the APMC.
        </div>
      </section>

      {/* Foreign Medical Graduates */}
      <section className="border rounded-md shadow bg-white">
        <h2 className="bg-blue-600 text-white font-semibold px-4 py-2 text-lg">
          Foreign Medical Graduates
        </h2>
        <ul className="p-4 list-disc list-inside space-y-2 text-blue-700">
          <li><a href="#">Web options released for FMGs, May 2023 Batch</a></li>
          <li><a href="#">Vacancy positions for MopUp Counselling, May 2023 Batch</a></li>
          <li><a href="#">Notification for MopUp Counselling, May 2023 Batch</a></li>
          <li><a href="#">Instruction for Provisionally Vacant List, May 2023 Batch</a></li>
        </ul>
      </section>

      {/* CME/CPD Updates */}
      <section className="border rounded-md shadow bg-white">
        <h2 className="bg-purple-600 text-white font-semibold px-4 py-2 text-lg">
          CME/CPD Updates
        </h2>
        <div className="p-4 text-gray-700">
          Instructions for CME/CPD Programmes <br />
          <span className="text-sm text-gray-500">
            For Online CME / Webinars / Conferences - 2 CDE Credit Hours / Points will be awarded per day for 6 hrs duration (as per NMC guidelines).
          </span>
        </div>
      </section>

      {/* Notifications and News Updates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Notifications */}
        <section className="border rounded-md shadow bg-white">
          <h2 className="bg-green-600 text-white font-semibold px-4 py-2 text-lg">
            NOTIFICATIONS
          </h2>
          <ul className="p-4 list-disc list-inside text-gray-700 space-y-2">
            <li>Medical Register Mandatory</li>
            <li>Include Registration Number - INC / NMC / UNIFORM CERTIFICATE is mandatory</li>
            <li>Services & Timings</li>
          </ul>
        </section>

        {/* News Updates */}
        <section className="border rounded-md shadow bg-white">
          <h2 className="bg-orange-600 text-white font-semibold px-4 py-2 text-lg">
            NEWS UPDATES
          </h2>
          <ul className="p-4 list-disc list-inside text-gray-700 space-y-2">
            <li>For Online CME / Webinars / Conferences: 2 CDE Credit Hours</li>
            <li>Seat Booking is strictly on first-come-first-serve basis</li>
            <li>Sessions scheduled at 11:00 am daily</li>
            <li>All Live / Digital Credit Certificates will expire soon</li>
          </ul>
        </section>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Our Role */}
        <section className="border rounded-md shadow bg-white">
          <h2 className="bg-gray-700 text-white font-semibold px-4 py-2 text-lg">
            Our Role
          </h2>
          <div className="p-4">
            <p className="text-gray-700">
              Learn about the important role of the Medical Council.
            </p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              Read More
            </button>
          </div>
        </section>

        {/* Useful Links */}
        <section className="border rounded-md shadow bg-white">
          <h2 className="bg-gray-700 text-white font-semibold px-4 py-2 text-lg">
            Useful Links
          </h2>
          <div className="p-4">
            <ul className="list-disc list-inside text-blue-700">
              <li><a href="#">Medical Councils in India</a></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
