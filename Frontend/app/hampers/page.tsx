'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Gift, Heart, Star, ArrowRight } from 'lucide-react';

const HampersPage = () => {
  const hamperCategories = [
    {
      id: 'chocolate',
      title: 'Chocolate Hampers',
      description: 'Premium artisan chocolates from around the world',
      image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '/hampers/chocolate',
      featured: true,
      products: ['Dark Chocolate Collection', 'Milk Chocolate Delights', 'White Chocolate Dreams']
    },
    {
      id: 'engagement',
      title: 'Engagement Trays',
      description: 'Perfect combinations for your special proposal moment',
      image: 'https://images.pexels.com/photos/1120582/pexels-photo-1120582.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '/hampers/engagement',
      featured: true,
      products: ['Classic Proposal Set', 'Romantic Evening Collection', 'Luxury Engagement Box']
    },
    {
      id: 'birthday',
      title: 'Birthday Collections',
      description: 'Celebrate special birthdays with curated gift collections',
      image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '/hampers/birthday',
      featured: false,
      products: ['Sweet Birthday Surprise', 'Gourmet Birthday Box', 'Celebration Hamper']
    },
    {
      id: 'anniversary',
      title: 'Anniversary Specials',
      description: 'Commemorate your love story with elegant anniversary hampers',
      image: 'https://images.pexels.com/photos/1070967/pexels-photo-1070967.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '/hampers/anniversary',
      featured: false,
      products: ['Golden Anniversary', 'Silver Celebration', 'Love Story Collection']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[#F9F1E7] to-[#FEFCF9]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-[#2C1810] mb-6">
              Premium <span className="text-gradient">Hampers</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed mb-8">
              Discover our exquisite collection of handcrafted hampers, each thoughtfully curated 
              to create unforgettable moments and celebrate life's special occasions.
            </p>
            <Link href="/custom-builder" className="btn-primary inline-flex items-center space-x-2">
              <Gift className="h-5 w-5" />
              <span>Create Custom Hamper</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {hamperCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={category.href}>
                  <div className="card-luxury overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover image-zoom"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Featured Badge */}
                      {category.featured && (
                        <div className="absolute top-4 left-4">
                          <div className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-current" />
                            <span>Featured</span>
                          </div>
                        </div>
                      )}

                      {/* Overlay Content */}
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-2xl font-playfair font-bold mb-2">
                          {category.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-playfair font-semibold text-[#2C1810]">
                          Popular Items
                        </h4>
                        <div className="flex items-center text-[#D4AF37] group-hover:text-[#8B7355] transition-colors duration-300">
                          <span className="text-sm font-medium">View Collection</span>
                          <motion.div
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                            className="ml-2"
                          >
                            →
                          </motion.div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {category.products.map((product, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-[#5D4E37]">
                            <Heart className="h-3 w-3 text-[#D4AF37]" />
                            <span className="text-sm">{product}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Builder CTA */}
      <section className="section-padding bg-gradient-to-br from-[#2C1810] to-[#1A0F08] text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
              Create Your <span className="text-[#D4AF37]">Perfect Hamper</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Can't find exactly what you're looking for? Use our custom hamper builder 
              to create a personalized collection that perfectly matches your vision.
            </p>
            <Link href="/custom-builder" className="btn-primary">
              Start Building
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HampersPage;