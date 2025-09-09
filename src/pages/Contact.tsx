import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
 
const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    toast({
      title: "Message sent",
      description: "We'll get back to you shortly.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    
    <main className="min-h-screen bg-background">
      <Header />
      <Helmet>
        <title>Contact | Andhra Pradesh Medical Council</title>
        <meta
          name="description"
          content="Contact the APMC office for support, queries, and services."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <section className="text-gray-600 body-font relative mt-[-60px] ">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* ===== Left Side: Map + Address ===== */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Andhra%20Pradesh%20Medical%20Council%20Vijayawada&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            />
            <div className="bg-white relative flex flex-wrap py-2 rounded shadow-md">
              <div className="lg:w-1/2 px-6 text-xs">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Andhra Pradesh Medical Council
                  <br />
                  2nd Floor, Dr. N.T.R University of Health Sciences
                  <br />
                  Vijayawada – Andhra Pradesh – 520008
                </p>
              </div>
              <div className="lg:w-1/2 px-4 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  className="text-indigo-500 leading-relaxed text-sm"
                  href="mailto:contact@apmedicalcouncil.in"
                >
                  contact@apmedicalcouncil.in
                </a>
                <br />
                <a
                  className="text-indigo-500 leading-relaxed mt-1 text-sm"
                  href="mailto:registrar@apmedicalcouncil.in"
                >
                  registrar@apmedicalcouncil.in
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-xs">
                  0866-245 5280 (Mon–Fri, 10:00 am–1:30 pm & 2:00 pm–4:30 pm)
                  <br />
                  0866-245 5281 (Support)
                  <br />
                  WhatsApp: 90309 99616
                </p>
              </div>
            </div>
          </div>

          {/* ===== Right Side: Form ===== */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              CONTACT
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>

              <button
                type="submit"
                className="text-white bg-teal-700 border-0 py-2 px-6 
                focus:outline-none hover:bg-teal-600 rounded text-lg"
              >
                Send Message
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-3">
              Designed, Developed and Hosted by{" "}
              <a
                href="https://lomaait.com/"
                className="text-blue-500 hover:underline hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                LomaaITSolutions
              </a>{" "}
              , A.P State
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
