import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TravelSection from "@/components/TravelSection";
import OrganizeSection from "@/components/OrganizeSection";
import DiscoverySection from "@/components/DiscoverySection";
import CardsSection from "@/components/CardsSection";
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

      <main className="flex-grow h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <Hero />
        <TravelSection />
        <OrganizeSection />
        <DiscoverySection />
        <CardsSection />
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
