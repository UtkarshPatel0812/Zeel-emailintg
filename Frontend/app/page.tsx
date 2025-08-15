'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Categories from '@/components/home/Categories';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import WhyChooseUs from '@/components/home/WhyChooseUs';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </div>
  );
}