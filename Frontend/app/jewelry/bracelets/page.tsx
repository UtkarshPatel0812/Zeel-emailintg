'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Heart, Star, Sparkles, Shield } from 'lucide-react';

const BraceletsPage = () => {
  const bracelets = [
    {
      id: 1,
      name: 'Eternal Love Couple Bracelets',
      description: 'Matching bracelets for couples with magnetic closure and engraved hearts',
      image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Magnetic Closure', 'Matching Set', 'Engraved Hearts', 'Adjustable Size'],
      material: 'Sterling Silver',
      popular: true
    },
    {
      id: 2,
      name: 'Evil Eye Protection Bracelet',
      description: 'Traditional evil eye charm bracelet for protection and good fortune',
      image: 'https://images.pexels.com/photos/1927370/pexels-photo-1927370.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Evil Eye Charm', 'Protection Symbol', 'Blue Accents', 'Elastic Band'],
      material: 'Gold Plated',
      popular: true
    },
    {
      id: 3,
      name: 'Morse Code Message Bracelet',
      description: 'Secret message bracelet encoded in morse code with beads',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Custom Message', 'Morse Code Design', 'Beaded Pattern', 'Personal Touch'],
      material: 'Mixed Metals',
      popular: false
    },
    {
      id: 4,
      name: 'Magnetic Therapy Bracelet',
      description: 'Wellness bracelet with magnetic elements for health benefits',
      image: 'https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Magnetic Therapy', 'Health Benefits', 'Comfortable Fit', 'Elegant Design'],
      material: 'Titanium',
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
              Elegant <span className="text-gradient">Bracelets</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              Discover our stunning collection of handcrafted bracelets, from romantic couple sets 
              to protective evil eye designs and personalized morse code messages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {bracelets.map((bracelet, index) => (
              <motion.div
                key={bracelet.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-luxury overflow-hidden group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={bracelet.image}
                    alt={bracelet.name}
                    className="w-full h-full object-cover image-zoom"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {bracelet.popular && (
                      <div className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Popular</span>
                      </div>
                    )}
                    <div className="bg-[#8B7355] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {bracelet.material}
                    </div>
                  </div>

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
                    {bracelet.name}
                  </h3>
                  
                  <p className="text-[#5D4E37] leading-relaxed">
                    {bracelet.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#2C1810] flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                      <span>Features:</span>
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {bracelet.features.map((feature, idx) => (
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
                    Request Custom Design
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

      {/* Care Instructions */}
      <section className="section-padding bg-[#FEFCF9]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-playfair font-bold text-[#2C1810] mb-6">
              Care <span className="text-gradient">Instructions</span>
            </h2>
            <p className="text-xl text-[#5D4E37] leading-relaxed mb-8">
              Keep your bracelets looking beautiful with proper care and maintenance.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <Shield className="h-8 w-8 text-[#D4AF37] mb-3" />
                <h3 className="font-semibold text-[#2C1810] mb-2">Storage</h3>
                <p className="text-sm text-[#5D4E37]">Store in a dry place, preferably in individual pouches</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <Sparkles className="h-8 w-8 text-[#D4AF37] mb-3" />
                <h3 className="font-semibold text-[#2C1810] mb-2">Cleaning</h3>
                <p className="text-sm text-[#5D4E37]">Gently clean with soft cloth and mild soap solution</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <Heart className="h-8 w-8 text-[#D4AF37] mb-3" />
                <h3 className="font-semibold text-[#2C1810] mb-2">Maintenance</h3>
                <p className="text-sm text-[#5D4E37]">Avoid exposure to chemicals and extreme temperatures</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BraceletsPage;