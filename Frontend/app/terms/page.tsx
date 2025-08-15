'use client';

import { motion } from 'framer-motion';
import { FileText, ShoppingCart, Shield, AlertCircle } from 'lucide-react';

const TermsPage = () => {
  const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Luxe Collections';
  const LEGAL_EMAIL = process.env.LEGAL_EMAIL || 'legal@luxecollections.com';
  const COMPANY_PHONE = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+1 (234) 567-890';

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        'By accessing and using our website, you accept and agree to be bound by these terms',
        'If you do not agree to these terms, please do not use our services',
        'We reserve the right to modify these terms at any time',
        'Continued use of our services constitutes acceptance of any changes',
        'These terms apply to all visitors, users, and customers'
      ]
    },
    {
      title: 'Products and Orders',
      icon: ShoppingCart,
      content: [
        'All products are subject to availability and we reserve the right to limit quantities',
        'Prices are subject to change without notice until payment is confirmed',
        'Custom jewelry and hamper orders require advance payment',
        'We reserve the right to refuse or cancel orders at our discretion',
        'Product images are for illustration purposes and may vary from actual items'
      ]
    },
    {
      title: 'Payment and Billing',
      icon: Shield,
      content: [
        'Payment is required at the time of order placement',
        'We accept major credit cards and secure payment methods',
        'All prices are in USD unless otherwise specified',
        'You are responsible for any applicable taxes and fees',
        'Refunds are processed according to our return policy'
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: AlertCircle,
      content: [
        'Our liability is limited to the maximum extent permitted by law',
        'We are not liable for indirect, incidental, or consequential damages',
        'Our total liability shall not exceed the amount paid for the specific product',
        'We do not warrant that our service will be uninterrupted or error-free',
        'You use our services at your own risk'
      ]
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
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              These terms and conditions govern your use of our website and services. 
              Please read them carefully before making any purchases.
            </p>
            <p className="text-sm text-[#8B7355] mt-4">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#FEFCF9] p-8 rounded-2xl border border-gray-100"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-playfair font-bold text-[#2C1810]">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0" />
                        <p className="text-[#5D4E37] leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="section-padding bg-[#FEFCF9]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-playfair font-bold text-[#2C1810] text-center mb-8">
                Additional <span className="text-gradient">Information</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-2xl shadow-lg">
                  <h3 className="text-xl font-playfair font-semibold text-[#2C1810] mb-4">
                    Shipping & Delivery
                  </h3>
                  <ul className="space-y-2 text-[#5D4E37]">
                    <li>• Delivery times are estimates and not guaranteed</li>
                    <li>• Risk of loss passes to you upon delivery</li>
                    <li>• We are not responsible for shipping delays</li>
                    <li>• International shipping may incur additional fees</li>
                  </ul>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg">
                  <h3 className="text-xl font-playfair font-semibold text-[#2C1810] mb-4">
                    Returns & Exchanges
                  </h3>
                  <ul className="space-y-2 text-[#5D4E37]">
                    <li>• Custom items are non-returnable</li>
                    <li>• Returns must be in original condition</li>
                    <li>• Return shipping costs are customer's responsibility</li>
                    <li>• Refunds processed within 5-10 business days</li>
                  </ul>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg">
                  <h3 className="text-xl font-playfair font-semibold text-[#2C1810] mb-4">
                    Intellectual Property
                  </h3>
                  <ul className="space-y-2 text-[#5D4E37]">
                    <li>• All content is protected by copyright</li>
                    <li>• You may not reproduce our designs</li>
                    <li>• Trademarks are property of their owners</li>
                    <li>• Unauthorized use is prohibited</li>
                  </ul>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg">
                  <h3 className="text-xl font-playfair font-semibold text-[#2C1810] mb-4">
                    Governing Law
                  </h3>
                  <ul className="space-y-2 text-[#5D4E37]">
                    <li>• These terms are governed by local laws</li>
                    <li>• Disputes resolved through arbitration</li>
                    <li>• Jurisdiction in our local courts</li>
                    <li>• Severability clause applies</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-gradient-to-br from-[#2C1810] to-[#1A0F08] text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Questions About <span className="text-[#D4AF37]">Terms?</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              If you have any questions about these terms of service, 
              please contact us for clarification.
            </p>
            <div className="space-y-4">
              <p className="text-gray-300">
                Email: <a href={`mailto:${LEGAL_EMAIL}`} className="text-[#D4AF37] hover:underline">{LEGAL_EMAIL}</a>
              </p>
              <p className="text-gray-300">
                Phone: <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="text-[#D4AF37] hover:underline">{COMPANY_PHONE}</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;