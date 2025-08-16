import { motion } from "framer-motion";
import { SiSwiggy, SiZomato, SiWhatsapp } from "react-icons/si";

export default function StickyButtons() {
  const SWIGGY_URL = "https://www.swiggy.com/city/hyderabad/rasika-desserts-bhagwan-gunj-himayath-nagar-rest1148155";
  const ZOMATO_URL = "https://www.zomato.com/hyderabad/rasika-desserts-begum-bazaar/order";

  const openSwiggy = () => {
    window.open(SWIGGY_URL, "_blank");
  };

  const openZomato = () => {
    window.open(ZOMATO_URL, "_blank");
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Rasika Desserts, I want to place an order.");
  const envNumber = (import.meta as any).env?.VITE_WHATSAPP_NUMBER as string | undefined;
  const businessNumber = (envNumber || "919550128476").replace(/\D/g, "");
  window.open(`https://wa.me/${businessNumber}?text=${message}`, "_blank");
  };

  const buttons = [
    {
      icon: "fas fa-utensils",
      bgColor: "bg-[#FC8019]",
      hoverColor: "hover:brightness-110",
      action: openSwiggy,
      title: "Order on Swiggy",
      testId: "sticky-swiggy"
    },
    {
      icon: "fas fa-motorcycle",
      bgColor: "bg-[#CB202D]",
      hoverColor: "hover:brightness-110",
      action: openZomato,
      title: "Order on Zomato",
      testId: "sticky-zomato"
    },
    {
      icon: "fab fa-whatsapp",
      bgColor: "bg-[#25D366]",
      hoverColor: "hover:brightness-110",
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
          {button.testId === "sticky-swiggy" ? (
            <SiSwiggy className="w-6 h-6 text-white" />
          ) : button.testId === "sticky-zomato" ? (
            <SiZomato className="w-6 h-6 text-white" />
          ) : (
            <SiWhatsapp className="w-6 h-6 text-white" />
          )}
        </motion.button>
      ))}
    </div>
  );
}
