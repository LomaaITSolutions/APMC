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
import Contact from "./pages/Contact";
import Slot from "./pages/Slot";
import Page from "./pages/Visionpage";
import History from "./pages/Historypage";
import Missionpage from "./pages/Missionpage";
import Gallery from "./pages/GalleryPage";
import Officer from "./pages/Officer";
import DownloadInfo from "./pages/Downloads";
import SlotBooking from "./pages/Slot-Booking";

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
            <Route path="/services/downloads" element={<DownloadInfo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/slot-Booking" element={<SlotBooking />} />
            <Route path="/slot" element={<Slot />} />

            <Route path="/about/mission" element={<Missionpage />} />
            <Route path="/about/our-history" element={<History />} />
            <Route path="/about/vision" element={<Page />} />

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
