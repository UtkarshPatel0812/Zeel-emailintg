'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Gift, Star, Cake, PartyPopper } from 'lucide-react';

const BirthdayHampersPage = () => {
  const birthdayCollections = [
    {
      id: 1,
      name: 'Sweet Birthday Surprise',
      description: 'Delightful collection of birthday treats and sweets for a memorable celebration',
      image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Birthday Cake Chocolates', 'Colorful Macarons', 'Party Favors', 'Birthday Card', 'Festive Packaging'],
      ageGroup: 'All Ages',
      popular: true
    },
    {
      id: 2,
      name: 'Gourmet Birthday Box',
      description: 'Sophisticated birthday hamper with premium treats for discerning tastes',
      image: 'https://images.pexels.com/photos/1070967/pexels-photo-1070967.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Artisan Chocolates', 'Gourmet Cookies', 'Premium Tea/Coffee', 'Luxury Packaging', 'Personal Message'],
      ageGroup: 'Adults',
      popular: false
    },
    {
      id: 3,
      name: 'Kids Birthday Celebration',
      description: 'Fun and colorful birthday hamper designed especially for children',
      image: 'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Fun Shaped Chocolates', 'Colorful Candies', 'Small Toys', 'Stickers', 'Bright Gift Box'],
      ageGroup: 'Children',
      popular: true
    },
    {
      id: 4,
      name: 'Milestone Birthday Collection',
      description: 'Special hamper for milestone birthdays with elegant and meaningful items',
      image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Premium Champagne Chocolates', 'Keepsake Box', 'Memory Book', 'Elegant Accessories', 'Gold Accents'],
      ageGroup: 'Milestone Ages',
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
              Birthday <span className="text-gradient">Collections</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              Celebrate special birthdays with our thoughtfully curated collections, 
              designed to bring joy and create lasting memories for every age and milestone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {birthdayCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-luxury overflow-hidden group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover image-zoom"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {collection.popular && (
                      <div className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Popular</span>
                      </div>
                    )}
                    <div className="bg-[#8B7355] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {collection.ageGroup}
                    </div>
                  </div>

                  {/* Floating Party Icon */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <PartyPopper className="h-6 w-6 text-white" />
                  </motion.div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href="/contact" className="btn-primary">
                      Order Now
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-playfair font-bold text-[#2C1810] group-hover:text-[#D4AF37] transition-colors duration-300">
                    {collection.name}
                  </h3>
                  
                  <p className="text-[#5D4E37] leading-relaxed">
                    {collection.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#2C1810] flex items-center space-x-2">
                      <Cake className="h-4 w-4 text-[#D4AF37]" />
                      <span>Includes:</span>
                    </h4>
                    <ul className="space-y-1">
                      {collection.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-[#5D4E37]">
                          <Gift className="h-3 w-3 text-[#D4AF37]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#8B7355] hover:text-[#D4AF37] font-medium transition-colors duration-300"
                  >
                    Customize Birthday Package
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

      {/* Age-Specific Recommendations */}
      <section className="section-padding bg-[#FEFCF9]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-[#2C1810] mb-6">
              Perfect for <span className="text-gradient">Every Age</span>
            </h2>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              Our birthday collections are thoughtfully designed for different age groups and preferences, 
              ensuring the perfect celebration for everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <PartyPopper className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-[#2C1810] mb-2">Children</h3>
              <p className="text-[#5D4E37]">Fun, colorful, and safe treats that bring smiles to young faces</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-[#2C1810] mb-2">Adults</h3>
              <p className="text-[#5D4E37]">Sophisticated and elegant selections for mature celebrations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-[#2C1810] mb-2">Milestones</h3>
              <p className="text-[#5D4E37]">Special collections for landmark birthdays and achievements</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BirthdayHampersPage;