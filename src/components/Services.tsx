// src/pages/Services.tsx
import React from "react";
import {
  Search,
  Users,
  FileCheck,
  Shield,
  Calendar,
  ArrowRight,
  Clock,
  FileText,
  CreditCard,
  Phone,
  CheckCircle,
  User,
  LogIn,
} from "lucide-react";
import apmcLogo from "../../public/favicon.ico";
import { useNavigate } from "react-router-dom";

const Services: React.FC = () => {

  const navigate = useNavigate(); 
  const services = [
    {
      icon: FileText,
      title: "Doctor Registration",
      description:
        "Register as a medical practitioner in Andhra Pradesh and obtain your medical license.",
      link: "#registration",
    },
    {
      icon: CheckCircle,
      title: "License Verification",
      description:
        "Verify the authenticity of medical licenses and practitioner credentials online.",
      link: "#verification",
    },
    {
      icon: CreditCard,
      title: "Online Payments",
      description:
        "Pay registration fees, renewal charges, and other medical council fees securely online.",
      link: "#payments",
    },
    {
      icon: Users,
      title: "Continuing Medical Education",
      description:
        "Access CME programs, workshops, and professional development courses for doctors.",
      link: "#cme",
    },
    {
      icon: Shield,
      title: "Ethics & Compliance",
      description:
        "Guidelines on medical ethics, professional conduct, and regulatory compliance.",
      link: "#ethics",
    },
    {
      icon: Phone,
      title: "Grievance Redressal",
      description:
        "File complaints, grievances, and get support for medical practice related issues.",
      link: "#grievance",
    },
  ];

  const newsItems = [
    {
      title:
        "New Digital Registration System Launched for Medical Practitioners",
      excerpt:
        "The AP Medical Council has introduced a streamlined online registration system that reduces processing time and improves transparency for new medical license applications.",
      date: "2025-01-15",
      readTime: "3 min read",
      category: "Technology",
    },
    {
      title: "Mandatory CME Credits Increased to 30 Hours Annually",
      excerpt:
        "Starting from 2025, all registered medical practitioners must complete 30 hours of Continuing Medical Education to maintain their active license status.",
      date: "2025-01-14",
      readTime: "2 min read",
      category: "Policy Update",
    },
    {
      title: "Telemedicine Guidelines Updated for Rural Healthcare",
      excerpt:
        "New comprehensive guidelines for telemedicine practice have been issued to improve healthcare accessibility in remote areas of Andhra Pradesh.",
      date: "2025-01-13",
      readTime: "4 min read",
      category: "Healthcare",
    },
    {
      title: "Medical Ethics Workshop Series Announced for 2025",
      excerpt:
        "A series of workshops on medical ethics and professional conduct will be conducted across major cities to enhance professional standards.",
      date: "2025-01-12",
      readTime: "3 min read",
      category: "Education",
    },
    {
      title: "Integration with National Medical Commission Database Completed",
      excerpt:
        "The AP Medical Council database has been successfully integrated with the National Medical Commission for seamless verification and data sharing.",
      date: "2025-01-11",
      readTime: "2 min read",
      category: "Technology",
    },
    {
      title: "New Disciplinary Committee Guidelines for Medical Misconduct",
      excerpt:
        "Updated procedures and guidelines for handling cases of medical misconduct and professional negligence have been implemented.",
      date: "2025-01-10",
      readTime: "5 min read",
      category: "Regulation",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Technology: "bg-blue-100 text-blue-800",
      "Policy Update": "bg-green-100 text-green-800",
      Healthcare: "bg-red-100 text-red-800",
      Education: "bg-orange-100 text-orange-800",
      Regulation: "bg-purple-100 text-purple-800",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <>
      {/* Navigation */}
      <header className="w-full bg-white border-b border-gray-200">
        {/* Top Line */}
        <div className="text-sm text-gray-600 text-white px-6 py-2 bg-teal-700 border-b border-gray-200">
          Government of Andhra Pradesh | Department of Health, Medical & Family
          Welfare
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-between px-6 py-4">
          {/* Left: Logo + Title */}
          <div className="flex items-center space-x-3">
            {/* Logo Image */}
            <img
              src={apmcLogo} // replace with your logo path
              alt="APMC Logo"
              onClick={() => navigate("/")}
              className="w-12 h-12 rounded-full cursor-pointer object-cover"
            />

            {/* Text */}
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                AP Medical Council
              </h1>
              <p className="text-sm text-gray-600">
                Andhra Pradesh Medical Council
              </p>
            </div>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden md:flex space-x-8 font-bold text-gray-700 font-medium">
            <a href="/" className="hover:text-teal-700">
              Home
            </a>

            {/* Final Registration as a simple link */}
            <a href="/popup" className="hover:text-teal-700">
              Final Registration
            </a>

            <a href="/services/verify" className="hover:text-teal-700">
              Search Medical Register
            </a>
          </nav>


          {/* Right: Icons + Login */}
          <div className="flex items-center space-x-4">
            <button onClick={() => navigate("/services/doctor-signup")} className="bg-teal-700 text-white px-4 py-2 rounded-md font-medium hover:bg-teal-800 transition-colors">
              Doctor Signup
            </button>

            <button onClick={() => navigate("/services/doctor-login")} className="bg-teal-700 text-white px-4 py-2 rounded-md font-medium hover:bg-teal-800 transition-colors">
              Doctor Login
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Andhra Pradesh Medical Council
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-8">
              Regulating medical practice, ensuring quality healthcare, and
              maintaining professional standards across Andhra Pradesh
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search for doctor registration, license verification..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-black text-lg focus:outline-none focus:ring-4 focus:ring-teal-300"
                />
                <button className="absolute right-2 top-2 bg-teal-700 text-white px-6 py-2 rounded-lg hover:bg-teal-800 transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                  <Users size={32} />
                </div>
                <div className="text-3xl font-bold">25,000+</div>
                <div className="text-teal-100">Registered Doctors</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                  <FileCheck size={32} />
                </div>
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-teal-100">Licenses Issued</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                  <Shield size={32} />
                </div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-teal-100">Verified Practitioners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive services for medical practitioners, healthcare
              institutions, and the public
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-teal-200 transition-all duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-lg mb-6 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="inline-flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors"
                  >
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest developments in medical regulation
              and healthcare policies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={14} className="mr-1" />
                      {item.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-2" />
                      {new Date(item.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>

                    <button className="flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors">
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Final Registration */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[400px]">
              <div className="bg-teal-700 text-white p-4 flex items-center gap-3">
                <User size={24} />
                <h2 className="text-lg font-semibold">
                  Procedure for Final Registration (PR)
                </h2>
              </div>
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-teal-700 scrollbar-track-gray-100">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full mt-1"></div>
                    <p className="text-gray-800 font-medium">
                      Filled in Online Registration Form.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full mt-1"></div>
                    <p className="text-gray-800 font-medium">
                      Payment for Id Card.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full mt-1"></div>
                    <p className="text-gray-800 font-medium">
                      Upload Enclosures.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full mt-1"></div>
                    <p className="text-gray-800 font-medium">Slot Booking.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full mt-1"></div>
                    <div>
                      <p className="text-gray-800 font-medium">
                        Check Details.
                      </p>
                      <p className="text-blue-600 text-sm mt-1">
                        Know your Acknowledgement Id, Status & Slot Id.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full mt-1"></div>
                    <p className="text-gray-800 font-medium">
                      Id Card will be sent through the registered post along
                      with the final registration certificate.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t space-y-3">
                <button className="w-full border  text-black py-2 px-4 rounded hover:bg-teal-400">
                  M.B.B.S Studied in Andhra Pradesh
                </button>
                <button className="w-full bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600">
                  M.B.B.S Studied in Other State
                </button>
                <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                  M.B.B.S Studied in Other Country (FMGs)
                </button>
              </div>
            </div>

            {/* Profile Registration (Reference Height) */}

            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[400px]">
              <div className="bg-teal-700 text-white p-4 flex items-center gap-3">
                <Users size={24} />
                <h2 className="text-lg font-semibold">
                  Procedure for Profile Registration
                </h2>
              </div>
              <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-teal-700 scrollbar-track-gray-100">
                {[
                  "Payment for Id Card.",
                  "Upload Enclosures.",
                  "Slot Booking.",
                  "Check Details.",
                  "Id Card will be sent via post.",
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full mt-1"></div>
                    <p className="text-gray-800 font-medium">{step}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t">
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Apply
                </button>
              </div>
            </div>

            {/* eDoctor */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[400px]">
              <div className="bg-teal-700 text-white p-4 flex items-center gap-3">
                <LogIn size={24} />
                <h2 className="text-lg font-semibold">Procedure for eDoctor</h2>
              </div>
              <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-teal-700 scrollbar-track-gray-100">
                {[
                  "Login via APMC eDoctor with Username, Captcha & OTP.",
                  "Apply for required Services (Good Standing, NOC, Renewal & Duplicate).",
                  "Upload required enclosures based on service.",
                  "Payment for applied service.",
                  "Subject to Verification from APMC.",
                  "Re Apply.",
                  "If any corrections occured in application, it will be rejected.",
                  "The Rejected Application must be Reapply with suggested corrections.",
                  "Certificate Generation.",
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 border-2 border-gray-400 rounded-full mt-1"></div>
                    <p className="text-gray-800 font-medium">{step}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t">
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
