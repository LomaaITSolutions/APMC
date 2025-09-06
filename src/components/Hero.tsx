import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, FileCheck, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Medical professionals and healthcare"
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ANDHRA PRADESH
              <span className="block text-secondary">MEDICAL COUNCIL</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Your trusted regulatory body ensuring quality healthcare through 
              proper medical registration, licensing, and professional standards 
              across Andhra Pradesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-4 shadow-button-custom hover:scale-105 transition-all"
                onClick={() => navigate('/register')}
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20"
                onClick={() => navigate('/verify')}
              >
                Verify License
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">25,000+</div>
                <div className="text-sm text-white/80">Registered Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">13</div>
                <div className="text-sm text-white/80">Districts Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">67+</div>
                <div className="text-sm text-white/80">Years of Service</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="p-6 bg-white/95 backdrop-blur shadow-medical hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">License Verification</h3>
                  <p className="text-muted-foreground text-sm">
                    Instantly verify medical professional credentials
                  </p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => (window.location.pathname = '/verify')}>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur shadow-medical hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-medical-blue rounded-lg flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">New Registration</h3>
                  <p className="text-muted-foreground text-sm">
                    Apply for medical practice registration online
                  </p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => (window.location.pathname = '/register')}>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur shadow-medical hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-medical-green rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">License Renewal</h3>
                  <p className="text-muted-foreground text-sm">
                    Renew your medical license and certifications
                  </p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => (window.location.pathname = '/renewal')}>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;