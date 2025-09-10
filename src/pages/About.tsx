import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const responsibilities = [
  {
    title: "Registration of Medical Practitioners",
    description:
      "Granting registration to eligible doctors who hold recognized medical qualifications.",
  },
  {
    title: "License Renewal",
    description:
      "Ensuring periodic renewal of licenses to maintain updated records and compliance.",
  },
  {
    title: "Maintaining the State Medical Register",
    description:
      "Publishing and updating the register of medical practitioners to ensure transparency.",
  },
  {
    title: "Verification of Medical Practitioners",
    description:
      "Providing license verification services for doctors applying abroad or for employment purposes.",
  },
  {
    title: "Disciplinary Action",
    description:
      "Investigating complaints against practitioners and taking action in cases of professional misconduct or unethical practices.",
  },
  {
    title: "Promoting Continuous Medical Education (CME)",
    description:
      "Encouraging doctors to stay updated with the latest medical advancements and practices.",
  },
];

  return (
    <>
    <Header />
          <Helmet>
        <title>About Us - Andhra Pradesh Medical Council (APMC)</title>
      </Helmet>
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">About Us</h2>
          <p className="text-gray-600">
            The <strong>Andhra Pradesh Medical Council (APMC)</strong> is a
            statutory body constituted under the Andhra Pradesh Medical Council
            Act, 1968, to regulate the practice of modern scientific medicine
            across the state. Since its inception, the Council has been
            dedicated to ensuring the highest standards of medical ethics,
            professional accountability, and public trust in healthcare.
          </p>

        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src="/doctors.jpeg" // replace with your image path
            alt="About Andhra Pradesh Medical Council"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
            {/* About the Council */}
     <section className="bg-gray-50 py-16 px-6 lg:px-20">
           <div className="container mx-auto text-center mb-12">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-primary">
          About the Council
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Learn more about our history, mission, and vision that guide the
          Andhra Pradesh Medical Council in regulating and strengthening
          healthcare across the state.
        </p>
      </div>

      <div className="bg-gray-50 flex justify-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full items-start">
          
          {/* Our History */}
          <div className="bg-white border rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">Our History</h2>
            <p className="text-gray-600">
              The Andhra Pradesh Medical Council (APMC) is a statutory body 
              constituted under the Andhra Pradesh Medical Council Act to 
              regulate the practice of modern scientific medicine in the state. 
              APMC was established to bring uniformity in medical registration 
              and ensure professional accountability of doctors across Andhra Pradesh.
            </p>
            <button
              onClick={() => navigate("/about/our-history")}
              className="mt-4 px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-gray-700"
            >
              View More
            </button>
          </div>

          {/* Mission */}
          <div className="bg-white border rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">Mission</h2>
            <p className="text-gray-600">
              Our mission is to safeguard the health and well-being of the public 
              by ensuring that only qualified and competent medical practitioners 
              are licensed to practice. We are committed to upholding ethical 
              standards, promoting continuous medical education, and ensuring 
              accountability in medical services.
            </p>
            <button
              onClick={() => navigate("/about/mission")}
              className="mt-4 px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-gray-700"
            >
              View More
            </button>
          </div>

          {/* Vision */}
          <div className="bg-white border rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-3">Vision</h2>
            <p className="text-gray-600">
              Our vision is to build a transparent, accountable, and 
              people-centric regulatory body that inspires trust in the 
              healthcare system. We strive to uphold medical excellence, 
              encourage ethical practice, and work towards a healthier 
              society where every citizen has access to safe and quality 
              medical care.
            </p>
            <button
              onClick={() => navigate("/about/vision")}
              className="mt-4 px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-gray-700"
            >
              View More
            </button>
          </div>
        </div>
      </div>
      </section>

        {/* Our Role & Responsibilities */}
      <section className="bg-white py-16 px-6 lg:px-20">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-primary">
          Our Role & Responsibilities
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          APMC plays a vital role in maintaining professional standards in
          medical practice. The core responsibilities of the Council include:
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {responsibilities.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 border rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-6 text-left"
          >
            <h3 className="text-lg font-semibold  mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>

      <Footer />
    </>
  );
};

export default About;
