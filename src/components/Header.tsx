import { Button } from "@/components/ui/button";
import {
  Menu,
  Phone,
  Mail,
  Search,
  X,
  ChevronDown,
  ChevronUp,
  Settings,
  Eye,
  FileSearch,
} from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import apmcLogo from "../../public/favicon.ico";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cmeOpen, setCmeOpen] = useState(false);
  const [nriOpen, setNriOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91-863-2340116</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>apmcvjw@gmail.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span>Emergency: +91-863-2340117</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col">
            {/* Logo & Title */}
            <div className="flex items-center justify-between gap-4">
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => navigate("/")}
              >
                <img
                  src={apmcLogo}
                  alt="APMC Logo"
                  className="w-12 h-12 object-contain rounded-full"
                />
                <div className="items-center">
                  <h1 className=" text-lg sm:text-xl md:text-2xl font-bold text-primary leading-tight">
                    ANDHRA PRADESH MEDICAL COUNCIL
                  </h1>
                  <p className="text-sm font-bold">
                    {" "}
                    Regulating Medical Practice Since 1956
                  </p>
                </div>
              </div>
              {/* Right: Extra content (like the Telangana site) */}
              <div className="hidden md:flex items-center gap-6">
                {/* Person 1 */}
                <div className="flex items-center gap-2">
                  <img
                    src="/cm-img.jpeg" // replace with your real image path
                    alt="Person 1"
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow"
                  />
                  <div>
                    <p className="text-sm font-semibold">
                      Sri Chandra Babu Naidu
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Hon'ble Chief Minister of Andhra Pradesh
                    </p>
                  </div>
                </div>

                {/* Person 2 */}
                <div className="flex items-center gap-2">
                  <img
                    src="/minister.jpg" // replace with your real image path
                    alt="Person 2"
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow"
                  />
                  <div>
                    <p className="text-sm font-semibold">
                      Sri Satya Kumar Yadav
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Hon'ble Health, Medical & Family Welfare Minister
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-2">
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="">
                <NavigationMenuItem>
                  <Button
                    variant="ghost"
                    className="hover:text-primary"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    onClick={() => navigate("/about")}
                    className="hover:text-primary"
                  >
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4">
                      <div className="grid gap-2">
                        <Button
                          variant="ghost"
                          className="justify-start"
                          onClick={() => navigate("/about/mission")}
                        >
                          Mission
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start"
                          onClick={() => navigate("/about/vision")}
                        >
                          Vision
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start"
                          onClick={() => navigate("/about/our-history")}
                        >
                          Our History
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start"
                          onClick={() => navigate("/about/gallery")}
                        >
                          Gallery
                        </Button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-primary">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4">
                      <div className="grid gap-2">
                        <Button
                          variant="ghost"
                          className="justify-start"
                          onClick={() => navigate("/services/notification")}
                        >
                          Notifications
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start"
                          onClick={() => navigate("/services/acts-rules")}
                        >
                          Acts/Rules
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start"
                          onClick={() =>
                            navigate("/services/meetings-decisions")
                          }
                        >
                          Meetings and Decisions
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start"
                          onClick={() => navigate("/services/downloads")}
                        >
                          View Downloads
                        </Button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-primary"
                  onClick={()=> navigate("/cme/portal")}>
                    CME
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4">
                      <div className="grid gap-2">
                        <Button
                          variant="ghost"
                          className="justify-start"
                          onClick={() => navigate("/cme/registration")}
                        >
                          CME Registration
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start"
                          onClick={() => navigate("/cme/programmes")}
                        >
                          Upcoming CME Programmes
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start"
                          onClick={() => navigate("/cme/instructions")}
                        >
                          Instructions
                        </Button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-primary">
                    NRI Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4">
                      <div className="grid gap-2">
                        <Button
                          variant="ghost"
                          className="justify-start"
                          onClick={() =>
                            navigate("/nri/in-absentia-registration")
                          }
                        >
                          IN ABSENTIA Registration
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start"
                          onClick={() => navigate("/nri/affidavit-proforma")}
                        >
                          IN ABSENTIA Affidavit Proforma
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start"
                          onClick={() =>
                            navigate("/nri/good-standing-certificate")
                          }
                        >
                          NMC Good Standing Certificate
                        </Button>
                        <Button
                          variant="ghost"
                          className="justify-start"
                          onClick={() => navigate("/nri/temporary-permission")}
                        >
                          Temporary Permission for Foreign/Outside State
                          visiting Doctors
                        </Button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button
                    variant="ghost"
                    className="hover:text-primary"
                    onClick={() => navigate("/constitution")}
                  >
                    Constitution
                  </Button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button
                    variant="ghost"
                    className="hover:text-primary"
                    onClick={() => navigate("/faq")}
                  >
                    FAQ
                  </Button>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button
                    variant="ghost"
                    className="hover:text-primary"
                    onClick={() => navigate("/contact")}
                  >
                    Contact Us
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center gap-2 max-w-md flex-1 mx-8">
              <div className="relative flex-1">
                <Input
                  placeholder="Search registration..."
                  className="pr-10 border-2 border-gray-200"
                />
                <Button
                  size="sm"
                  className="absolute right-1 top-1 h-8 w-8 p-0"
                >
                  <Search size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}

        {isMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-accent rounded-lg">
            <nav className="flex flex-col ">
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => navigate("/")}
              >
                Home
              </Button>
              {/* About Dropdown */}
              <div className="pl-2">
                <button
                  onClick={() => navigate("/about")}
                  className="flex pl-2 py-2 items-center justify-between w-full text-left text-sm font-medium"
                >
                  About Us{" "}
                  {aboutOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {aboutOpen && (
                  <div className="flex flex-col gap-1 pl-4">
                    <Button
                      variant="ghost"
                      className="justify-start text-sm"
                      onClick={() => navigate("/about/mission")}
                    >
                      Mission
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-sm"
                      onClick={() => navigate("/about/vision")}
                    >
                      Vision
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-sm"
                      onClick={() => navigate("/about/our-history")}
                    >
                      Our History
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-sm"
                      onClick={() => navigate("/about/gallery")}
                    >
                      Gallery
                    </Button>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div className="pl-2">
                <button
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="flex pl-2 py-2 items-center justify-between w-full text-left text-sm font-medium"
                >
                  Services{" "}
                  {serviceOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {serviceOpen && (
                  <div className="flex flex-col gap-1 pl-4">
                    <Button
                      variant="ghost"
                      className="justify-start text-sm"
                      onClick={() => navigate("/services/notification")}
                    >
                      Notifications
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-sm"
                      onClick={() => navigate("/services/acts-rules")}
                    >
                      Acts/Rules
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-sm"
                      onClick={() => navigate("/services/meetings-decisions")}
                    >
                      Meetings and Decisions
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-sm"
                      onClick={() => navigate("/services/downloads")}
                    >
                      View Downloads
                    </Button>
                  </div>
                )}
              </div>

              {/* CME Dropdown */}
              <div className="pl-2">
                <button
                  onClick={() => navigate("/cme/portal")}
                  className="flex pl-2 py-2 items-center justify-between w-full text-left text-sm font-medium"
                >
                  CME{" "}
                  {cmeOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {cmeOpen && (
                  <div className="flex flex-col gap-1 pl-4">
                    <Button
                      variant="ghost"
                      className="justify-start text-sm"
                      onClick={() => navigate("/cme/registration")}
                    >
                      CME Registration
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-sm"
                      onClick={() => navigate("/cme/programmes")}
                    >
                      Upcoming CME Programmes
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-sm"
                      onClick={() => navigate("/cme/instructions")}
                    >
                      Instructions
                    </Button>
                  </div>
                )}
              </div>

              {/* NRI Dropdown */}
              <div className="pl-2">
                <button
                  onClick={() => setNriOpen(!nriOpen)}
                  className="flex pl-2 items-center justify-between w-full text-left text-sm font-medium"
                >
                  NRI Services{" "}
                  {nriOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {nriOpen && (
                  <div className="flex flex-col gap-1 pl-6 mt-2">
                    <Button
                      variant="ghost"
                      className="justify-start text-sm"
                      onClick={() => navigate("/nri/in-absentia-registration")}
                    >
                      IN ABSENTIA Registration
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-sm"
                      onClick={() => navigate("/nri/affidavit-proforma")}
                    >
                      IN ABSENTIA Affidavit Proforma
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-sm"
                      onClick={() => navigate("/nri/good-standing-certificate")}
                    >
                      NMC Good Standing Certificate
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-sm"
                      onClick={() => navigate("/nri/temporary-permission")}
                    >
                      Temporary Permission for Foreign/Outside State visiting
                      Doctors
                    </Button>
                  </div>
                )}
              </div>

              {/* Other links */}
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => navigate("/constitution")}
              >
                Constitution
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => navigate("/faq")}
              >
                FAQ
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
            </nav>

            {/* Search */}
            <div className="mt-4 flex items-center gap-2">
              <Input
                placeholder="Search registration..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button
                size="sm"
                onClick={() =>
                  navigate(`/verify?q=${encodeURIComponent(query)}`)
                }
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
