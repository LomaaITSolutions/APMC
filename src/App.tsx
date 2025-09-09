import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Registration from "./pages/Registration";
import Verification from "./pages/Verification";
import Renewal from "./pages/Renewal";
import Downloads from "./pages/Downloads";
import Contact from "./pages/Contact";
import Page from "./pages/Visionpage";
import History from "./pages/Historypage";
import Missionpage from "./pages/Missionpage";
import Gallery from "./pages/GalleryPage";
import Officer from "./pages/Officer";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/verify" element={<Verification />} />
            <Route path="/renewal" element={<Renewal />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/mission" element={<Missionpage />} />
            <Route path="/history" element={<History />} />
            <Route path="/vision" element={<Page />} />


            <Route path="/gallery" element={<Gallery />} />  
            <Route path="/officers" element={<Officer />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
