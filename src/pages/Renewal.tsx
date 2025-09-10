import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RefreshCw, Calendar, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const Renewal = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    regNo: "",
    email: "",
    renewalPeriod: "",
    cmeHours: "",
    practiceStatus: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.regNo || !form.email || !form.renewalPeriod || !form.cmeHours || !form.practiceStatus) {
      toast({
        title: "Missing fields",
        description: "Please fill all required fields before proceeding.",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
    toast({
      title: "Renewal initiated",
      description: "Check your email to complete payment and upload documents.",
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Helmet>
        <title>License Renewal | Andhra Pradesh Medical Council</title>
        <meta name="description" content="Renew your APMC medical license online with reminders and secure processing." />
        <link rel="canonical" href="/renewal" />
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-teal-700 p-3 rounded-lg text-white">
            <RefreshCw size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">License Renewal</h1>
            <p className="text-muted-foreground">Renew your medical license and certifications</p>
          </div>
        </div>

        <Alert className="mb-6 border border-teal-200">
          <AlertCircle className="h-4 w-4 text-teal-600" />
          <AlertDescription>
            License renewal should be initiated at least 60 days before expiry to avoid any practice interruption.
          </AlertDescription>
        </Alert>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Renew Medical License</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="regNo">Current Registration Number</Label>
                    <Input
                      id="regNo"
                      name="regNo"
                      value={form.regNo}
                      onChange={handleChange}
                      placeholder="Enter your registration number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="renewalPeriod">Renewal Period</Label>
                    <Select
                      value={form.renewalPeriod}
                      onValueChange={(val) => setForm({ ...form, renewalPeriod: val })}
                    >
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
                    <Label htmlFor="cmeHours">CME Hours Completed</Label>
                    <Input
                      id="cmeHours"
                      name="cmeHours"
                      value={form.cmeHours}
                      onChange={handleChange}
                      placeholder="Enter completed CME hours"
                    />
                  </div>

                  <div>
                    <Label htmlFor="practiceStatus">Current Practice Status</Label>
                    <Select
                      value={form.practiceStatus}
                      onValueChange={(val) => setForm({ ...form, practiceStatus: val })}
                    >
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

                {/* Right Column */}
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

                {/* Submit Button */}
                <div className="md:col-span-2">
                  <Button type="submit" className="w-full bg-teal-700 hover:bg-teal-800 text-white">
                    Proceed to Payment
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <p className="text-lg">
                  A renewal link has been sent to <span className="font-semibold">{form.email || "your email"}</span>.
                </p>
                <p className="text-muted-foreground">
                  Follow the instructions to complete payment and upload required documents.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Start another renewal
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Renewal;
