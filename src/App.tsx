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
import RegistrationAP from "./components/RegistrationAP";
import RegistrationOtherState from "./components/RegistrationOtherState";
import RegistrationOtherCountry from "./components/RegistrationOtherCountry";
import PaymentIDCard from "./components/PaymentIDCard";
import UploadEnclosures from "./components/UploadEnclosures";
import BookSlot from "./components/BookSlot";
import Details from "./components/Details";
import DoctorRegister from "./pages/DoctorRegister";
import DoctorRegisterForm from "./pages/Registerform";
import DoctorLogin from "./pages/Doctor-login";
import DoctorLoginPage from "./pages/Doctor-Login-page";
import Popup from "./components/Popup";
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
            <Route path="/registration/ap" element={<RegistrationAP />} />
            <Route
              path="/registration-other-state"
              element={<RegistrationOtherState />}
            />
            <Route
              path="/registration-other-country"
              element={<RegistrationOtherCountry />}
            />
            <Route path="/payment-id-card" element={<PaymentIDCard />} />
            <Route path="/upload-enclosures" element={<UploadEnclosures />} />
            <Route path="/book-slot" element={<BookSlot />} />
            <Route path="/details" element={<Details />} />
            <Route
              path="/services/doctor-signup"
              element={<DoctorRegister />}
            />
            <Route
              path="/services/doctor-signup/Form"
              element={<DoctorRegisterForm />}
            />
            <Route path="/services/doctor-login" element={<DoctorLogin />} />
            <Route
              path="/services/doctor-login-page"
              element={<DoctorLoginPage />}
            />
            <Route
              path="/services/verify"
              element={<MedicalRegisterSearch />}
            />
            <Route path="/popup" element={<Popup />} />

            <Route path="/register" element={<Registration />} />
            <Route path="/verify" element={<Verification />} />
            <Route path="/renewal" element={<Renewal />} />
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
            <Route path="/faq" element={<FAQ />} />
            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Gallery (duplicate path removed, handled in /about/gallery) */}

            {/* Catch-all */}
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
            <Route
              path="/nri-services/good-standing-certificate"
              element={<GoodStandingCertificate />}
            />
            <Route
              path="/nri-services/in-absentia-affidavit"
              element={<InAbsentiaAffidavit />}
            />
            <Route
              path="/nri-services/in-absentia-registration"
              element={<InAbsentiaRegistration />}
            />
            <Route
              path="/nri-services/temporary-permission"
              element={<TemporaryPermission />}
            />
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
