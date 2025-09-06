import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const mockVerify = (reg: string) => {
  const valid = /^APMC\/(\d{4,6})$/i.test(reg.trim());
  if (!valid) return null;
  const num = reg.split("/")[1];
  return {
    regNo: reg.toUpperCase(),
    name: "Dr. Sita Devi",
    qualification: "MBBS, MD",
    year: 2015 + (parseInt(num) % 8),
    status: "Valid",
  };
};

const Verification = () => {
  const { toast } = useToast();
  const [params] = useSearchParams();
  const [regNo, setRegNo] = useState("");
  const [result, setResult] = useState<null | ReturnType<typeof mockVerify>>(null);

  useEffect(() => {
    const q = params.get("q");
    if (q) setRegNo(q);
  }, [params]);

  const handleVerify = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!regNo.trim()) {
      toast({ title: "Enter registration number", description: "Use format APMC/12345", variant: "destructive" });
      return;
    }
    const res = mockVerify(regNo);
    if (!res) {
      setResult(null);
      toast({ title: "Not found", description: "No valid record found for the entered number.", variant: "destructive" });
      return;
    }
    setResult(res);
    toast({ title: "Verified", description: `${res.name} (${res.regNo}) is valid.` });
  };

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>License Verification | Andhra Pradesh Medical Council</title>
        <meta name="description" content="Verify medical license registration with APMC using registration number." />
        <link rel="canonical" href="/verify" />
      </Helmet>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">License Verification</h1>

        <Card className="max-w-3xl">
          <CardContent className="p-6 space-y-6">
            <form onSubmit={handleVerify} className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="regNo">Registration Number</Label>
                <Input id="regNo" value={regNo} onChange={(e) => setRegNo(e.target.value)} placeholder="APMC/12345" />
              </div>
              <div className="flex items-end">
                <Button type="submit" className="w-full">Verify</Button>
              </div>
            </form>

            {result && (
              <div className="rounded-lg border p-4 bg-accent">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Registration No</p>
                    <p className="font-semibold">{result.regNo}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-semibold">{result.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Qualification</p>
                    <p className="font-semibold">{result.qualification}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Registration Year</p>
                    <p className="font-semibold">{result.year}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="font-semibold text-medical-green">{result.status}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Verification;
