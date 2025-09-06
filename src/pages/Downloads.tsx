import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const files = [
  { name: "APMC Registration Guidelines.pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  { name: "License Renewal Checklist.pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  { name: "NOC Application Form.pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
];

const Downloads = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Downloads | Andhra Pradesh Medical Council</title>
        <meta name="description" content="Download APMC forms, guidelines, and documents." />
        <link rel="canonical" href="/downloads" />
      </Helmet>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">Forms & Downloads</h1>

        <Card className="max-w-3xl">
          <CardContent className="p-6 space-y-4">
            {files.map((f, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{f.name}</p>
                  <p className="text-sm text-muted-foreground">PDF Document</p>
                </div>
                <a href={f.url} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <Download className="h-4 w-4 mr-2" /> Download
                  </Button>
                </a>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Downloads;
