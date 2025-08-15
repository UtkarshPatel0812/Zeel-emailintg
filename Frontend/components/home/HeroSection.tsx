"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Heart, Gift } from "lucide-react";

const HeroSection = () => {
  const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Luxe Collections';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F1E7]/95 via-[#F9F1E7]/80 to-transparent z-10" />
        <img
          src="/images/tetst.jpg"
          alt="Luxury gift collection"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-[#D4AF37]">
              <Star className="h-5 w-5 fill-current" />
              <span className="text-sm font-medium tracking-wide uppercase">
                Premium Quality Since 2020
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-[#2C1810] leading-tight">
              Luxury
              <span className="text-gradient block">Hampers</span>
              <span className="text-[#8B7355]">& Jewelry</span>
            </h1>

            <p className="text-xl text-[#5D4E37] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Discover exquisite handcrafted collections that transform special
              moments into cherished memories. From premium chocolate hampers to
              bespoke jewelry pieces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/hampers"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Gift className="h-5 w-5" />
                <span>Explore Hampers</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/jewelry"
                className="btn-outline inline-flex items-center space-x-2"
              >
                <Heart className="h-5 w-5" />
                <span>View Jewelry</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#8B7355]/20">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-playfair font-bold text-[#D4AF37]">
                  500+
                </div>
                <div className="text-sm text-[#5D4E37] font-medium">
                  Happy Customers
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-playfair font-bold text-[#D4AF37]">
                  50+
                </div>
                <div className="text-sm text-[#5D4E37] font-medium">
                  Unique Products
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-playfair font-bold text-[#D4AF37]">
                  100%
                </div>
                <div className="text-sm text-[#5D4E37] font-medium">
                  Handcrafted
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card-luxury group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Chocolate hamper"
                    className="w-full h-full object-cover image-zoom"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-playfair font-semibold text-[#2C1810]">
                    Premium Chocolates
                  </h3>
                  <p className="text-sm text-[#5D4E37] mt-1">
                    Artisan Collection
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card-luxury group mt-8"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Handcrafted jewelry"
                    className="w-full h-full object-cover image-zoom"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-playfair font-semibold text-[#2C1810]">
                    Elegant Jewelry
                  </h3>
                  <p className="text-sm text-[#5D4E37] mt-1">
                    Handcrafted Pieces
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-xl"
            >
              <Heart className="h-8 w-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#8B7355] rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-[#8B7355] rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;