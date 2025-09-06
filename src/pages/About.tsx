import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>About | Andhra Pradesh Medical Council</title>
        <meta name="description" content="About Andhra Pradesh Medical Council - mission, vision, and responsibilities." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-6">About Andhra Pradesh Medical Council</h1>
        <p className="text-lg text-muted-foreground max-w-4xl">
          The Andhra Pradesh Medical Council (APMC) is the statutory regulatory body responsible for the registration, renewal,
          and licensing of medical practitioners in the state. We uphold professional standards, ensure ethical practice, and
          facilitate transparency for public trust.
        </p>
      </section>
    </main>
  );
};

export default About;
