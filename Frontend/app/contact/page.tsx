"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  productInterest: string;
}

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/email/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending contact email:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@luxecollections.com",
      subtitle: "We reply within 24 hours",
      href: "mailto:info@luxecollections.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (234) 567-890",
      subtitle: "Mon-Fri 9AM-6PM",
      href: "tel:+1234567890",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Luxury Lane",
      subtitle: "Premium City, PC 12345",
      href: "#",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+1 (234) 567-890",
      subtitle: "Quick responses",
      href: "https://wa.me/1234567890",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[#F9F1E7] to-[#FEFCF9]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-[#2C1810] mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              Have questions about our products or need help with customization?
              We'd love to hear from you and help create something special.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div style={{display:'flex', justifyContent:'space-around'}}></div>
              <div>
                <h2 className="text-3xl font-playfair font-bold text-[#2C1810] mb-4">
                  Send us a Message
                </h2>
                <p className="text-[#5D4E37] leading-relaxed">
                  Tell us about your requirements and we'll get back to you with
                  personalized recommendations.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#2C1810] mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2C1810] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#2C1810] mb-2">
                        Phone Number
                      </label>
                      <input
                        {...register("phone")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#2C1810] mb-2">
                        Product Interest
                      </label>
                      <select
                        {...register("productInterest")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a category</option>
                        <option value="hampers">Premium Hampers</option>
                        <option value="jewelry">Handcrafted Jewelry</option>
                        <option value="engagement">
                          Engagement Collections
                        </option>
                        <option value="custom">Custom Creations</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-2">
                      Subject *
                    </label>
                    <input
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                      placeholder="What can we help you with?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your requirements, preferred customizations, or any questions you have..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8 bg-green-50 rounded-2xl border border-green-200"
                >
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-playfair font-bold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700 leading-relaxed">
                    Thank you for contacting us. We've received your message and
                    will get back to you within 24 hours with personalized
                    recommendations and answers to your questions.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-green-600 hover:text-green-800 font-medium transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-playfair font-bold text-[#2C1810] mb-4">
                  Contact Information
                </h2>
                <p className="text-[#5D4E37] leading-relaxed">
                  Reach out to us through any of these channels. We're here to
                  help bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start space-x-4 p-6 bg-gradient-to-br from-[#F9F1E7] to-[#FEFCF9] rounded-2xl hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="p-3 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-playfair font-semibold text-[#2C1810] mb-1">
                          {info.title}
                        </h3>
                        <p className="text-[#8B7355] font-medium">
                          {info.content}
                        </p>
                        <p className="text-sm text-[#5D4E37] mt-1">
                          {info.subtitle}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 bg-gray-200 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-[#8B7355]/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-[#8B7355] mx-auto mb-2" />
                    <p className="text-[#5D4E37] font-medium">
                      Interactive Map Coming Soon
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
