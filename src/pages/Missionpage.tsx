import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Aboutsidebar from "@/components/ui/Aboutsidebar";
import React from "react";

const Sidebar = () => {
  return (
   <>
   <Aboutsidebar />
   </>
  );
};

const MainContent = () => {
  return (
    <main className="flex-1 p-6 bg-white border rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-4">Our Mission</h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        We protect, promote and maintain the health and safety of the public by
        making sure that Registered Medical Practitioners follow proper standards
        of medical practice.
      </p>

      <ul className="space-y-3 text-gray-700">
        <li>
       ➜ Maintaining an up-to-date database of qualified doctors possessing
          recognised degrees in modern scientific medicine within Andhra Pradesh.
        </li>
        <li>➜ Fostering good medical practices.</li>
        <li>➜ Promoting high standards in medical education and training.</li>
        <li>
        ➜ Dealing firmly and fairly with doctors whose fitness to practice is in
          doubt.
        </li>
        <li>
         ➜ Maintain a Code of Conduct for the Medical Practitioners Registered
          with this council.
        </li>
        <li>
         ➜ Responsible for regular upgrading of knowledge, techniques of practice
          and to impart the same to the needy in society.
        </li>
      </ul>
    </main>
  );
};

const Missionpage = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen flex justify-center bg-gray-50 p-6">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl gap-6">
        <Sidebar />
        <MainContent />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Missionpage;
