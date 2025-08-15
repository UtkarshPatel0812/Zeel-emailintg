'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Heart, Star, Sparkles, Flower } from 'lucide-react';

const NecklacesPage = () => {
  const necklaces = [
    {
      id: 1,
      name: 'Daisy Chain Necklace',
      description: 'Delicate daisy chain design with white enamel petals and gold centers',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Daisy Design', 'White Enamel', 'Gold Centers', 'Adjustable Chain'],
      material: 'Gold Plated',
      popular: true
    },
    {
      id: 2,
      name: 'Butterfly Pendant Necklace',
      description: 'Elegant butterfly pendant with colorful gemstone accents',
      image: 'https://images.pexels.com/photos/1927370/pexels-photo-1927370.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Butterfly Pendant', 'Gemstone Accents', 'Colorful Design', 'Sterling Silver'],
      material: 'Sterling Silver',
      popular: true
    },
    {
      id: 3,
      name: 'Panda Charm Necklace',
      description: 'Adorable panda charm necklace with black and white enamel details',
      image: 'https://images.pexels.com/photos/1191536/pexels-photo-1191536.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Panda Charm', 'Enamel Details', 'Cute Design', 'Gift Ready'],
      material: 'Mixed Metals',
      popular: false
    },
    {
      id: 4,
      name: 'Custom Initial Necklace',
      description: 'Personalized necklace with custom initial pendant in elegant script',
      image: 'https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: ['Custom Initial', 'Script Font', 'Personal Touch', 'Gift Box'],
      material: 'Rose Gold',
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
              Beautiful <span className="text-gradient">Necklaces</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              Adorn yourself with our exquisite necklace collection featuring charming daisy chains, 
              elegant butterfly pendants, and adorable panda charms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {necklaces.map((necklace, index) => (
              <motion.div
                key={necklace.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-luxury overflow-hidden group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={necklace.image}
                    alt={necklace.name}
                    className="w-full h-full object-cover image-zoom"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {necklace.popular && (
                      <div className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Popular</span>
                      </div>
                    )}
                    <div className="bg-[#8B7355] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {necklace.material}
                    </div>
                  </div>

                  {/* Floating Flower */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-4 right-4 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Flower className="h-6 w-6 text-white" />
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
                    {necklace.name}
                  </h3>
                  
                  <p className="text-[#5D4E37] leading-relaxed">
                    {necklace.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#2C1810] flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                      <span>Features:</span>
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {necklace.features.map((feature, idx) => (
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

      {/* Size Guide */}
      <section className="section-padding bg-[#FEFCF9]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-playfair font-bold text-[#2C1810] mb-6">
              Necklace <span className="text-gradient">Size Guide</span>
            </h2>
            <p className="text-xl text-[#5D4E37] leading-relaxed mb-8">
              Find the perfect necklace length for your style and comfort.
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">16"</span>
                  </div>
                  <h3 className="font-semibold text-[#2C1810] mb-1">Choker</h3>
                  <p className="text-sm text-[#5D4E37]">Sits at the base of the neck</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#8B7355] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">18"</span>
                  </div>
                  <h3 className="font-semibold text-[#2C1810] mb-1">Princess</h3>
                  <p className="text-sm text-[#5D4E37]">Classic length, most popular</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">24"</span>
                  </div>
                  <h3 className="font-semibold text-[#2C1810] mb-1">Matinee</h3>
                  <p className="text-sm text-[#5D4E37]">Falls below the collarbone</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NecklacesPage;