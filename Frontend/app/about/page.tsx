'use client';

import { motion } from 'framer-motion';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'Every piece we create is infused with love and dedication to perfection'
    },
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'We use only the finest materials and time-honored techniques'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction and joy are at the heart of everything we do'
    },
    {
      icon: Sparkles,
      title: 'Unique Designs',
      description: 'Each creation is thoughtfully designed to be as special as you are'
    }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & Creative Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'With over 10 years in luxury goods, Sarah founded our company with a vision to create meaningful gifts.'
    },
    {
      name: 'Michael Chen',
      role: 'Master Jeweler',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Michael brings 15 years of jewelry crafting expertise, specializing in custom and intricate designs.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Hamper Curator',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Emma has a keen eye for selecting the finest chocolates and gourmet items for our hampers.'
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
              Our <span className="text-gradient">Story</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              Founded with a passion for creating extraordinary moments, we specialize in handcrafted 
              hampers and jewelry that celebrate life's most precious occasions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-playfair font-bold text-[#2C1810]">
                Crafting <span className="text-gradient">Memories</span> Since 2020
              </h2>
              <p className="text-lg text-[#5D4E37] leading-relaxed">
                What started as a small passion project has grown into a beloved brand that serves 
                customers worldwide. We believe that every special moment deserves to be celebrated 
                with something extraordinary.
              </p>
              <p className="text-lg text-[#5D4E37] leading-relaxed">
                Our journey began when our founder, Sarah, wanted to create the perfect engagement 
                gift for her best friend. Unable to find exactly what she envisioned, she decided 
                to craft it herself. The result was so beautiful and meaningful that it inspired 
                the creation of our company.
              </p>
              <p className="text-lg text-[#5D4E37] leading-relaxed">
                Today, we continue that same spirit of personalization and attention to detail 
                in every hamper we curate and every piece of jewelry we craft.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1070967/pexels-photo-1070967.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our workshop"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#D4AF37] p-6 rounded-2xl shadow-xl text-white">
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold">500+</div>
                  <div className="text-sm font-medium">Happy Customers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[#FEFCF9]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-[#2C1810] mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              These core values guide everything we do and shape every interaction we have with our customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-[#2C1810] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#5D4E37] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-[#2C1810] mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              The passionate individuals behind every beautiful creation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-luxury text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-bold text-[#2C1810] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#D4AF37] font-medium mb-4">{member.role}</p>
                <p className="text-[#5D4E37] leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-gradient-to-br from-[#2C1810] to-[#1A0F08] text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-8">
              Our <span className="text-[#D4AF37]">Mission</span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-8">
              "To create extraordinary gifts that celebrate life's most precious moments, 
              bringing joy and creating lasting memories for our customers and their loved ones."
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-[#D4AF37] rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;