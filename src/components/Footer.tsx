import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin,
  ExternalLink,
  Send
} from "lucide-react";
import apmcLogo from "../../public/favicon.ico";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-xl">
              <img src={apmcLogo} alt="APMC Logo" className="w-12 h-12 rounded-full object-contain" />

              </div>
              <div>
                <h3 className="font-bold text-lg">APMC</h3>
                <p className="text-sm text-primary-foreground/80">
                  Medical Council
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed">
              The Andhra Pradesh Medical Council is the statutory body regulating 
              medical education and practice in the state, ensuring quality healthcare 
              through proper licensing and professional standards.
            </p>
            <div className="flex gap-3">
              <Button size="sm" variant="secondary" className="p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="secondary" className="p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="secondary" className="p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "New Registration",
                "License Verification", 
                "Renewal Services",
                "NOC Applications",
                "FMG Registration",
                "Forms & Downloads"
              ].map((link, index) => (
                <li key={index}>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground justify-start"
                  >
                    {link}
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Doctor Registration",
                "License Renewal", 
                "Verification Portal",
                "Complaint Redressal",
                "CME Programs",
                "Guidelines & Rules"
              ].map((service, index) => (
                <li key={index}>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground justify-start"
                  >
                    {service}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Head Office</p>
                  <p className="text-sm text-primary-foreground/80">
                    Door No. 40-3-19/1, Labbipet<br />
                    Vijayawada - 520010<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm font-medium">+91-863-2340116</p>
                  <p className="text-xs text-primary-foreground/80">Office Hours</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm font-medium">apmcvjw@gmail.com</p>
                  <p className="text-xs text-primary-foreground/80">Official Email</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-secondary" />
                <div>
                  <p className="text-sm font-medium">Mon - Fri: 10:00 AM - 5:00 PM</p>
                  <p className="text-xs text-primary-foreground/80">Working Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-semibold text-lg mb-2">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-6">
              Get the latest updates on medical regulations, new services, and important announcements.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-primary-foreground/80">
            © 2024 Andhra Pradesh Medical Council. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
              Privacy Policy
            </Button>
            <Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
              Terms of Service
            </Button>
            <Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
              Accessibility
            </Button>
            <Button variant="link" className="p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
              Sitemap
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;