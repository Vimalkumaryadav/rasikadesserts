import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProductShowcase from "@/components/product-showcase";
import PartyOrders from "@/components/party-orders";
import Footer from "@/components/footer";
import StickyButtons from "@/components/sticky-buttons";

export default function Home() {
  return (
    <div className="min-h-screen bg-royal-cream font-montserrat">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <PartyOrders />
      <Footer />
      <StickyButtons />
    </div>
  );
}
