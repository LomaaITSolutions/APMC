import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
    <Header />
      <Helmet>
        <title>About Us - Andhra Pradesh Medical Council (APMC)</title>
      </Helmet>

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
      <Footer />
    </>
  );
};

export default About;
