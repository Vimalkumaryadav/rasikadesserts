import React, { useCallback, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useWishlist } from "@/hooks/use-wishlist";
import type { WishlistItem } from "@/hooks/use-wishlist";

export default function Navigation() {
  const { items, remove, clear } = useWishlist();
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const envNumber = (import.meta as any).env?.VITE_WHATSAPP_NUMBER as string | undefined;
  const whatsappNumber = (envNumber || "919550128476").replace(/\D/g, "");
  const openWhatsApp = () => {
    const lines = items.map((it: WishlistItem, idx: number) => `${idx + 1}. ${it.name} - ${it.price}`);
    const message = encodeURIComponent(`Hi Rasika Desserts, here is my wishlist:\n\n${lines.join("\n")}\n\nPlease help me place an order.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <header 
      className="fixed top-0 w-full z-[1000] bg-royal-green text-royal-cream border-b border-royal-gold/20 shadow-md"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="gold-foil-text font-brand text-2xl font-bold royal-text-shadow tracking-wide">
            RASIका DESERTS
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
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

            {/* Wishlist Panel */}
            <Sheet open={wishlistOpen} onOpenChange={setWishlistOpen}>
              <button
                onClick={() => setWishlistOpen((o: boolean) => !o)}
                className="relative bg-royal-gold/15 text-royal-cream px-4 py-2 rounded-lg border border-royal-gold/30 hover:bg-royal-gold/25 transition-colors duration-300"
                data-testid="nav-wishlist"
              >
                <i className="fas fa-heart mr-2 text-royal-gold"></i>
                Wishlist
                {items.length > 0 && (
                  <span className="ml-2 text-royal-green bg-royal-gold rounded-full px-2 py-0.5 text-xs font-bold">
                    {items.length}
                  </span>
                )}
              </button>
              <SheetContent side="right" className="w-full sm:max-w-md bg-royal-green text-royal-cream border-l border-royal-gold/30">
                <SheetHeader>
                  <SheetTitle className="text-royal-gold font-playfair text-2xl">Your Wishlist</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  {items.length === 0 ? (
                    <p className="text-royal-cream/80">Your wishlist is empty. Add some desserts you love!</p>
                  ) : (
                    <div className="space-y-4">
                      {items.map((it: WishlistItem) => (
                        <div key={it.id} className="flex items-center gap-3 p-3 rounded-lg border border-royal-gold/20">
                          <img src={it.image} alt={it.name} className="w-16 h-16 object-cover rounded" />
                          <div className="flex-1">
                            <div className="font-semibold text-royal-gold">{it.name}</div>
                            <div className="text-royal-cream/80 text-sm">{it.price}</div>
                          </div>
                          <button
                            onClick={() => remove(it.id)}
                            className="text-royal-cream hover:text-royal-gold"
                            aria-label={`Remove ${it.name}`}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      ))}
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={openWhatsApp}
                          className="flex-1 bg-gold-gradient text-royal-green px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                          data-testid="wishlist-order-whatsapp"
                        >
                          <i className="fab fa-whatsapp mr-2"></i>Order via WhatsApp
                        </button>
                        <button
                          onClick={clear}
                          className="px-4 py-2 rounded-lg border border-royal-gold/40 text-royal-cream hover:bg-royal-gold/10 transition"
                          data-testid="wishlist-clear"
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}
