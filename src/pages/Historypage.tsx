import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Aboutsidebar from "@/components/ui/Aboutsidebar";
import React from "react";
import { Link } from "react-router-dom";

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
      <h1 className="text-2xl font-bold mb-4">Our History</h1>

      <ul className="space-y-3 text-gray-700">
        <li>
         ➜ Andhra Pradesh Medical Council is a Body corporate established by an
          Act of the State Legislature, vide Act No.23 of 1968, by integrating
          the hitherto Two State Medical Councils, i.e. Hyderabad State Medical
          Council and Andhra Medical Council.
        </li>
        <li>
         ➜ The Council was first constituted by a notification issued in
          G.O.Ms.No.662 on 19th December, 1991 and has been constituted from
          time to time as per the Act.
        </li>
        <li>
         ➜ Interim Medical Councils were constituted on 2.1.2012, vide
          G.O.Rt.No.08 HM & FW (E1) Department and on 28.12.2012, vide
          G.O.Rt. No.1839, HM & FW Department.
        </li>
        <li>
         ➜ The Council has an Executive Committee constituted under Section-11
          of the Act with Chairman, Vice Chairperson as ex-officio and three
          other members.
        </li>
        <li>
         ➜ Regularly constituted Committees exist under Section-12 of the Act,
          such as Ethics Committee, Administrative Committee, Finance
          Committee, CME Committee, and others.
        </li>
      </ul>

      <p className="mt-6 text-gray-700 leading-relaxed">
        The Andhra Pradesh Medical Council has been working to strengthen
        medical governance and ensure public safety by maintaining standards,
        monitoring practitioners, and providing a structured framework for
        medical education and practice throughout the state.
      </p>
    </main>
  );
};

const History = () => {
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

export default History;
