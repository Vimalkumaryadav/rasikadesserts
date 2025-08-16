import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const envNumber = (import.meta as any).env?.VITE_WHATSAPP_NUMBER as string | undefined;
  const whatsappNumber = (envNumber || "919550128476").replace(/\D/g, "");
  const socialLinks = [
    { icon: "fab fa-instagram", href: "#", label: "Instagram" },
    { icon: "fab fa-facebook", href: "#", label: "Facebook" },
    { icon: "fab fa-whatsapp", href: `https://wa.me/${whatsappNumber}`, label: "WhatsApp" }
  ];

  const quickLinks = [
    { text: "Our Products", action: () => scrollToSection("products") },
    { text: "Party Orders", action: () => scrollToSection("party-orders") },
    { text: "Terms & Conditions", href: "#" },
    { text: "Privacy Policy", href: "#" }
  ];

  return (
    <footer id="contact" className="bg-royal-green py-16 border-t border-royal-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-2xl font-bold text-royal-gold mb-4 royal-text-shadow" data-testid="footer-brand">
              Rasika Desserts
            </h3>
            <p className="text-royal-cream mb-6 leading-relaxed" data-testid="footer-description">
              Where tradition meets royal indulgence. We craft the finest desserts using time-honored recipes and premium ingredients, bringing you an experience of pure luxury and taste.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 bg-royal-gold/20 rounded-full flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-royal-green transition-all duration-300"
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-playfair text-lg font-bold text-royal-gold mb-4" data-testid="contact-info-title">
              Contact Info
            </h4>
            <div className="space-y-3 text-royal-cream">
              <div className="flex items-center" data-testid="contact-phone">
                <i className="fas fa-phone mr-3 text-royal-gold"></i>
                <span>+91 95501 28476</span>
              </div>
              <div className="flex items-center" data-testid="contact-email">
                <i className="fas fa-envelope mr-3 text-royal-gold"></i>
                <span>info@rasikadesserts.com</span>
              </div>
              <div className="flex items-center" data-testid="contact-hours">
                <i className="fas fa-clock mr-3 text-royal-gold"></i>
                <span>9 AM - 9 PM Daily</span>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-playfair text-lg font-bold text-royal-gold mb-4" data-testid="quick-links-title">
              Quick Links
            </h4>
            <div className="space-y-2 text-royal-cream">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={link.action}
                  className="block hover:text-royal-gold transition-colors duration-300 text-left"
                  data-testid={`quick-link-${link.text.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.text}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-royal-gold/20 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-royal-cream/80" data-testid="copyright">
            Copyright © 2025 Rasika Desserts. All rights reserved. | Crafted with <i className="fas fa-heart text-royal-gold"></i> for dessert lovers
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
