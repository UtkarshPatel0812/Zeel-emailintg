'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Eye, Heart } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Chocolate Collection',
      category: 'Hampers',
      description: 'Artisan chocolates from Belgium and Switzerland',
      image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true,
      href: '/hampers/chocolate'
    },
    {
      id: 2,
      name: 'Eternal Love Bracelet',
      category: 'Jewelry',
      description: 'Handcrafted couple bracelet with magnetic closure',
      image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true,
      href: '/jewelry/bracelets'
    },
    {
      id: 3,
      name: 'Engagement Celebration Tray',
      category: 'Hampers',
      description: 'Perfect combination for your special moment',
      image: 'https://images.pexels.com/photos/1120582/pexels-photo-1120582.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true,
      href: '/hampers/engagement'
    },
    {
      id: 4,
      name: 'Butterfly Charm Necklace',
      category: 'Jewelry',
      description: 'Delicate gold-plated butterfly pendant',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true,
      href: '/jewelry/necklaces'
    },
    {
      id: 5,
      name: 'Anniversary Special Box',
      category: 'Hampers',
      description: 'Curated selection for milestone celebrations',
      image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true,
      href: '/hampers/anniversary'
    },
    {
      id: 6,
      name: 'Evil Eye Protection Set',
      category: 'Jewelry',
      description: 'Bracelet and earrings with protective charm',
      image: 'https://images.pexels.com/photos/1927370/pexels-photo-1927370.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true,
      href: '/jewelry/accessories'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#2C1810] mb-4">
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-[#5D4E37] max-w-2xl mx-auto">
            Discover our most beloved creations, each crafted with meticulous attention to detail
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="card-luxury overflow-hidden">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover image-zoom"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Actions */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-3 bg-white rounded-full shadow-lg hover:bg-[#D4AF37] hover:text-white transition-colors duration-300">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="p-3 bg-white rounded-full shadow-lg hover:bg-[#8B7355] hover:text-white transition-colors duration-300">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-playfair font-semibold text-[#2C1810] group-hover:text-[#D4AF37] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-[#5D4E37] leading-relaxed">
                    {product.description}
                  </p>
                  <Link
                    href={product.href}
                    className="inline-flex items-center text-[#8B7355] hover:text-[#D4AF37] font-medium transition-colors duration-300"
                  >
                    View Details
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;