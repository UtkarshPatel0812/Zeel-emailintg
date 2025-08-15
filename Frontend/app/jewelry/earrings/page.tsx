'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Heart, Star, Sparkles, Circle } from 'lucide-react';

const EarringsPage = () => {
  const earrings = [
    {
      id: 1,
      name: 'Diamond Stud Earrings',
      description: 'Classic diamond stud earrings with brilliant cut stones',
      image: 'https://images.pexels.com/photos/1927370/pexels-photo-1927370.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Diamond Studs', 'Brilliant Cut', 'Secure Backing', 'Gift Box'],
      material: 'White Gold',
      popular: true
    },
    {
      id: 2,
      name: 'Pearl Drop Earrings',
      description: 'Elegant pearl drop earrings with gold chain detail',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Freshwater Pearls', 'Gold Chain', 'Drop Design', 'Elegant Style'],
      material: 'Gold Plated',
      popular: true
    },
    {
      id: 3,
      name: 'Hoop Earrings Collection',
      description: 'Versatile hoop earrings in various sizes and finishes',
      image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Multiple Sizes', 'Various Finishes', 'Lightweight', 'Comfortable'],
      material: 'Sterling Silver',
      popular: false
    },
    {
      id: 4,
      name: 'Statement Crystal Earrings',
      description: 'Bold statement earrings with colorful crystal arrangements',
      image: 'https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Crystal Accents', 'Bold Design', 'Colorful', 'Party Ready'],
      material: 'Mixed Metals',
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
              Stunning <span className="text-gradient">Earrings</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              Complete your look with our beautiful earring collection, featuring classic studs, 
              elegant drops, versatile hoops, and bold statement pieces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {earrings.map((earring, index) => (
              <motion.div
                key={earring.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-luxury overflow-hidden group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={earring.image}
                    alt={earring.name}
                    className="w-full h-full object-cover image-zoom"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {earring.popular && (
                      <div className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Popular</span>
                      </div>
                    )}
                    <div className="bg-[#8B7355] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {earring.material}
                    </div>
                  </div>

                  {/* Floating Circle */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Circle className="h-6 w-6 text-white" />
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
                    {earring.name}
                  </h3>
                  
                  <p className="text-[#5D4E37] leading-relaxed">
                    {earring.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#2C1810] flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                      <span>Features:</span>
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {earring.features.map((feature, idx) => (
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
    </div>
  );
};

export default EarringsPage;