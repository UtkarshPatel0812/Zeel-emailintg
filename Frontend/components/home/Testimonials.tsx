'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Happy Customer',
      content: 'The engagement hamper was absolutely perfect! The attention to detail and quality exceeded all our expectations. It made our special moment even more memorable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Jewelry Enthusiast',
      content: 'The handcrafted bracelet I ordered was stunning. The craftsmanship is exceptional and the personalized touch made it truly special for my wife.',
      rating: 5,
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'Gift Giver',
      content: 'I ordered a custom chocolate hamper for my mothers birthday. The presentation was beautiful and the chocolates were divine. Highly recommended!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
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
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-[#5D4E37] max-w-2xl mx-auto">
            Every review tells a story of joy, celebration, and cherished moments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-luxury relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="bg-[#D4AF37] p-3 rounded-full shadow-lg">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="p-8 pt-12 space-y-6">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#D4AF37] fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#5D4E37] leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-playfair font-semibold text-[#2C1810]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#8B7355]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-[#D4AF37] fill-current" />
              <span className="text-2xl font-playfair font-bold text-[#2C1810]">4.9/5</span>
              <span className="text-[#5D4E37]">Customer Rating</span>
            </div>
            <div className="h-8 w-px bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-playfair font-bold text-[#2C1810]">500+</div>
              <div className="text-[#5D4E37]">Happy Customers</div>
            </div>
            <div className="h-8 w-px bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl font-playfair font-bold text-[#2C1810]">1000+</div>
              <div className="text-[#5D4E37]">Orders Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;