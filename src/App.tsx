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
import Contact from "./pages/Contact";
import Slot from "./pages/Slot";
import Page from "./pages/Visionpage";
import History from "./pages/Historypage";
import Missionpage from "./pages/Missionpage";
import Gallery from "./pages/GalleryPage";
import Officer from "./pages/Officer";
import DownloadInfo from "./pages/Downloads";
import SlotBooking from "./pages/Slot-Booking";
import Constitution from "./pages/Constitution";
import LatestUpdates from "./pages/LatestUpdates";
import MeetingsDecisions from "./pages/Meetings-Decisions";
import ActsRules from "./pages/Acts-Rules";
import Notifications from "./pages/Notifications";
import GoodStandingCertificate from "./NRI-Services/GoodStandingCertificate";
import InAbsentiaAffidavit from "./NRI-Services/InAbsentiaAffidavit";
import InAbsentiaRegistration from "./NRI-Services/InAbsentiaRegistration";
import TemporaryPermission from "./NRI-Services/TemporaryPermission";
import NOCApplication from "./pages/NOCApplication";
import FAQ from "./pages/Faq";

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
            <Route path="/services/downloads" element={<DownloadInfo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/slot-Booking" element={<SlotBooking />} />
            <Route path="/slot" element={<Slot />} />
            <Route path="/faq" element={<FAQ />} />

            <Route path="/about/mission" element={<Missionpage />} />
            <Route path="/about/our-history" element={<History />} />
            <Route path="/about/vision" element={<Page />} />
            <Route path="/officers" element={<Officer />} />
            <Route path="/about/gallery" element={<Gallery />} />
            <Route path="/constitution" element={<Constitution />} />
            <Route path="/latest-updates" element={<LatestUpdates />} />
            <Route path="/meetings-decisions" element={<MeetingsDecisions />} />
            <Route path="/acts-rules" element={<ActsRules />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/nri-services/good-standing-certificate" element={<GoodStandingCertificate />} />
            <Route path="/nri-services/in-absentia-affidavit" element={<InAbsentiaAffidavit />} />
            <Route path="/nri-services/in-absentia-registration" element={<InAbsentiaRegistration />} />
            <Route path="/nri-services/temporary-permission" element={<TemporaryPermission />} />
            <Route path="/noc-application" element={<NOCApplication />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
