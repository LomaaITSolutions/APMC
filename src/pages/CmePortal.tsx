import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CmeHeader from "@/components/ui/CmeHeader";
import CmeSiderbar from "../components/ui/CmeSiderbar";
import {   
  CheckCircle, 
  Upload, 
  BarChart3, 
  Award,
} from "lucide-react";

const CMEPortal = () => {
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
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6">
                Welcome to CME / CPD Programmes
              </h2>

              {/* Medical Education Illustration */}
              <div className="bg-[url('/Bgcme.png')] bg-cover bg-center rounded-2xl p-8 md:p-12 mb-10 relative overflow-hidden shadow-md h-64 md:h-[500px] flex justify-center items-center">
                <div className="bg-white/20 rounded-2xl p-4 md:p-8 backdrop-blur-sm border border-white/30 lg:mt-10">
                  <div className="w-32 md:w-40 h-24 md:h-32 bg-white/95 rounded-xl flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <GraduationCap className="w-6 md:w-12 h-6 md:h-12 text-primary mx-auto mb-2" />
                      <div className="text-primary font-bold text-sm md:text-xl">MEDICAL</div>
                      <div className="text-primary font-bold text-sm md:text-xl">EDUCATION</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
        
      <Footer />
    </div>
  );
};

export default CMEPortal;
