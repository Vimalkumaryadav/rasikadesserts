import { motion } from "framer-motion";

export default function StickyButtons() {
  const openSwiggy = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "swiggy://";
      setTimeout(() => {
        window.open("https://www.swiggy.com", "_blank");
      }, 1000);
    } else {
      window.open("https://www.swiggy.com", "_blank");
    }
  };

  const openZomato = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "zomato://";
      setTimeout(() => {
        window.open("https://www.zomato.com", "_blank");
      }, 1000);
    } else {
      window.open("https://www.zomato.com", "_blank");
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Rasika Desserts, I want to place an order.");
    const businessNumber = process.env.VITE_WHATSAPP_NUMBER || "919876543210"; // Default number
    window.open(`https://wa.me/${businessNumber}?text=${message}`, "_blank");
  };

  const buttons = [
    {
      icon: "fas fa-utensils",
      bgColor: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
      action: openSwiggy,
      title: "Order on Swiggy",
      testId: "sticky-swiggy"
    },
    {
      icon: "fas fa-motorcycle",
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
      action: openZomato,
      title: "Order on Zomato",
      testId: "sticky-zomato"
    },
    {
      icon: "fab fa-whatsapp",
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      action: openWhatsApp,
      title: "WhatsApp Us",
      testId: "sticky-whatsapp"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {buttons.map((button, index) => (
        <motion.button
          key={index}
          onClick={button.action}
          className={`w-14 h-14 ${button.bgColor} ${button.hoverColor} text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300`}
          title={button.title}
          data-testid={button.testId}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1 + 1,
            type: "spring",
            stiffness: 100
          }}
        >
          <i className={`${button.icon} text-lg`}></i>
        </motion.button>
      ))}
    </div>
  );
}
