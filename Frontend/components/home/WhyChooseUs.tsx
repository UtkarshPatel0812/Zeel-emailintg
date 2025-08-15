'use client';

import { motion } from 'framer-motion';
import { Heart, Award, Truck, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Heart,
      title: 'Handcrafted with Love',
      description: 'Every piece is carefully crafted by skilled artisans with attention to detail and passion for perfection.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest materials and ingredients to ensure each product meets our exacting standards.'
    },
    {
      icon: Truck,
      title: 'Careful Delivery',
      description: 'Your precious items are packaged with utmost care and delivered with premium protection.'
    },
    {
      icon: Shield,
      title: 'Satisfaction Guaranteed',
      description: 'We stand behind our work with complete confidence and offer personalized customer service.'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-[#F9F1E7] to-[#FEFCF9]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#2C1810] mb-6">
                Why Choose <span className="text-gradient">Our Collections</span>
              </h2>
              <p className="text-xl text-[#5D4E37] leading-relaxed">
                We believe that every moment deserves to be celebrated with something extraordinary. 
                Our commitment to excellence ensures your special occasions become unforgettable memories.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-colors duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg shadow-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-[#2C1810] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[#5D4E37] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/test2.jpg"
                alt="Artisan crafting jewelry"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/20 to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-playfair font-bold text-[#D4AF37]">5+</div>
                <div className="text-sm text-[#5D4E37] font-medium">Years of Excellence</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-8 -right-8 bg-[#D4AF37] p-6 rounded-2xl shadow-xl"
            >
              <div className="text-center text-white">
                <div className="text-3xl font-playfair font-bold">100%</div>
                <div className="text-sm font-medium">Handmade</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;