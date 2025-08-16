import { motion } from "framer-motion";

export default function PartyOrders() {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Rasika Desserts, I want to place a party order.");
    const businessNumber = process.env.VITE_WHATSAPP_NUMBER || "919876543210"; // Default number
    window.open(`https://wa.me/${businessNumber}?text=${message}`, "_blank");
  };

  const services = [
    {
  icon: "fas fa-ring",
      title: "Weddings",
      description: "Royal dessert spreads for your special day"
    },
    {
      icon: "fas fa-birthday-cake",
      title: "Birthdays",
      description: "Memorable celebrations with sweet indulgence"
    },
    {
      icon: "fas fa-briefcase",
      title: "Corporate",
      description: "Professional events with royal hospitality"
    }
  ];

  return (
    <section id="party-orders" className="py-20 bg-royal-green royal-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="font-playfair text-4xl md:text-5xl font-bold text-royal-gold mb-6 royal-text-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="party-orders-title"
          >
            Planning a Celebration?
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-gold-gradient mx-auto mb-8"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          
          <motion.p 
            className="text-royal-cream text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            data-testid="party-orders-description"
          >
            We cater to your special occasions with our exquisite dessert collections. Perfect for weddings, birthdays, anniversaries, and corporate events.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-royal-green/50 rounded-xl border border-royal-gold/20"
                data-testid={`service-${service.title.toLowerCase()}`}
              >
                <div className="w-16 h-16 bg-royal-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${service.icon} text-royal-gold text-2xl`}></i>
                </div>
                <h3 className="font-playfair text-xl font-bold text-royal-gold mb-2">{service.title}</h3>
                <p className="text-royal-cream">{service.description}</p>
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-royal-gold/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-2xl font-bold text-royal-gold mb-6" data-testid="whatsapp-order-title">
              Order in Bulk via WhatsApp
            </h3>
            <p className="text-royal-cream mb-8 leading-relaxed">
              Get personalized service for your event. Our team will help you choose the perfect dessert combinations and quantities for your celebration.
            </p>
            
            <button 
              onClick={openWhatsApp}
              className="bg-gold-gradient text-royal-green px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-gold"
              data-testid="button-whatsapp-party-order"
            >
              <i className="fab fa-whatsapp mr-3 text-xl"></i>
              Order via WhatsApp
            </button>
            
            <p className="text-royal-cream/80 text-sm mt-4">
              Available 9 AM - 9 PM | Minimum order: ₹1000 for party orders
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
