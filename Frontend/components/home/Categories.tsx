'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Gift, Heart, Crown, Sparkles } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      title: 'Premium Hampers',
      description: 'Curated collections of finest chocolates and gourmet treats',
      icon: Gift,
      href: '/hampers',
      image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=500',
      color: 'from-[#D4AF37] to-[#B8941F]'
    },
    {
      title: 'Handcrafted Jewelry',
      description: 'Elegant pieces designed to celebrate special moments',
      icon: Sparkles,
      href: '/jewelry',
      image: 'https://images.pexels.com/photos/1927370/pexels-photo-1927370.jpeg?auto=compress&cs=tinysrgb&w=500',
      color: 'from-[#8B7355] to-[#6B5B45]'
    },
    {
      title: 'Engagement Collections',
      description: 'Perfect combinations for your special proposal moment',
      icon: Heart,
      href: '/hampers/engagement',
      image: 'https://images.pexels.com/photos/1120582/pexels-photo-1120582.jpeg?auto=compress&cs=tinysrgb&w=500',
      color: 'from-[#D4AF37] to-[#8B7355]'
    },
    {
      title: 'Custom Creations',
      description: 'Personalized hampers and jewelry tailored to your vision',
      icon: Crown,
      href: '/custom-builder',
      image: 'https://images.pexels.com/photos/1070967/pexels-photo-1070967.jpeg?auto=compress&cs=tinysrgb&w=500',
      color: 'from-[#8B7355] to-[#D4AF37]'
    }
  ];

  return (
    <section className="section-padding bg-[#FEFCF9]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#2C1810] mb-4">
            Our <span className="text-gradient">Collections</span>
          </h2>
          <p className="text-xl text-[#5D4E37] max-w-2xl mx-auto">
            Each category represents our commitment to excellence and attention to detail
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={category.href}>
                  <div className="card-luxury h-full">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover image-zoom"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`} />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-playfair font-semibold text-[#2C1810] group-hover:text-[#D4AF37] transition-colors duration-300">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-[#5D4E37] leading-relaxed">
                        {category.description}
                      </p>
                      <div className="flex items-center text-[#D4AF37] group-hover:text-[#8B7355] transition-colors duration-300">
                        <span className="text-sm font-medium">Explore Collection</span>
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          className="ml-2"
                        >
                          →
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;