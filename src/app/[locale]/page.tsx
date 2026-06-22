import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TravelSection from "@/components/TravelSection";
import OrganizeSection from "@/components/OrganizeSection";
import DiscoverySection from "@/components/DiscoverySection";
import CardsSection from "@/components/CardsSection";
import PrivacySection from "@/components/PrivacySection";
import FeatureGridSection from "@/components/FeatureGridSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default async function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 flex flex-col">
      <Header />

      <main className="flex-grow h-dvh overflow-y-auto snap-y snap-proximity md:h-screen md:snap-mandatory scroll-smooth">
        <Hero />
        <TravelSection />
        <OrganizeSection />
        <DiscoverySection />
        <CardsSection />
        <PrivacySection />
        <FeatureGridSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
}
