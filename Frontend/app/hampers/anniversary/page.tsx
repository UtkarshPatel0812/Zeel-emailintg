'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Heart, Star, Crown, Calendar } from 'lucide-react';

const AnniversaryHampersPage = () => {
  const anniversaryCollections = [
    {
      id: 1,
      name: 'Golden Anniversary',
      description: 'Luxurious collection celebrating 50 years of love with gold-themed elements',
      image: 'https://images.pexels.com/photos/1070967/pexels-photo-1070967.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Gold-Dusted Chocolates', 'Champagne Truffles', 'Golden Rose', 'Memory Album', 'Luxury Packaging'],
      milestone: '50th Anniversary',
      popular: true
    },
    {
      id: 2,
      name: 'Silver Celebration',
      description: 'Elegant silver-themed hamper for 25 years of marriage milestone',
      image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Silver-Wrapped Chocolates', 'Premium Wine Selection', 'Silver Keepsake', 'Photo Frame', 'Elegant Box'],
      milestone: '25th Anniversary',
      popular: true
    },
    {
      id: 3,
      name: 'Love Story Collection',
      description: 'Romantic hamper perfect for any anniversary celebration with personalized touches',
      image: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Heart-Shaped Chocolates', 'Love Letters', 'Romantic Candles', 'Couple Photo Space', 'Red Roses'],
      milestone: 'Any Anniversary',
      popular: false
    },
    {
      id: 4,
      name: 'First Year Bliss',
      description: 'Sweet celebration for the first year of marriage with fresh and vibrant elements',
      image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Fresh Fruit Chocolates', 'Newlywed Treats', 'First Year Calendar', 'Promise Notes', 'Bright Packaging'],
      milestone: '1st Anniversary',
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
              Anniversary <span className="text-gradient">Specials</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              Celebrate your love story with our exquisite anniversary collections, 
              each designed to honor the beautiful journey you've shared together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {anniversaryCollections.map((collection, index) => (
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
                      {collection.milestone}
                    </div>
                  </div>

                  {/* Floating Heart */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Heart className="h-6 w-6 text-white fill-current" />
                  </motion.div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link href="/contact" className="btn-primary">
                      Celebrate Love
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
                      <Crown className="h-4 w-4 text-[#D4AF37]" />
                      <span>Includes:</span>
                    </h4>
                    <ul className="space-y-1">
                      {collection.features.map((feature, idx) => (
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
                    Personalize Anniversary Gift
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

      {/* Anniversary Milestones */}
      <section className="section-padding bg-gradient-to-br from-[#2C1810] to-[#1A0F08] text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Celebrate Every <span className="text-[#D4AF37]">Milestone</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Each anniversary year has its own traditional theme. We create collections 
              that honor these traditions while adding our own luxurious touch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { year: '1st', theme: 'Paper', color: 'bg-white text-[#2C1810]' },
              { year: '5th', theme: 'Wood', color: 'bg-[#8B7355]' },
              { year: '25th', theme: 'Silver', color: 'bg-gray-400 text-[#2C1810]' },
              { year: '50th', theme: 'Gold', color: 'bg-[#D4AF37] text-[#2C1810]' }
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl text-center ${milestone.color}`}
              >
                <Calendar className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-2xl font-playfair font-bold mb-1">{milestone.year}</h3>
                <p className="font-medium">{milestone.theme}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnniversaryHampersPage;