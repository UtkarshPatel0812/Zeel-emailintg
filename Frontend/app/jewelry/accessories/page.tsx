'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Heart, Star, Sparkles, Scissors } from 'lucide-react';

const AccessoriesPage = () => {
  const accessories = [
    {
      id: 1,
      name: 'Silk Bow Hair Pins',
      description: 'Elegant silk bow hair pins in various colors and sizes',
      image: 'https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Silk Material', 'Various Colors', 'Secure Grip', 'Elegant Design'],
      category: 'Hair Pins',
      popular: true
    },
    {
      id: 2,
      name: 'Luxury Silk Scrunchies',
      description: 'Premium silk scrunchies that are gentle on hair and stylish',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['100% Silk', 'Hair Friendly', 'Multiple Colors', 'Luxury Feel'],
      category: 'Scrunchies',
      popular: true
    },
    {
      id: 3,
      name: 'Delicate Chain Anklets',
      description: 'Beautiful chain anklets with charm details and adjustable sizing',
      image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Chain Design', 'Charm Details', 'Adjustable', 'Summer Ready'],
      category: 'Anklets',
      popular: false
    },
    {
      id: 4,
      name: 'Decorative Hair Clips',
      description: 'Ornate hair clips with crystal and pearl embellishments',
      image: 'https://images.pexels.com/photos/1927370/pexels-photo-1927370.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Crystal Accents', 'Pearl Details', 'Strong Hold', 'Party Perfect'],
      category: 'Hair Clips',
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="py-8 bg-[#FEFCF9]">
        <div className="container">
          <Link href="/jewelry" className="inline-flex items-center space-x-2 text-[#8B7355] hover:text-[#D4AF37] transition-colors duration-300">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Jewelry</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[#F9F1E7] to-[#FEFCF9]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-[#2C1810] mb-6">
              Hair <span className="text-gradient">Accessories</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              Complete your look with our charming collection of hair accessories, 
              featuring elegant bow pins, luxury scrunchies, delicate anklets, and decorative clips.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {accessories.map((accessory, index) => (
              <motion.div
                key={accessory.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-luxury overflow-hidden group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-full object-cover image-zoom"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {accessory.popular && (
                      <div className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Popular</span>
                      </div>
                    )}
                    <div className="bg-[#8B7355] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {accessory.category}
                    </div>
                  </div>

                  {/* Floating Scissors */}
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 right-4 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Scissors className="h-6 w-6 text-white" />
                  </motion.div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href="/contact" className="btn-primary">
                      Inquire Now
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-playfair font-bold text-[#2C1810] group-hover:text-[#D4AF37] transition-colors duration-300">
                    {accessory.name}
                  </h3>
                  
                  <p className="text-[#5D4E37] leading-relaxed">
                    {accessory.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#2C1810] flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                      <span>Features:</span>
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {accessory.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-[#5D4E37]">
                          <Heart className="h-3 w-3 text-[#D4AF37]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#8B7355] hover:text-[#D4AF37] font-medium transition-colors duration-300"
                  >
                    Request Custom Colors
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessoriesPage;