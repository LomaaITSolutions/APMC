import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CmeHeader from "@/components/ui/CmeHeader";
import CmeSiderbar from "@/components/ui/CmeSiderbar";

const UpcomingCME = () => {
  const programs = [
    {
      id: 1,
      title: "Advanced Cardiac Care",
      date: "March 15-17, 2024",
      time: "9:00 AM - 5:00 PM",
      venue: "Vijayawada Medical College",
      capacity: "100 participants",
      credits: "15 CME Credits",
      status: "Open",
      description: "Comprehensive training on latest cardiac care techniques and emergency procedures.",
      topics: ["Cardiac Emergency", "Advanced Life Support", "ECG Interpretation"]
    },
    {
      id: 2,
      title: "Pediatric Emergency Medicine",
      date: "March 22-24, 2024",
      time: "9:00 AM - 5:00 PM",
      venue: "Gandhi Medical College",
      capacity: "80 participants",
      credits: "12 CME Credits",
      status: "Filling Fast",
      description: "Essential skills for the pediatric emergency care and the critical interventions. ",
      topics: ["Pediatric Resuscitation", "Child Trauma", "Medication Dosing"]
    },
    {
      id: 3,
      title: "Surgical Techniques Workshop",
      date: "April 5-7, 2024",
      time: "8:00 AM - 6:00 PM",
      venue: "Osmania Medical College",
      capacity: "50 participants",
      credits: "18 CME Credits",
      status: "Registration Closed",
      description: "Hands-on workshop covering modern surgical techniques and minimally invasive procedures.",
      topics: ["Laparoscopic Surgery", "Robotic Surgery", "Surgical Innovation"]
    },
    {
      id: 4,
      title: "Mental Health and Psychiatry Update",
      date: "April 12-14, 2024",
      time: "9:00 AM - 4:00 PM",
      venue: "NIMHANS Hyderabad",
      capacity: "120 participants",
      credits: "14 CME Credits",
      status: "Open",
      description: "Latest developments in mental health care and psychiatric treatment approaches.",
      topics: ["Depression Management", "Anxiety Disorders", "Therapeutic Approaches"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-green-500";
      case "Filling Fast": return "bg-yellow-500";
      case "Registration Closed": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <>
     <div className="min-h-screen">
      <Header />

      {/* Top Header with Background Image */}
      <CmeHeader />

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-primary bg-clip-text text-transparent mb-4">
              Upcoming CME Programmes
            </h1>
            <p className="text-muted-foreground text-lg">
              Enhance your medical knowledge with our comprehensive continuing education programs
            </p>
          </div>
        <div className="flex flex-col-reverse md:flex-row gap-8">
          {/* Left Sidebar - Hidden on Mobile */}
          <div className="hidden md:block w-full md:w-72">
            <CmeSiderbar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
           <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          

          {/* Statistics Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-white text-primary">
              <CardContent className="p-4 text-center">
                <Calendar size={32} className="mx-auto mb-2" />
                <h3 className="text-2xl font-bold">12</h3>
                <p className="text-sm">Programs This Month</p>
              </CardContent>
            </Card>
            <Card className="bg-white text-primary">
              <CardContent className="p-4 text-center">
                <Users size={32} className="mx-auto mb-2" />
                <h3 className="text-2xl font-bold">850</h3>
                <p className="text-sm">Registered Doctors</p>
              </CardContent>
            </Card>
            <Card className="bg-white text-primary">
              <CardContent className="p-4 text-center">
                <FileText size={32} className="mx-auto mb-2" />
                <h3 className="text-2xl font-bold">180</h3>
                <p className="text-sm">CME Credits Available</p>
              </CardContent>
            </Card>
            <Card className="bg-white text-primary">
              <CardContent className="p-4 text-center">
                <MapPin size={32} className="mx-auto mb-2" />
                <h3 className="text-2xl font-bold">8</h3>
                <p className="text-sm">Medical Colleges</p>
              </CardContent>
            </Card>
          </div>

          {/* Programs Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {programs.map((program) => (
              <Card key={program.id} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-primary text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                      <CardDescription className="text-purple-100">
                        {program.description}
                      </CardDescription>
                    </div>
                    <Badge className={`${getStatusColor(program.status)} text-white text-center`}>
                      {program.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar size={16} className="text-primary" />
                        <span>{program.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock size={16} className="text-primary" />
                        <span>{program.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin size={16} className="text-primary" />
                        <span>{program.venue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users size={16} className="text-primary" />
                        <span>{program.capacity}</span>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="font-semibold text-primary text-sm mb-2">
                        Credits: {program.credits}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {program.topics.map((topic, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-primary hover:bg-primary"
                        disabled={program.status === "Registration Closed"}
                      >
                        {program.status === "Registration Closed" ? "Closed" : "Register Now"}
                      </Button>
                      <Button variant="outline" className="border-primary text-primary hover:bg-purple-50">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader className="bg-primary text-white">
                <CardTitle>Registration Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Early bird registration discounts available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Valid medical registration certificate required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Digital certificates provided upon completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Minimum 80% attendance required for credits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="bg-primary text-white">
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>CME Coordinator:</strong><br />
                    Dr. Rajesh Kumar
                  </div>
                  <div>
                    <strong>Email:</strong><br />
                    cme@apmcvjw.gov.in
                  </div>
                  <div>
                    <strong>Phone:</strong><br />
                    +91-863-2340116
                  </div>
                  <div>
                    <strong>Office Hours:</strong><br />
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
   
    </>
  );
};

export default UpcomingCME;