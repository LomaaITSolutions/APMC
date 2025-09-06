import { Helmet } from "react-helmet-async";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Services | Andhra Pradesh Medical Council</title>
        <meta name="description" content="APMC services: doctor registration, license verification, renewal, NOC, FMG services, and downloads." />
        <link rel="canonical" href="/services" />
      </Helmet>
      <Services />
    </main>
  );
};

export default ServicesPage;
