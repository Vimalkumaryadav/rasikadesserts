import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-royal-green/95 backdrop-blur-sm border-b border-royal-gold/20" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-royal-gold font-playfair text-xl font-bold royal-text-shadow">
            Rasika Desserts
          </div>
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("products")}
              className="text-royal-cream hover:text-royal-gold transition-colors duration-300"
              data-testid="nav-products"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection("party-orders")}
              className="text-royal-cream hover:text-royal-gold transition-colors duration-300"
              data-testid="nav-party-orders"
            >
              Party Orders
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-royal-cream hover:text-royal-gold transition-colors duration-300"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
