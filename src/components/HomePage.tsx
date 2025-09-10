import React from "react";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* What's New */}
      <section className="border mx-4 sm:mx-10 lg:mx-20 rounded-md shadow bg-white">
        <h2 className="text-primary font-bold px-4 py-2 text-lg">WHAT'S NEW</h2>
        <hr />
        <ul className="p-4 list-disc list-inside space-y-2 text-blue-700 text-sm sm:text-base">
          <li>
            <a href="#">
              Applications for Renewal and Other Services in A.P Medical Council
              will not be accepted by Post or through a Third-Party.
            </a>
          </li>
          <li>
            <a href="#">Click Here For Final Registration // Profile Registration.</a>
          </li>
          <li>
            <a href="#">
              Applications for No Objection & Good Standing Certificates would
              be accepted only after the Final Registration Certificate issued
              by the APMC.
            </a>
          </li>
          <li>
            <a href="#">
              All the candidates are requested to get all orginal certificates
              from SSC / equivalent to higher education (UG / PG) in order to
              upload in the server.
            </a>
          </li>
          <li>
            <a href="#">
              Applications for Renewal and Other Services in A.P Medical Council
              will not be accepted by Post or through a Third-Party.
            </a>
          </li>
        </ul>
      </section>

      {/* Foreign Medical Graduates */}
      <section className="border mx-4 sm:mx-10 lg:mx-20 rounded-md shadow bg-white">
        <h2 className="text-red-500 font-semibold px-4 py-2 text-lg">
        FOREIGN MEDICAL GRADUATES
        </h2>
        <hr />
        <ul className="p-4 list-disc list-inside space-y-2 text-blue-700 text-sm sm:text-base">
          <li>
            <a href="#">Web options released for FMGs, May 2025 Batch.
              </a> </li>
          <li>
            <a href="#">Notification for Provisional Merit List, May 2025 Batch.</a>
          </li>
          <li>
            <a href="#">Notification on Internship Postings for FMGs of AP State. Click here for Registrations</a>
          </li>
          <li>
            <a href="#">Notice on FMGs Dated 07-04-2025</a>
          </li>
          <li><a href="#">Proforma for Compensation Letter for Online Study of FMGs</a>
          </li>
          <li><a href="#">Notice for issuance of NOC Dated 25th Feb, 2025</a>
          </li>
        </ul>
      </section>

      {/* CME/CPD Updates */}
      <section className="border mx-4 sm:mx-10 lg:mx-20 rounded-md shadow bg-white">
        <h2 className="text-purple-700 font-semibold px-4 py-2 text-lg">
          CME/CPD UPDATES
        </h2>
        <hr />
        <ul className="p-4 list-disc list-inside space-y-2 text-blue-700 text-sm sm:text-base">
          <li>
            <a href="#">Instructions for CME/CPD Programmes</a>
          </li>
          <li>
            <a href="#">
              For Online CME / Webinars / Conferences - 2 CDE Credit Hours /
              Points will be awarded per day for 6 hrs duration (as per NMC
              guidelines).
            </a>
          </li>
        </ul>
      </section>

      {/* Notifications and News Updates */}
      <div className="grid mx-4 sm:mx-10 lg:mx-20 grid-cols-1 md:grid-cols-2 gap-6">
        {/* Notifications */}
        <section className="border rounded-md shadow bg-white">
          <h2 className="text-green-600 font-semibold px-4 py-2 text-lg">
            NOTIFICATIONS
          </h2>
          <hr />
          <ul className="p-4 list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
            <li>Medical Register Mandatory</li>
            <li>
              Include Registration Number - INC / NMC / UNIFORM CERTIFICATE is
              mandatory
            </li>
            <li>Services & Timings</li>
          </ul>
        </section>

        {/* News Updates */}
        <section className="border rounded-md shadow bg-white">
          <h2 className="text-orange-600 font-semibold px-4 py-2 text-lg">
            NEWS UPDATES
          </h2>
          <hr />
          <ul className="p-4 list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
            <li>For Online CME / Webinars / Conferences: 2 CDE Credit Hours</li>
            <li>Slot Booking is strictly on first-come-first-serve basis</li>
            <li>Slots will be released on every Friday at 12:00 Noon.</li>
            <li>Sessions scheduled at 11:00 am daily</li>
            <li>All Live / Digital Credit Certificates will expire soon</li>
          </ul>
        </section>
      </div>

      {/* Bottom Section */}
      <div className="grid mx-4 sm:mx-10 lg:mx-20 grid-cols-1 md:grid-cols-2 gap-6">
        {/* Our Role */}
        <section className="border rounded-md shadow bg-white">
          <h2 className="text-blue-500 font-semibold px-4 py-2 text-lg">
            OUR ROLE
          </h2>
          <hr />
          <div className="p-4">
            <p className="text-gray-700 text-sm sm:text-base">
              Andhra Pradesh Medical Council is a Statutory Body constituted
              under an Act of the State Legislature. The primary objective is to
              regulate the practice of modern scientific medicine in the State
              of Andhra Pradesh.
            </p>
            <button onClick={() => navigate("/about")}
             className="mt-3 px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-blue-700 text-sm sm:text-base">
              Read More
            </button>
          </div>
        </section>

        {/* Useful Links */}
        <section className="border rounded-md shadow bg-white">
          <h2 className="text-gray-700 font-semibold px-4 py-2 text-lg">
            USEFUL LINKS
          </h2>
          <hr />
          <div className="p-4">
            <ul className="list-disc list-inside text-blue-700 text-sm sm:text-base space-y-2">
              <li>
                <a href="#">Medical Colleges in A.P</a>
              </li>
              <li>
                <a href="#">Medical Councils in India</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
