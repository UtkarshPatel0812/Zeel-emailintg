'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Heart, Star, Gift, Sparkles } from 'lucide-react';

const EngagementHampersPage = () => {
  const engagementTrays = [
    {
      id: 1,
      name: 'Classic Proposal Set',
      description: 'Elegant combination of premium chocolates and romantic accessories for the perfect proposal',
      image: 'https://images.pexels.com/photos/1120582/pexels-photo-1120582.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Premium Chocolates', 'Rose Petals', 'Candles', 'Proposal Card', 'Elegant Tray'],
      popular: true
    },
    {
      id: 2,
      name: 'Romantic Evening Collection',
      description: 'Complete set for a memorable evening with champagne chocolates and ambient lighting',
      image: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Champagne Truffles', 'LED Candles', 'Silk Rose Petals', 'Love Notes', 'Crystal Tray'],
      popular: false
    },
    {
      id: 3,
      name: 'Luxury Engagement Box',
      description: 'Premium wooden box with compartments for ring, chocolates, and keepsakes',
      image: 'https://images.pexels.com/photos/1070967/pexels-photo-1070967.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Wooden Ring Box', 'Artisan Chocolates', 'Preserved Flowers', 'Memory Book', 'Gold Accents'],
      popular: true
    },
    {
      id: 4,
      name: 'Garden Proposal Theme',
      description: 'Nature-inspired engagement set with floral elements and organic chocolates',
      image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Organic Chocolates', 'Fresh Flowers', 'Natural Tray', 'Botanical Cards', 'Eco Packaging'],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="py-8 bg-[#FEFCF9]">
        <div className="container">
          <Link href="/hampers" className="inline-flex items-center space-x-2 text-[#8B7355] hover:text-[#D4AF37] transition-colors duration-300">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Hampers</span>
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
              Engagement <span className="text-gradient">Trays</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              Make your proposal unforgettable with our specially curated engagement trays, 
              designed to create the perfect romantic atmosphere for your special moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {engagementTrays.map((tray, index) => (
              <motion.div
                key={tray.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-luxury overflow-hidden group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={tray.image}
                    alt={tray.name}
                    className="w-full h-full object-cover image-zoom"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {tray.popular && (
                      <div className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Most Popular</span>
                      </div>
                    )}
                  </div>

                  {/* Floating Heart */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 right-4 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Heart className="h-6 w-6 text-white fill-current" />
                  </motion.div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href="/contact" className="btn-primary">
                      Plan Your Proposal
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-playfair font-bold text-[#2C1810] group-hover:text-[#D4AF37] transition-colors duration-300">
                    {tray.name}
                  </h3>
                  
                  <p className="text-[#5D4E37] leading-relaxed">
                    {tray.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#2C1810] flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                      <span>Includes:</span>
                    </h4>
                    <ul className="space-y-1">
                      {tray.features.map((feature, idx) => (
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
                    Customize for Your Proposal
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

      {/* Proposal Tips */}
      <section className="section-padding bg-gradient-to-br from-[#2C1810] to-[#1A0F08] text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-playfair font-bold">
                Make It <span className="text-[#D4AF37]">Perfect</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our engagement trays are designed to help you create the perfect proposal moment. 
                Each element is carefully chosen to enhance the romance and significance of your special day.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Gift className="h-6 w-6 text-[#D4AF37] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Personalized Setup</h3>
                    <p className="text-gray-400">We help you arrange everything perfectly for your proposal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-[#D4AF37] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Romantic Atmosphere</h3>
                    <p className="text-gray-400">Every detail designed to create the perfect romantic mood</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#D4AF37] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Memorable Keepsakes</h3>
                    <p className="text-gray-400">Beautiful items you can treasure long after the proposal</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Romantic proposal setup"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngagementHampersPage;