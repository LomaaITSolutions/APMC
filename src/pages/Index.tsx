import Header from "@/components/Header";
import ServiceButtons from "@/components/ServiceButtons";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServiceButtons />
      <Hero />
      <HomePage />
      <QuickActions />
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Index;
