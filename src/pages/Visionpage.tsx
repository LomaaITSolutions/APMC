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
      <h1 className="text-2xl font-bold mb-4">Our Vision</h1>

      <ul className="space-y-3 text-gray-700">
        <li>➜ Ensure transparency in pricing of agricultural produce.</li>
        <li>➜ Provide a regulated marketplace for farmers, traders, and buyers.</li>
        <li>➜ Facilitate fair competition among traders.</li>
        <li>➜ Prevent exploitation of farmers by middlemen.</li>
        <li>➜ Provide infrastructure like storage, auction halls, and weighbridges.</li>
      </ul>

      <p className="mt-6 text-gray-700 leading-relaxed">
        Our vision is to strengthen the agricultural marketing system through
        APMCs. We aim to protect farmers’ interests by ensuring fair trade
        practices, transparent pricing, and modern infrastructure that supports
        efficient marketing. Every policy we implement is driven by the
        principle of empowering farmers and building trust among stakeholders,
        thereby contributing to the growth of the agricultural sector.
      </p>
    </main>
  );
};

const Page = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen flex justify-center">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl gap-6 p-6">
        <Sidebar />
        <MainContent />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Page;
