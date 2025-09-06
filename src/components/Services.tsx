import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Globe,
  Download as DownloadIcon,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import registrationIcon from "@/assets/registration-icon.png";
import verificationIcon from "@/assets/verification-icon.png";
import renewalIcon from "@/assets/renewal-icon.png";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: registrationIcon,
      title: "Doctor Registration",
      description:
        "Register as a medical practitioner in Andhra Pradesh. Complete online application with document verification.",
      features: [
        "Online Application",
        "Document Upload",
        "Status Tracking",
        "Digital Certificate",
      ],
      buttonText: "Apply Now",
      actionUrl: "/register",
    },
    {
      icon: verificationIcon,
      title: "License Verification",
      description:
        "Verify the authenticity of medical licenses and professional credentials instantly.",
      features: [
        "Instant Verification",
        "QR Code Scanning",
        "Bulk Verification",
        "API Access",
      ],
      buttonText: "Verify Now",
      actionUrl: "/verify",
    },
    {
      icon: renewalIcon,
      title: "License Renewal",
      description:
        "Renew your medical license and continuing education credits seamlessly online.",
      features: [
        "Auto Reminders",
        "CME Credits",
        "Payment Gateway",
        "Digital Renewal",
      ],
      buttonText: "Renew License",
      actionUrl: "/renewal",
    },
  ];

  const additionalServices = [
    {
      icon: FileText,
      title: "NOC Services",
      description:
        "No Objection Certificate for various medical purposes and transfers.",
      buttonText: "Apply for NOC",
      url: "/services",
    },
    {
      icon: Globe,
      title: "Foreign Medical Graduates",
      description:
        "Registration services for doctors with foreign medical qualifications.",
      buttonText: "FMG Registration",
      url: "/register",
    },
    {
      icon: DownloadIcon,
      title: "Forms & Downloads",
      description:
        "Download application forms, guidelines, and important documents.",
      buttonText: "Download Forms",
      url: "/downloads",
    },
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive medical registration and licensing services designed to
            serve healthcare professionals across Andhra Pradesh with efficiency
            and transparency.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-medical transition-all duration-300 hover:scale-105 bg-gradient-card border-0"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-medical-green" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full shadow-button-custom hover:scale-105 transition-all"
                  onClick={() => navigate(service.actionUrl)}
                >
                  {service.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-card-custom transition-all hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{service.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                        onClick={() => navigate(service.url)}
                      >
                        {service.buttonText}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;