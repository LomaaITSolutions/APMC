import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RefreshCw, ArrowLeft, Calendar, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Alert, AlertDescription } from "@/components/ui/alert";

const LicenseRenewal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button and Header */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-teal-700 hover:underline mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-teal-700 p-3 rounded-lg text-white">
                <RefreshCw size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">License Renewal</h1>
                <p className="text-muted-foreground">Renew your medical license and certifications</p>
              </div>
            </div>
          </div>

          {/* Alert */}
          <Alert className="mb-6 border border-teal-200">
            <AlertCircle className="h-4 w-4 text-teal-600" />
            <AlertDescription>
              License renewal should be initiated at least 60 days before expiry to avoid any practice interruption.
            </AlertDescription>
          </Alert>

          {/* Card Form */}
          <Card>
            <CardHeader>
              <CardTitle>Renew Medical License</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column: Form Fields */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="current-registration">Current Registration Number</Label>
                    <Input id="current-registration" placeholder="Enter your registration number" />
                  </div>
                  <div>
                    <Label htmlFor="renewal-period">Renewal Period</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select renewal period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1year">1 Year</SelectItem>
                        <SelectItem value="2years">2 Years</SelectItem>
                        <SelectItem value="5years">5 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="cme-hours">CME Hours Completed</Label>
                    <Input id="cme-hours" placeholder="Enter completed CME hours" />
                  </div>
                  <div>
                    <Label htmlFor="practice-status">Current Practice Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select practice status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active Practice</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                        <SelectItem value="retired">Retired</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Right Column: Info Panels */}
                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                    <h3 className="font-semibold mb-2 flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-teal-700" />
                      Renewal Requirements
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Valid current registration</li>
                      <li>Minimum 30 CME hours</li>
                      <li>Updated practice information</li>
                      <li>Payment of renewal fees</li>
                      <li>No pending disciplinary actions</li>
                    </ul>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                    <h4 className="font-medium text-teal-700 mb-1">Renewal Fees</h4>
                    <p className="text-sm text-muted-foreground">
                      1 Year: ₹2,500 | 2 Years: ₹4,500 | 5 Years: ₹10,000
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white">
                Proceed to Payment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LicenseRenewal;
