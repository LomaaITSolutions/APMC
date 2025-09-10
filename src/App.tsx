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
import RegistrationAP from "./components/RegistrationAP";
import RegistrationOtherState from "./components/RegistrationOtherState";
import RegistrationOtherCountry from "./components/RegistrationOtherCountry";
import PaymentIDCard from "./components/PaymentIDCard";
import UploadEnclosures from "./components/UploadEnclosures";
import BookSlot from "./components/BookSlot";
import Details from "./components/Details";
import DoctorRegister from './pages/DoctorRegister'
import DoctorRegisterForm from './pages/Registerform'
import DoctorLogin from "./pages/Doctor-login";
import DoctorLoginPage from "./pages/Doctor-Login-page";
import MedicalRegisterSearch from "./components/MedicalRegisterSearch";
import Popup from "./components/Popup";

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
            <Route path="/registration/ap" element={<RegistrationAP />} />
        <Route path="/registration-other-state" element={<RegistrationOtherState />} />
        <Route path="/registration-other-country" element={<RegistrationOtherCountry />} />
        <Route path="/payment-id-card" element={<PaymentIDCard />} />
        <Route path="/upload-enclosures" element={<UploadEnclosures />} />
        <Route path="/book-slot" element={<BookSlot />} />
        <Route path="/details" element={<Details />} />
        <Route path="/services/doctor-signup" element={<DoctorRegister />} />
        <Route path="/services/doctor-signup/Form" element={<DoctorRegisterForm />} />
        <Route path="/services/doctor-login" element={<DoctorLogin />} />
        <Route path="/services/doctor-login-page" element={<DoctorLoginPage />} />
        <Route path="/services/verify" element={<MedicalRegisterSearch />} />
        <Route path="/popup" element={<Popup />} />

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
            <Route path="/about/gallery" element={<Gallery />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
