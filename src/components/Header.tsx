import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail, Search, ChevronDown, Settings, Eye, FileSearch } from "lucide-react";
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
import apmcLogo from "@/assets/apmc-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

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
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={apmcLogo} alt="APMC Logo" className="w-12 h-12 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-primary">
                  ANDHRA PRADESH MEDICAL COUNCIL - Regulating Medical Practice Since 1956
                </h1>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <Button variant="ghost" className="hover:text-primary" onClick={() => navigate('/')}>Home</Button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-primary">CME</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4">
                      <div className="grid gap-2">
                        <Button variant="ghost" className="justify-start" onClick={() => navigate('/cme/registration')}>
                          CME Registration
                        </Button>
                        <Button variant="ghost" className="justify-start" onClick={() => navigate('/cme/programmes')}>
                          Upcoming CME Programmes
                        </Button>
                        <Button variant="ghost" className="justify-start" onClick={() => navigate('/cme/instructions')}>
                          Instructions
                        </Button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-primary">NRI Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4">
                      <div className="grid gap-2">
                        <Button variant="ghost" className="justify-start" onClick={() => navigate('/nri/in-absentia-registration')}>
                          IN ABSENTIA Registration
                        </Button>
                        <Button variant="ghost" className="justify-start" onClick={() => navigate('/nri/affidavit-proforma')}>
                          IN ABSENTIA Affidavit Proforma
                        </Button>
                        <Button variant="ghost" className="justify-start" onClick={() => navigate('/nri/good-standing-certificate')}>
                          NMC Good Standing Certificate
                        </Button>
                        <Button variant="ghost" className="justify-start" onClick={() => navigate('/nri/temporary-permission')}>
                          Temporary Permission for Foreign/Outside State visiting Doctors
                        </Button>
          </div>
        </div>
        
        {/* Service Buttons */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Button 
                size="lg" 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full shadow-lg"
                onClick={() => {
                  navigate('/services');
                  setIsMobileMenuOpen(false);
                }}
              >
                <Settings className="mr-2 h-5 w-5" />
                Online Services
              </Button>
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg"
                onClick={() => {
                  navigate('/booking');
                  setIsMobileMenuOpen(false);
                }}
              >
                <Eye className="mr-2 h-5 w-5" />
                Online Slot Booking
              </Button>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full shadow-lg"
                onClick={() => {
                  navigate('/verify');
                  setIsMobileMenuOpen(false);
                }}
              >
                <FileSearch className="mr-2 h-5 w-5" />
                Search Medical Register
              </Button>
            </div>
          </div>
        </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button variant="ghost" className="hover:text-primary" onClick={() => navigate('/gallery')}>Gallery</Button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Button variant="ghost" className="hover:text-primary" onClick={() => navigate('/faq')}>FAQ</Button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Button variant="ghost" className="hover:text-primary" onClick={() => navigate('/constitution')}>Constitution</Button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Button variant="ghost" className="hover:text-primary" onClick={() => navigate('/acts-rules')}>Acts/Rules</Button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Button variant="ghost" className="hover:text-primary" onClick={() => navigate('/meetings-decisions')}>Meetings and Decisions</Button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Button variant="ghost" className="hover:text-primary" onClick={() => navigate('/downloads')}>Downloads</Button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Button variant="ghost" className="hover:text-primary" onClick={() => navigate('/contact')}>Contact</Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Search & Mobile Menu */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 max-w-xs">
                <Input 
                  placeholder="Search registration..." 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(`/verify?q=${encodeURIComponent(query)}`)}
                  className="w-full"
                />
                <Button size="sm" variant="outline" onClick={() => navigate(`/verify?q=${encodeURIComponent(query)}`)}>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-accent rounded-lg">
            <nav className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start" onClick={() => navigate('/')}>Home</Button>
              
              <div className="pl-4">
                <p className="text-sm font-medium text-muted-foreground mb-2">CME</p>
                <div className="flex flex-col gap-1 pl-4">
                  <Button variant="ghost" className="justify-start text-sm" onClick={() => navigate('/cme/registration')}>
                    CME Registration
                  </Button>
                  <Button variant="ghost" className="justify-start text-sm" onClick={() => navigate('/cme/programmes')}>
                    Upcoming CME Programmes
                  </Button>
                  <Button variant="ghost" className="justify-start text-sm" onClick={() => navigate('/cme/instructions')}>
                    Instructions
                  </Button>
                </div>
              </div>
              
              <div className="pl-4">
                <p className="text-sm font-medium text-muted-foreground mb-2">NRI Services</p>
                <div className="flex flex-col gap-1 pl-4">
                  <Button variant="ghost" className="justify-start text-sm" onClick={() => navigate('/nri/in-absentia-registration')}>
                    IN ABSENTIA Registration
                  </Button>
                  <Button variant="ghost" className="justify-start text-sm" onClick={() => navigate('/nri/affidavit-proforma')}>
                    IN ABSENTIA Affidavit Proforma
                  </Button>
                  <Button variant="ghost" className="justify-start text-sm" onClick={() => navigate('/nri/good-standing-certificate')}>
                    NMC Good Standing Certificate
                  </Button>
                  <Button variant="ghost" className="justify-start text-sm" onClick={() => navigate('/nri/temporary-permission')}>
                    Temporary Permission for Foreign/Outside State visiting Doctors
                  </Button>
                </div>
              </div>
              
              <Button variant="ghost" className="justify-start" onClick={() => navigate('/gallery')}>Gallery</Button>
              <Button variant="ghost" className="justify-start" onClick={() => navigate('/faq')}>FAQ</Button>
              <Button variant="ghost" className="justify-start" onClick={() => navigate('/constitution')}>Constitution</Button>
              <Button variant="ghost" className="justify-start" onClick={() => navigate('/acts-rules')}>Acts/Rules</Button>
              <Button variant="ghost" className="justify-start" onClick={() => navigate('/meetings-decisions')}>Meetings and Decisions</Button>
              <Button variant="ghost" className="justify-start" onClick={() => navigate('/downloads')}>Downloads</Button>
              <Button variant="ghost" className="justify-start" onClick={() => navigate('/contact')}>Contact</Button>
            </nav>
            <div className="mt-4 flex items-center gap-2">
              <Input placeholder="Search registration..." value={query} onChange={(e) => setQuery(e.target.value)} />
              <Button size="sm" onClick={() => navigate(`/verify?q=${encodeURIComponent(query)}`)}>
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