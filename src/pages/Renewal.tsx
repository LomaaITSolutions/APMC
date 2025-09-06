import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Renewal = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ regNo: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.regNo || !form.email) {
      toast({ title: "Missing fields", description: "Please enter registration number and email.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Renewal initiated", description: "Check your email to complete payment and upload documents." });
  };

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>License Renewal | Andhra Pradesh Medical Council</title>
        <meta name="description" content="Renew your APMC medical license online with reminders and secure processing." />
        <link rel="canonical" href="/renewal" />
      </Helmet>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">License Renewal</h1>

        <Card className="max-w-3xl">
          <CardContent className="p-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="regNo">Registration Number</Label>
                  <Input id="regNo" name="regNo" value={form.regNo} onChange={handleChange} placeholder="APMC/12345" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" className="w-full">Start Renewal</Button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <p className="text-lg">A renewal link has been sent to <span className="font-semibold">{form.email}</span>.</p>
                <p className="text-muted-foreground">Follow the instructions to complete payment and upload required documents.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>Start another renewal</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Renewal;
