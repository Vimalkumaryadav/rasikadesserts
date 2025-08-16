import { useCallback } from "react";

export default function Navigation() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <header 
      className="fixed top-0 w-full z-[1000] bg-royal-green text-royal-cream border-b border-royal-gold/20 shadow-md"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-royal-gold font-brand text-2xl font-bold royal-text-shadow tracking-wide">
            RASIका DESERTS
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
