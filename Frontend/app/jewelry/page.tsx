'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Heart, Star, ArrowRight } from 'lucide-react';

const JewelryPage = () => {
  const jewelryCategories = [
    {
      id: 'bracelets',
      title: 'Bracelets',
      description: 'Elegant bracelets including couple, magnetic, evil eye, and morse code designs',
      image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '/jewelry/bracelets',
      featured: true,
      products: ['Couple Bracelets', 'Magnetic Closure', 'Evil Eye Protection', 'Morse Code Messages']
    },
    {
      id: 'necklaces',
      title: 'Necklaces',
      description: 'Beautiful necklaces featuring daisy, butterfly, and panda designs',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '/jewelry/necklaces',
      featured: true,
      products: ['Daisy Chain', 'Butterfly Pendant', 'Panda Charm', 'Custom Designs']
    },
    {
      id: 'earrings',
      title: 'Earrings',
      description: 'Stunning earring collection with various styles and precious materials',
      image: 'https://images.pexels.com/photos/1927370/pexels-photo-1927370.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '/jewelry/earrings',
      featured: false,
      products: ['Stud Earrings', 'Drop Earrings', 'Hoop Designs', 'Statement Pieces']
    },
    {
      id: 'accessories',
      title: 'Hair Accessories',
      description: 'Charming hair accessories including bow pins, scrunchies, and anklets',
      image: 'https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=600',
      href: '/jewelry/accessories',
      featured: false,
      products: ['Bow Pins', 'Silk Scrunchies', 'Anklets', 'Hair Clips']
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
              Handcrafted <span className="text-gradient">Jewelry</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed mb-8">
              Discover our exquisite collection of handcrafted jewelry, each piece thoughtfully 
              designed to celebrate your unique style and special moments.
            </p>
            <Link href="/custom-builder" className="btn-primary inline-flex items-center space-x-2">
              <Sparkles className="h-5 w-5" />
              <span>Custom Jewelry</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {jewelryCategories.map((category, index) => (
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
                          Popular Styles
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
                            <Sparkles className="h-3 w-3 text-[#D4AF37]" />
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

      {/* Craftsmanship Section */}
      <section className="section-padding bg-gradient-to-br from-[#2C1810] to-[#1A0F08] text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold">
                Artisan <span className="text-[#D4AF37]">Craftsmanship</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Each piece in our jewelry collection is meticulously handcrafted by skilled artisans, 
                ensuring every detail reflects our commitment to quality and beauty.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-[#D4AF37] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Premium Materials</h3>
                    <p className="text-gray-400">Only the finest metals and gemstones in every piece</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-[#D4AF37] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Handcrafted Excellence</h3>
                    <p className="text-gray-400">Each piece individually crafted with attention to detail</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-[#D4AF37] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Lifetime Quality</h3>
                    <p className="text-gray-400">Built to last and treasure for generations</p>
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
                src="https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Artisan crafting jewelry"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JewelryPage;