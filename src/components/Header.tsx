import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

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
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                AP
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">
                  ANDHRA PRADESH MEDICAL COUNCIL
                </h1>
                <p className="text-sm text-muted-foreground">
                  Regulating Medical Practice Since 1956
                </p>
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <Button variant="ghost" className="hover:text-primary" onClick={() => navigate('/')}>Home</Button>
            <Button variant="ghost" className="hover:text-primary" onClick={() => navigate('/about')}>About</Button>
            <Button variant="ghost" className="hover:text-primary" onClick={() => navigate('/services')}>Services</Button>
            <Button variant="ghost" className="hover:text-primary" onClick={() => navigate('/downloads')}>Downloads</Button>
            <Button variant="ghost" className="hover:text-primary" onClick={() => navigate('/contact')}>Contact</Button>
          </nav>

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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-accent rounded-lg">
            <nav className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start" onClick={() => navigate('/')}>Home</Button>
              <Button variant="ghost" className="justify-start" onClick={() => navigate('/about')}>About</Button>
              <Button variant="ghost" className="justify-start" onClick={() => navigate('/services')}>Services</Button>
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