import { motion } from "framer-motion";
import { useWishlist } from "@/hooks/use-wishlist";
import { useToast } from "@/hooks/use-toast";
import RoseMilkImage from "@assets/Rose milk_1755379876329.jpeg";
import ComboImage from "@assets/combo_1755379876329.jpeg";
import ApricotSmallImage from "@assets/Apricot delight small_1755379876330.jpeg";
import ApricotLargeImage from "@assets/Apricot delight large_1755379876330.jpeg";
import ApricotPremiumImage from "@assets/Apricot delight_1755379876331.jpeg";

const products = [
  {
    id: 1,
    name: "Rose Milk Delight",
    description: "Traditional rose-flavored milk dessert with royal essence and delicate floral notes.",
    price: "₹250/box",
    image: RoseMilkImage,
    badge: "20% OFF",
    badgeColor: "bg-royal-gold text-royal-green"
  },
  {
    id: 2,
    name: "Royal Combo Pack",
    description: "Perfect assortment of our signature desserts for the ultimate indulgence experience.",
    price: "₹499/pack",
    image: ComboImage,
    badge: "BEST VALUE",
    badgeColor: "bg-royal-gold text-royal-green"
  },
  {
    id: 3,
    name: "Apricot Delight",
    description: "Luscious apricot dessert with layers of creamy goodness and natural fruit essence.",
    price: "From ₹120",
    image: ApricotSmallImage,
    sizes: [
      { size: "Small", price: "₹120", active: true },
      { size: "Medium", price: "₹200", active: false },
      { size: "Large", price: "₹350", active: false }
    ]
  },
  {
    id: 4,
    name: "Apricot Delight Large",
    description: "Perfect for sharing! Our signature apricot dessert in generous family-size portions.",
    price: "₹350/large",
    image: ApricotLargeImage,
    badge: "FAMILY SIZE",
    badgeColor: "bg-royal-gold text-royal-green"
  },
  {
    id: 5,
    name: "Premium Apricot Royal",
    description: "Our most luxurious apricot creation with premium ingredients and royal presentation.",
    price: "₹450/box",
    image: ApricotPremiumImage,
    badge: "PREMIUM",
    badgeColor: "bg-royal-gold text-royal-green"
  }
];

export default function ProductShowcase() {
  const { add, remove, isInWishlist } = useWishlist();
  const { toast } = useToast();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="products" className="py-20 bg-cream-gradient">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-royal-green mb-4 royal-text-shadow" data-testid="products-title">
            Royal Dessert Collection
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto mb-6"></div>
          <p className="text-dark-green text-lg max-w-2xl mx-auto">
            Indulge in our handcrafted desserts, made with the finest ingredients and traditional recipes passed down through generations.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-royal hover-float p-6 border border-royal-gold/20"
              data-testid={`product-card-${product.id}`}
            >
              <div className="relative mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg"
                  data-testid={`product-image-${product.id}`}
                />
                {product.badge && (
                  <div className={`absolute top-3 right-3 ${product.badgeColor} px-3 py-1 rounded-full text-sm font-semibold`}>
                    {product.badge}
                  </div>
                )}
              </div>
              
              <h3 className="font-playfair text-2xl font-bold text-royal-green mb-3" data-testid={`product-name-${product.id}`}>
                {product.name}
              </h3>
              
              <p className="text-dark-green mb-4" data-testid={`product-description-${product.id}`}>
                {product.description}
              </p>
              
              {product.sizes && (
                <div className="mb-4">
                  <p className="text-sm text-dark-green font-semibold mb-2">Available Sizes:</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((size) => (
                      <span 
                        key={size.size}
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          size.active 
                            ? "bg-royal-gold text-royal-green" 
                            : "bg-royal-cream text-dark-green"
                        }`}
                        data-testid={`size-${size.size.toLowerCase()}-${product.id}`}
                      >
                        {size.size} - {size.price}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex justify-between items-center">
                <span className="text-royal-gold text-xl font-bold" data-testid={`product-price-${product.id}`}>
                  {product.price}
                </span>
                <button 
                  onClick={() => {
                    const inList = isInWishlist(product.id);
                    if (inList) {
                      remove(product.id);
                      toast({
                        title: "Removed from wishlist",
                        description: `${product.name} was removed.`,
                      });
                    } else {
                      add({ id: product.id, name: product.name, price: product.price, image: product.image });
                      toast({
                        title: "Added to wishlist",
                        description: `${product.name} was added.`,
                      });
                    }
                  }}
                  className="bg-royal-green text-royal-cream px-4 py-2 rounded-lg hover:bg-dark-green transition-colors duration-300"
                  data-testid={`button-wishlist-${product.id}`}
                >
                  <i className={`fas mr-2 ${isInWishlist(product.id) ? "fa-heart" : "fa-heart"}`}></i>
                  {isInWishlist(product.id) ? "In Wishlist" : "Add to Wishlist"}
                </button>
              </div>
            </motion.div>
          ))}
          
          {/* Future products placeholder */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-royal-cream to-white rounded-xl shadow-elegant hover-float p-6 border border-royal-gold/30 flex items-center justify-center min-h-[400px]"
            data-testid="coming-soon-card"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-royal-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-plus text-royal-gold text-2xl"></i>
              </div>
              <h3 className="font-playfair text-xl font-bold text-royal-green mb-2">More Delights Coming Soon</h3>
              <p className="text-dark-green">Stay tuned for new royal additions to our dessert collection</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
