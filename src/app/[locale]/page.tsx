import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AppOverview from "@/components/AppOverview";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Privacy from "@/components/Privacy";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />
        <AppOverview />
        <Features />
        <UseCases />
        <HowItWorks />
        <Privacy />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
