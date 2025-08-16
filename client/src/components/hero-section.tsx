import { motion } from "framer-motion";
import LogoImage from "@assets/Logo_1755379876328.jpeg";

export default function HeroSection() {
  const SWIGGY_URL = "https://www.swiggy.com/city/hyderabad/rasika-desserts-bhagwan-gunj-himayath-nagar-rest1148155";
  const ZOMATO_URL = "https://www.zomato.com/hyderabad/rasika-desserts-begum-bazaar/order";

  const openSwiggy = () => {
    window.open(SWIGGY_URL, "_blank");
  };

  const openZomato = () => {
    window.open(ZOMATO_URL, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden royal-pattern">
      <div className="absolute inset-0 bg-royal-gradient opacity-95"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-royal-gold/30 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-royal-gold/30 rotate-12 hidden lg:block"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo with circular wrapper */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block p-6 bg-royal-green/50 rounded-full golden-glow">
            <img 
              src={LogoImage} 
              alt="Rasika Desserts Logo" 
              className="w-32 h-32 rounded-full object-cover"
              data-testid="logo-image"
            />
          </div>
        </motion.div>
        
        <motion.h1 
          className="font-brand text-5xl md:text-7xl font-bold text-royal-gold mb-6 royal-text-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="hero-title"
        >
          RASIका DESERTS
        </motion.h1>
        
        <motion.p 
          className="text-royal-cream text-xl md:text-2xl font-light mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="hero-tagline"
        >
          Where Tradition Meets Royal Indulgence
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            onClick={openSwiggy}
            className="bg-gold-gradient text-royal-green px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-gold"
            data-testid="button-swiggy"
          >
            <i className="fas fa-utensils mr-3"></i>Order on Swiggy
          </button>
          <button 
            onClick={openZomato}
            className="bg-transparent border-2 border-royal-gold text-royal-gold px-8 py-4 rounded-lg font-semibold text-lg hover:bg-royal-gold hover:text-royal-green transition-all duration-300"
            data-testid="button-zomato"
          >
            <i className="fas fa-motorcycle mr-3"></i>Order on Zomato
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-royal-gold"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <i className="fas fa-chevron-down text-2xl"></i>
      </motion.div>
    </section>
  );
}
