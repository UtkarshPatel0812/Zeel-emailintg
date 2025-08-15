'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Heart, Star, Package } from 'lucide-react';

const ChocolateHampersPage = () => {
  const chocolateHampers = [
    {
      id: 1,
      name: 'Dark Chocolate Elegance',
      description: 'Premium Belgian dark chocolate collection with 70% and 85% cocoa varieties',
      image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Belgian Dark Chocolate', 'Artisan Truffles', 'Cocoa Nibs', 'Luxury Packaging'],
      customizable: true,
      popular: true
    },
    {
      id: 2,
      name: 'Milk Chocolate Dreams',
      description: 'Creamy milk chocolate selection with caramel and praline varieties',
      image: 'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Swiss Milk Chocolate', 'Caramel Centers', 'Praline Selection', 'Gift Wrapping'],
      customizable: true,
      popular: false
    },
    {
      id: 3,
      name: 'White Chocolate Bliss',
      description: 'Delicate white chocolate pieces with vanilla and berry infusions',
      image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Premium White Chocolate', 'Vanilla Bean', 'Berry Infusions', 'Elegant Box'],
      customizable: true,
      popular: false
    },
    {
      id: 4,
      name: 'Mixed Chocolate Paradise',
      description: 'Perfect combination of dark, milk, and white chocolates for every taste',
      image: 'https://images.pexels.com/photos/1070967/pexels-photo-1070967.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Variety Selection', 'All Chocolate Types', 'Tasting Guide', 'Premium Presentation'],
      customizable: true,
      popular: true
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
              Chocolate <span className="text-gradient">Hampers</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              Indulge in our exquisite collection of premium chocolate hampers, featuring the finest 
              artisan chocolates from renowned chocolatiers around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {chocolateHampers.map((hamper, index) => (
              <motion.div
                key={hamper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-luxury overflow-hidden group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={hamper.image}
                    alt={hamper.name}
                    className="w-full h-full object-cover image-zoom"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {hamper.popular && (
                      <div className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Popular</span>
                      </div>
                    )}
                    {hamper.customizable && (
                      <div className="bg-[#8B7355] text-white px-3 py-1 rounded-full text-sm font-medium">
                        Customizable
                      </div>
                    )}
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
                    {hamper.name}
                  </h3>
                  
                  <p className="text-[#5D4E37] leading-relaxed">
                    {hamper.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#2C1810] flex items-center space-x-2">
                      <Package className="h-4 w-4 text-[#D4AF37]" />
                      <span>Includes:</span>
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {hamper.features.map((feature, idx) => (
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
                    Request Customization
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

      {/* Customization Info */}
      <section className="section-padding bg-[#FEFCF9]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-playfair font-bold text-[#2C1810] mb-6">
              Customize Your <span className="text-gradient">Chocolate Experience</span>
            </h2>
            <p className="text-xl text-[#5D4E37] leading-relaxed mb-8">
              Every chocolate hamper can be personalized to your preferences. Choose your favorite 
              chocolate types, add special packaging, or include a personalized message.
            </p>
            <Link href="/contact" className="btn-primary">
              Start Customization
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ChocolateHampersPage;