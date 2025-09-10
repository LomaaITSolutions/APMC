import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, AlertCircle, CheckCircle, Users, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CMEInstructions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              CME Instructions & Guidelines
            </h1>
            <p className="text-muted-foreground text-lg">
              Complete guide for CME registration, participation, and certification
            </p>
            <Badge className="bg-red-500 text-white mt-4">
              <AlertCircle size={16} className="mr-1" />
              Updated - March 2024
            </Badge>
          </div>

          {/* Important Notice */}
          <Alert className="mb-8 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Important:</strong> All medical practitioners are required to complete a minimum of 30 CME credit hours annually for license renewal as per APMC regulations.
            </AlertDescription>
          </Alert>

          {/* Quick Reference Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <FileText size={32} className="mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">30 Credits</h3>
                <p className="text-sm text-purple-100">Annual Requirement</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6 text-center">
                <Users size={32} className="mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">80% Attendance</h3>
                <p className="text-sm text-blue-100">Minimum Required</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-6 text-center">
                <Calendar size={32} className="mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Valid License</h3>
                <p className="text-sm text-green-100">Prerequisites</p>
              </CardContent>
            </Card>
          </div>

          {/* Instructions Accordion */}
          <Card className="shadow-lg mb-8">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <FileText size={24} />
                Detailed Instructions
              </CardTitle>
              <CardDescription className="text-purple-100">
                Step-by-step guide for CME participation
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="registration">
                  <AccordionTrigger className="px-6 py-4 text-left">
                    1. How to Register for CME Programs
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">Online Registration Process:</h4>
                        <ol className="list-decimal list-inside space-y-2 text-sm">
                          <li>Visit the CME Portal and create an account</li>
                          <li>Complete your professional profile with valid medical registration number</li>
                          <li>Browse available programs and select your preferred sessions</li>
                          <li>Upload required documents (medical certificate, ID proof)</li>
                          <li>Pay the registration fee through online payment gateway</li>
                          <li>Download your registration confirmation and admit card</li>
                        </ol>
                      </div>
                      <Alert>
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Tip:</strong> Register early to avail early bird discounts and secure your preferred time slots.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="documents">
                  <AccordionTrigger className="px-6 py-4 text-left">
                    2. Required Documents & Prerequisites
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">Mandatory Documents:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Valid medical registration certificate</li>
                            <li>Medical degree certificate</li>
                            <li>Government issued photo ID</li>
                            <li>Passport size photograph</li>
                            <li>NOC from employer (if applicable)</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">Optional Documents:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Previous CME certificates</li>
                            <li>Specialization certificates</li>
                            <li>Research publications</li>
                            <li>Professional membership certificates</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="attendance">
                  <AccordionTrigger className="px-6 py-4 text-left">
                    3. Attendance & Participation Guidelines
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-4">
                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <h4 className="font-semibold text-yellow-800 mb-2">Attendance Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Minimum 80% attendance required for certificate</li>
                          <li>Biometric attendance system in place</li>
                          <li>Late arrivals (more than 15 minutes) will not be marked present</li>
                          <li>Participants must sign in and out for each session</li>
                          <li>Mobile phones must be on silent mode during sessions</li>
                        </ul>
                      </div>
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Note:</strong> Proxy attendance is strictly prohibited and may result in disqualification from the program.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="evaluation">
                  <AccordionTrigger className="px-6 py-4 text-left">
                    4. Assessment & Certification Process
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">Assessment Methods:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Online MCQ tests (70% weightage)</li>
                            <li>Case study presentations (20% weightage)</li>
                            <li>Participation in discussions (10% weightage)</li>
                            <li>Minimum 60% score required to pass</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-green-800 mb-2">Certification:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Digital certificates issued within 7 days</li>
                            <li>Credits automatically updated in APMC records</li>
                            <li>Certificates include QR code verification</li>
                            <li>Hard copies available on request</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment">
                  <AccordionTrigger className="px-6 py-4 text-left">
                    5. Fee Structure & Payment Guidelines
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Fee Structure (per program):</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p><strong>APMC Registered Doctors:</strong></p>
                            <p>₹1,500 (Early Bird: ₹1,200)</p>
                          </div>
                          <div>
                            <p><strong>Non-APMC Doctors:</strong></p>
                            <p>₹2,500 (Early Bird: ₹2,000)</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Payment Methods:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Online payment gateway (Credit/Debit cards, Net Banking)</li>
                          <li>UPI payments (Google Pay, PhonePe, Paytm)</li>
                          <li>Demand Draft in favor of "APMC Vijayawada"</li>
                          <li>Cash payments at APMC office (advance booking only)</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="policies">
                  <AccordionTrigger className="px-6 py-4 text-left">
                    6. Cancellation & Refund Policies
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                        <h4 className="font-semibold text-red-800 mb-2">Cancellation Policy:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>More than 15 days before program: 90% refund</li>
                          <li>7-15 days before program: 70% refund</li>
                          <li>3-7 days before program: 50% refund</li>
                          <li>Less than 3 days: No refund</li>
                          <li>Medical emergency: Case-by-case basis with valid certificate</li>
                        </ul>
                      </div>
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Important:</strong> Refunds will be processed within 10-15 working days to the original payment method.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Download Section */}
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <CardTitle className="flex items-center gap-2">
                <Download size={24} />
                Download Resources
              </CardTitle>
              <CardDescription className="text-green-100">
                Essential forms and documents for CME participation
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileText className="text-purple-600" size={20} />
                    <div>
                      <h4 className="font-semibold">CME Registration Form</h4>
                      <p className="text-sm text-muted-foreground">PDF format</p>
                    </div>
                  </div>
                  <Download size={16} className="text-purple-600" />
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileText className="text-blue-600" size={20} />
                    <div>
                      <h4 className="font-semibold">Payment Guidelines</h4>
                      <p className="text-sm text-muted-foreground">PDF format</p>
                    </div>
                  </div>
                  <Download size={16} className="text-blue-600" />
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileText className="text-green-600" size={20} />
                    <div>
                      <h4 className="font-semibold">Document Checklist</h4>
                      <p className="text-sm text-muted-foreground">PDF format</p>
                    </div>
                  </div>
                  <Download size={16} className="text-green-600" />
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileText className="text-orange-600" size={20} />
                    <div>
                      <h4 className="font-semibold">CME Regulations</h4>
                      <p className="text-sm text-muted-foreground">PDF format</p>
                    </div>
                  </div>
                  <Download size={16} className="text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CMEInstructions;