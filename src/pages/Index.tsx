import Header from "@/components/Header";
import ServiceButtons from "@/components/ServiceButtons";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceButtons />
      <Hero />
      <QuickActions />
      <Footer />
    </div>
  );
};

export default Index;
