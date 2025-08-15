'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Gift, Heart, Star, ArrowRight, Eye } from 'lucide-react';

const ProductsPage = () => {
  const allProducts = [
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
      featured: false,
      href: '/hampers/anniversary'
    },
    {
      id: 6,
      name: 'Evil Eye Protection Set',
      category: 'Jewelry',
      description: 'Bracelet and earrings with protective charm',
      image: 'https://images.pexels.com/photos/1927370/pexels-photo-1927370.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: false,
      href: '/jewelry/bracelets'
    },
    {
      id: 7,
      name: 'Birthday Celebration Hamper',
      category: 'Hampers',
      description: 'Colorful treats perfect for birthday celebrations',
      image: 'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: false,
      href: '/hampers/birthday'
    },
    {
      id: 8,
      name: 'Diamond Stud Earrings',
      category: 'Jewelry',
      description: 'Classic diamond studs with brilliant cut stones',
      image: 'https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: false,
      href: '/jewelry/earrings'
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
              All <span className="text-gradient">Products</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed mb-8">
              Discover our complete collection of premium hampers and handcrafted jewelry, 
              each piece thoughtfully designed to celebrate life's special moments.
            </p>
            <Link href="/custom-builder" className="btn-primary inline-flex items-center space-x-2">
              <Gift className="h-5 w-5" />
              <span>Create Custom Product</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={product.href}>
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
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-3 bg-white rounded-full shadow-lg hover:bg-[#D4AF37] hover:text-white transition-colors duration-300">
                          <Eye className="h-5 w-5" />
                        </button>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col space-y-2">
                        {product.featured && (
                          <div className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-current" />
                            <span>Featured</span>
                          </div>
                        )}
                        <div className="bg-[#8B7355] text-white px-3 py-1 rounded-full text-xs font-medium">
                          {product.category}
                        </div>
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
                      <div className="flex items-center text-[#8B7355] group-hover:text-[#D4AF37] font-medium transition-colors duration-300">
                        <span>View Details</span>
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          className="ml-2"
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories CTA */}
      <section className="section-padding bg-gradient-to-br from-[#2C1810] to-[#1A0F08] text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
              Explore by <span className="text-[#D4AF37]">Category</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Browse our specialized collections to find exactly what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hampers" className="btn-primary">
                View All Hampers
              </Link>
              <Link href="/jewelry" className="btn-outline border-white text-white hover:bg-white hover:text-[#2C1810]">
                View All Jewelry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;