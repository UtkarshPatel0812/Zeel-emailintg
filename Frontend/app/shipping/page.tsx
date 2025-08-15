'use client';

import { motion } from 'framer-motion';
import { Truck, Clock, Shield, MapPin, Package, Star } from 'lucide-react';

const ShippingPage = () => {
  const shippingOptions = [
    {
      name: 'Standard Shipping',
      time: '5-7 Business Days',
      cost: 'Free on orders over $75',
      description: 'Reliable delivery for most orders',
      icon: Truck
    },
    {
      name: 'Express Shipping',
      time: '2-3 Business Days',
      cost: '$15.99',
      description: 'Faster delivery for urgent orders',
      icon: Clock
    },
    {
      name: 'Premium Delivery',
      time: '1-2 Business Days',
      cost: '$29.99',
      description: 'Priority handling and delivery',
      icon: Star
    },
    {
      name: 'White Glove Service',
      time: 'Scheduled Delivery',
      cost: '$49.99',
      description: 'Special handling for luxury items',
      icon: Shield
    }
  ];

  const regions = [
    {
      name: 'United States',
      description: 'Free standard shipping on orders over $75',
      time: '3-7 business days',
      icon: MapPin
    },
    {
      name: 'Canada',
      description: 'International shipping available',
      time: '7-14 business days',
      icon: MapPin
    },
    {
      name: 'Europe',
      description: 'Express international delivery',
      time: '10-21 business days',
      icon: MapPin
    },
    {
      name: 'Rest of World',
      description: 'Global shipping to most countries',
      time: '14-28 business days',
      icon: MapPin
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
              Shipping <span className="text-gradient">Information</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              We take great care in packaging and delivering your precious items. 
              Learn about our shipping options and delivery policies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-[#2C1810] mb-6">
              Shipping <span className="text-gradient">Options</span>
            </h2>
            <p className="text-xl text-[#5D4E37] max-w-2xl mx-auto">
              Choose the delivery option that best suits your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-luxury text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-[#2C1810] mb-2">
                    {option.name}
                  </h3>
                  <p className="text-[#D4AF37] font-semibold mb-2">{option.time}</p>
                  <p className="text-[#8B7355] font-medium mb-3">{option.cost}</p>
                  <p className="text-[#5D4E37] text-sm leading-relaxed">
                    {option.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packaging */}
      <section className="section-padding bg-[#FEFCF9]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-playfair font-bold text-[#2C1810]">
                Premium <span className="text-gradient">Packaging</span>
              </h2>
              <p className="text-xl text-[#5D4E37] leading-relaxed">
                Every item is carefully packaged to ensure it arrives in perfect condition, 
                ready to create that special moment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Package className="h-6 w-6 text-[#D4AF37] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-1">Protective Materials</h3>
                    <p className="text-[#5D4E37]">Bubble wrap, foam inserts, and custom boxes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-[#D4AF37] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-1">Insurance Included</h3>
                    <p className="text-[#5D4E37]">All shipments are fully insured for your peace of mind</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-[#D4AF37] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#2C1810] mb-1">Gift Ready</h3>
                    <p className="text-[#5D4E37]">Beautiful presentation perfect for gifting</p>
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
                src="https://images.pexels.com/photos/1070967/pexels-photo-1070967.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Premium packaging"
                className="w-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shipping Regions */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-[#2C1810] mb-6">
              Shipping <span className="text-gradient">Regions</span>
            </h2>
            <p className="text-xl text-[#5D4E37] max-w-2xl mx-auto">
              We ship worldwide to bring our luxury collections to your doorstep
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, index) => {
              const Icon = region.icon;
              return (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-[#FEFCF9] rounded-2xl border border-gray-100"
                >
                  <Icon className="h-8 w-8 text-[#D4AF37] mb-4" />
                  <h3 className="text-xl font-playfair font-bold text-[#2C1810] mb-2">
                    {region.name}
                  </h3>
                  <p className="text-[#8B7355] font-medium mb-2">{region.time}</p>
                  <p className="text-[#5D4E37] text-sm leading-relaxed">
                    {region.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Shipping Policy */}
      <section className="section-padding bg-gradient-to-br from-[#2C1810] to-[#1A0F08] text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-playfair font-bold text-center mb-12">
              Shipping <span className="text-[#D4AF37]">Policy</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-playfair font-semibold mb-3 text-[#D4AF37]">
                    Processing Time
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Standard items: 1-2 business days</li>
                    <li>• Custom jewelry: 2-4 weeks</li>
                    <li>• Custom hampers: 3-5 business days</li>
                    <li>• Rush orders available upon request</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-playfair font-semibold mb-3 text-[#D4AF37]">
                    Tracking & Updates
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Tracking number provided for all orders</li>
                    <li>• Email notifications at key milestones</li>
                    <li>• Real-time tracking available</li>
                    <li>• Customer service support</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-playfair font-semibold mb-3 text-[#D4AF37]">
                    Special Handling
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Temperature-controlled for chocolates</li>
                    <li>• Jewelry in secure, padded boxes</li>
                    <li>• Signature required for high-value items</li>
                    <li>• Special delivery instructions honored</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-playfair font-semibold mb-3 text-[#D4AF37]">
                    Delivery Issues
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Contact us within 48 hours of delivery</li>
                    <li>• Replacement or refund for damaged items</li>
                    <li>• Investigation for lost packages</li>
                    <li>• Customer satisfaction guaranteed</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ShippingPage;