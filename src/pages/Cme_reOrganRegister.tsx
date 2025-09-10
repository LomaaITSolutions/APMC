import React from "react";
import { Award, BarChart3, Upload, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import CmeSiderbar from "@/components/ui/CmeSiderbar";
import CmeHeader from "@/components/ui/CmeHeader";
import Header from "@/components/Header";

const OrganisationRegistration = () => {
  return (
     <div className="min-h-screen">
      <Header />


      {/* Top Header with Background Image */}
      <CmeHeader />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col-reverse md:flex-row gap-8">
          {/* Left Sidebar - Hidden on Mobile */}
          <div className="hidden md:block w-full md:w-72">
            <CmeSiderbar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="text-center mb-18">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6">
                   Organisation Registration For CME / CPD Programmes
              </h2>

           <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 mb-10">
        <h3 className="text-xl font-semibold text-red-600 mb-4">
          Organisation Registration For Rejected Applications
        </h3>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Enter Acknowledgement ID Received in SMS"
            className="flex-1 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Search
          </Button>
        </div>
      </div>


            </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { icon: Award, title: "CME Credits", desc: "Continuing Medical Education" },
            { icon: BarChart3, title: "Analytics", desc: "Registration Statistics" },
            { icon: Upload, title: "Document Upload", desc: "Secure File Management" },
            { icon: CheckCircle, title: "Compliance", desc: "Regulatory Standards" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-all duration-300 group cursor-pointer">
                <Icon size={32} className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Card>
            );
          })}
        </div>
          </div>
          
        </div>
       
      </div>
        
      <Footer />
    </div>
  );
};

export default OrganisationRegistration;



 
 
