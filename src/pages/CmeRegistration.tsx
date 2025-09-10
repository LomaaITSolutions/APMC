import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CmeHeader from "@/components/ui/CmeHeader";
import { Link } from "react-router-dom";
import { FileText, Users, Book, Bell, UserPlus, Upload } from "lucide-react";

const CMERegistration = () => {
  const menuItems = [
    { icon: <UserPlus className="mr-2 h-4 w-4 md:h-5 md:w-5" />, text: "Organisation Registration", link: "/cme/registration" },
    { icon: <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5" />, text: "Re-Apply for Org. Register", sub: "(Provisional/Renewal)", link: "/cme/re-apply" },
    { icon: <Book className="mr-2 h-4 w-4 md:h-5 md:w-5" />, text: "User Manual", href:"https://online.apmc.ap.gov.in/cmeregistration/Images/apmc_cme_usermanual.pdf"},
    { icon: <Bell className="mr-2 h-4 w-4 md:h-5 md:w-5" />, text: "Notifications", badge: "New", link: "/cme/notifications" },
    { icon: <Users className="mr-2 h-4 w-4 md:h-5 md:w-5" />, text: "Upcoming CME", link: "/cme/programmes" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <CmeHeader />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center my-7">
          <h1 className="text-4xl font-bold bg-primary bg-clip-text text-transparent mb-7">
            CME Organisation Register
          </h1>
          <p className="text-muted-foreground text-lg">
            The CME Organisation Register allows medical institutions and organizations to
            register for conducting Continuing Medical Education (CME) programs. It helps streamline
            the approval process, maintain official records, and ensure compliance with the guidelines
            of the medical council.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar only for desktop */}
          <div className="hidden md:block w-72 space-y-3 max-h-[80vh] overflow-y">
            {menuItems.map((item, i) => (
              <Card key={i} className="bg-primary border-0 shadow-sm">
                <CardContent className="p-2 md:p-4">
                  {item.link ? (
                    <Link to={item.link}>
                      <Button className="w-full justify-start py-2 md:py-3 text-white text-sm md:text-base font-normal md:font-semibold">
                        {item.icon}
                        <div className="flex flex-col items-start">
                          <span className="leading-tight">{item.text}</span>
                          {item.sub && <p className="text-[10px] md:text-xs text-white mt-1">{item.sub}</p>}
                        </div>
                        {item.badge && (
                          <span className="bg-orange-500 text-[9px] md:text-xs px-2 py-[2px] rounded-full ml-2 animate-pulse">
                            {item.badge}
                          </span>
                        )}
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full justify-start py-2 md:py-3 text-white text-sm md:text-base font-normal md:font-semibold">
                      {item.icon}
                     <a href="https://online.apmc.ap.gov.in/cmeregistration/Images/apmc_cme_usermanual.pdf"> <span className="leading-tight">{item.text}</span></a> 
                      {item.badge && (
                        <span className="bg-orange-500 text-[9px] md:text-xs px-2 py-[2px] rounded-full ml-2 animate-pulse">
                          {item.badge}
                        </span>
                      )}
                     
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content + Side Cards */}
          <div className="flex flex-col md:flex-row gap-8 w-full">
            {/* Registration Form */}
            <div className="w-full md:w-3/5">
              <Card className="shadow-green bg-primary w-full text-white border-green-200 rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-primary to-green-accent py-8">
                  <CardTitle className="flex items-center gap-3 text-3xl font-bold">
                    <div className="bg-white/20 p-3 rounded-full">
                      <FileText size={32} />
                    </div>
                    CME Registration Form
                  </CardTitle>
                  <CardDescription className="text-white text-xl mt-2">
                    Complete your registration for Continuing Medical Education programs
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-10 space-y-8 bg-white text-primary">
                  {/* Input Fields */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter last name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="doctor@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+91-xxxxxxxxxx" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registration">Medical Registration Number *</Label>
                    <Input id="registration" placeholder="Enter APMC registration number" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label>Specialization</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select specialization" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Medicine</SelectItem>
                          <SelectItem value="cardiology">Cardiology</SelectItem>
                          <SelectItem value="surgery">Surgery</SelectItem>
                          <SelectItem value="pediatrics">Pediatrics</SelectItem>
                          <SelectItem value="orthopedics">Orthopedics</SelectItem>
                          <SelectItem value="gynecology">Gynecology</SelectItem>
                          <SelectItem value="psychiatry">Psychiatry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Years of Experience</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-2">0-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="11-20">11-20 years</SelectItem>
                          <SelectItem value="20+">20+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="workplace">Current Workplace</Label>
                    <Input id="workplace" placeholder="Hospital/Clinic name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Complete Address</Label>
                    <Textarea id="address" placeholder="Enter your complete address" />
                  </div>

                  <div className="space-y-3">
                    <Label className="flex items-center gap-2">
                      <Upload size={18} />
                      Upload Medical Registration Certificate
                    </Label>
                    <div className="border-2 border-dashed p-6 rounded-xl cursor-pointer">
                      <Input type="file" accept=".pdf,.jpg,.png" className="hidden" />
                      <div className="text-center">
                        <Upload className="mx-auto h-8 w-8 mb-2" />
                        <p>Click to upload or drag and drop</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          PDF, JPG, PNG - Max 5MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border p-6 rounded-xl">
                    <h4 className="font-semibold mb-3">Terms and Conditions</h4>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1.5 w-4 h-4" />
                      <p>
                        I agree to the terms and conditions of the CME program and certify that all information provided is accurate and complete.
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button className="w-[50%] bg-primary py-4 text-xl rounded-xl">
                      Submit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Side Info Cards */}
            <div className="w-full md:w-2/5 space-y-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">CME Requirements</h4>
                  <p className="text-sm text-gray-600">
                    Medical practitioners must complete a minimum of 30 CME credit hours annually 
                    to maintain their license validity.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Certification</h4>
                  <p className="text-sm text-gray-600">
                    Upon completion, you will receive a digital certificate that can be used 
                    for license renewal and professional development records.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CMERegistration;
