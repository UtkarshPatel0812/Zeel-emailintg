'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Gift, Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Luxe Collections';
  const COMPANY_EMAIL = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@luxecollections.com';
  const COMPANY_PHONE = process.env.NEXT_PUBLIC_COMPANY_PHONE || '+1 (234) 567-890';
  const COMPANY_ADDRESS = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || '123 Luxury Lane, Premium City';
  const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#';
  const FACEBOOK_URL = process.env.NEXT_PUBLIC_FACEBOOK_URL || '#';
  const TWITTER_URL = process.env.NEXT_PUBLIC_TWITTER_URL || '#';

  const quickLinks = [
    { name: 'Chocolate Hampers', href: '/hampers/chocolate' },
    { name: 'Engagement Trays', href: '/hampers/engagement' },
    { name: 'Custom Jewelry', href: '/jewelry/custom' },
    { name: 'Anniversary Gifts', href: '/hampers/anniversary' },
  ];

  const categories = [
    { name: 'Premium Hampers', href: '/hampers' },
    { name: 'Handcrafted Jewelry', href: '/jewelry' },
    { name: 'Custom Builder', href: '/custom-builder' },
    { name: 'Gift Cards', href: '/gift-cards' },
  ];

  return (
    <footer className="bg-[#2C1810] text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Gift className="h-8 w-8 text-[#D4AF37]" />
                <Heart className="h-4 w-4 text-[#8B7355] absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-playfair font-bold text-gradient">
                {COMPANY_NAME}
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Crafting extraordinary moments with premium hampers and handcrafted jewelry. 
              Each piece tells a story of elegance and thoughtful curation.
            </p>
            <div className="flex space-x-4">
              <a href={INSTAGRAM_URL} className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={FACEBOOK_URL} className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={TWITTER_URL} className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-playfair font-semibold text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-playfair font-semibold text-[#D4AF37]">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-playfair font-semibold text-[#D4AF37]">Get in Touch</h3>
            <div className="space-y-3">
              <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="h-4 w-4" />
                <span>{COMPANY_EMAIL}</span>
              </a>
              <a href={`tel:${COMPANY_PHONE.replace(/\D/g, '')}`} className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300">
                <Phone className="h-4 w-4" />
                <span>{COMPANY_PHONE}</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>{COMPANY_ADDRESS}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm">
            © 2025 {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/shipping" className="text-gray-400 hover:text-white transition-colors duration-300">
              Shipping Info
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;