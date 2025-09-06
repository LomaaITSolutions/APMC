import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Registration = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    qualification: "",
    email: "",
    phone: "",
    regYear: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.qualification || !form.email || !form.phone || !form.regYear) {
      toast({ title: "Missing fields", description: "Please fill all required fields.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Application submitted", description: "Your registration application has been received." });
  };

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Doctor Registration | Andhra Pradesh Medical Council</title>
        <meta name="description" content="Register as a medical practitioner with the Andhra Pradesh Medical Council (APMC)." />
        <link rel="canonical" href="/register" />
      </Helmet>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">Doctor Registration</h1>

        <Card className="max-w-3xl">
          <CardContent className="p-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter full name" />
                </div>
                <div>
                  <Label htmlFor="qualification">Qualification</Label>
                  <Input id="qualification" name="qualification" value={form.qualification} onChange={handleChange} placeholder="MBBS / MD / MS" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="10-digit number" />
                </div>
                <div>
                  <Label htmlFor="regYear">Registration Year</Label>
                  <Input id="regYear" name="regYear" value={form.regYear} onChange={handleChange} placeholder="YYYY" />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" className="w-full">Submit Application</Button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <p className="text-lg">Thank you, <span className="font-semibold">{form.fullName}</span>.</p>
                <p className="text-muted-foreground">Your application has been received. APMC will review and contact you at {form.email}.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline">Submit another response</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Registration;
