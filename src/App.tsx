import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Renewal from "./pages/Renewal";
import Contact from "./pages/Contact";
import Slot from "./pages/Slot";
import Visionpage from "./pages/Visionpage";
import Historypage from "./pages/Historypage";
import Missionpage from "./pages/Missionpage";
import GalleryPage from "./pages/GalleryPage";
import Officer from "./pages/Officer";
import Members from "./pages/members";
import MedicalRegisterSearch from "./pages/MedicalRegisterSearch";  
import Register from "./pages/Registration";  
import DownloadInfo from "./pages/Downloads";
import SlotBooking from "./pages/Slot-Booking";

// Special pages
import ActsRulesPage from "./pages/act-rulespage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Index />} />

            {/* About */}
            <Route path="/about" element={<About />} />
            <Route path="/about/mission" element={<Missionpage />} />
            <Route path="/about/our-history" element={<Historypage />} />
            <Route path="/about/vision" element={<Visionpage />} />
            <Route path="/about/gallery" element={<GalleryPage />} />

            {/* Services */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/acts-rules" element={<ActsRulesPage />} />
            <Route path="/services/downloads" element={<DownloadInfo />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<MedicalRegisterSearch />} />

            {/* Registration / Renewal */}
            <Route path="/renewal" element={<Renewal />} />

            {/* Members & Officers */}
            <Route path="/members" element={<Members />} />
            <Route path="/officers" element={<Officer />} />

            {/* Slot Booking */}
            <Route path="/slot-booking" element={<SlotBooking />} />
            <Route path="/slot" element={<Slot />} />

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Gallery (duplicate path removed, handled in /about/gallery) */}

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
