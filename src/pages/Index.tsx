import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import QuickActions from "@/components/QuickActions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <QuickActions />
      <Footer />
    </div>
  );
};

export default Index;
