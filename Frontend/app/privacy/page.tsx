'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

const PrivacyPage = () => {
  const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Luxe Collections';
  const PRIVACY_EMAIL = process.env.PRIVACY_EMAIL || 'privacy@luxecollections.com';
  const COMPANY_PHONE = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+1 (234) 567-890';

  const sections = [
    {
      title: 'Information We Collect',
      icon: Eye,
      content: [
        'Personal information you provide when placing orders or contacting us',
        'Contact details including name, email address, phone number, and shipping address',
        'Payment information processed securely through our payment partners',
        'Communication preferences and marketing consent',
        'Website usage data and analytics to improve our services'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: UserCheck,
      content: [
        'Process and fulfill your orders for hampers and jewelry',
        'Communicate with you about your orders and provide customer support',
        'Send marketing communications (only with your consent)',
        'Improve our website, products, and services',
        'Comply with legal obligations and protect our business interests'
      ]
    },
    {
      title: 'Information Sharing',
      icon: Shield,
      content: [
        'We never sell your personal information to third parties',
        'Trusted service providers who help us operate our business (shipping, payments)',
        'Legal authorities when required by law or to protect our rights',
        'Business transfers in the event of a merger or acquisition',
        'With your explicit consent for specific purposes'
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        'Industry-standard encryption for all data transmission',
        'Secure servers and regular security audits',
        'Limited access to personal information on a need-to-know basis',
        'Regular staff training on data protection and privacy',
        'Incident response procedures for any potential data breaches'
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
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information when you use our services.
            </p>
            <p className="text-sm text-[#8B7355] mt-4">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
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

      {/* Your Rights */}
      <section className="section-padding bg-[#FEFCF9]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-playfair font-bold text-[#2C1810] mb-6">
                Your <span className="text-gradient">Rights</span>
              </h2>
              <p className="text-xl text-[#5D4E37] leading-relaxed">
                You have several rights regarding your personal information
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Access Your Data',
                  description: 'Request a copy of the personal information we hold about you'
                },
                {
                  title: 'Correct Information',
                  description: 'Update or correct any inaccurate personal information'
                },
                {
                  title: 'Delete Your Data',
                  description: 'Request deletion of your personal information (subject to legal requirements)'
                },
                {
                  title: 'Withdraw Consent',
                  description: 'Opt out of marketing communications at any time'
                }
              ].map((right, index) => (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white rounded-2xl shadow-lg"
                >
                  <h3 className="text-xl font-playfair font-semibold text-[#2C1810] mb-3">
                    {right.title}
                  </h3>
                  <p className="text-[#5D4E37] leading-relaxed">
                    {right.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
              Questions About <span className="text-[#D4AF37]">Privacy?</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              If you have any questions about this privacy policy or how we handle your data, 
              please don't hesitate to contact us.
            </p>
            <div className="space-y-4">
              <p className="text-gray-300">
                Email: <a href={`mailto:${PRIVACY_EMAIL}`} className="text-[#D4AF37] hover:underline">{PRIVACY_EMAIL}</a>
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

export default PrivacyPage;