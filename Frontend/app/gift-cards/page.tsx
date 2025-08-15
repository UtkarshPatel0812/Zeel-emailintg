"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Gift, Heart, Star, Send, CheckCircle, CreditCard } from "lucide-react";

interface GiftCardForm {
  recipientName: string;
  recipientEmail: string;
  senderName: string;
  senderEmail: string;
  amount: string;
  message: string;
  deliveryDate: string;
}

const GiftCardsPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GiftCardForm>();

  const onSubmit = async (data: GiftCardForm) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/email/gift-card`,
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
        throw new Error("Failed to send gift card");
      }
    } catch (error) {
      console.error("Error sending gift card:", error);
      alert("There was an error processing your gift card. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const giftCardAmounts = [
    { value: "25", label: "$25" },
    { value: "50", label: "$50" },
    { value: "100", label: "$100" },
    { value: "250", label: "$250" },
    { value: "500", label: "$500" },
    { value: "custom", label: "Custom Amount" },
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
              Digital <span className="text-gradient">Gift Cards</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              Give the gift of choice with our digital gift cards. Perfect for
              any occasion, allowing your loved ones to select their favorite
              hampers or jewelry pieces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gift Card Form */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {!isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-playfair font-bold text-[#2C1810] mb-4">
                    Purchase Gift Card
                  </h2>
                  <p className="text-[#5D4E37] leading-relaxed">
                    Send a digital gift card instantly or schedule it for a
                    special date.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Recipient Information */}
                  <div className="bg-[#FEFCF9] p-6 rounded-2xl">
                    <h3 className="text-xl font-playfair font-semibold text-[#2C1810] mb-4 flex items-center">
                      <Gift className="h-5 w-5 mr-2 text-[#D4AF37]" />
                      Recipient Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#2C1810] mb-2">
                          Recipient Name *
                        </label>
                        <input
                          {...register("recipientName", {
                            required: "Recipient name is required",
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                          placeholder="Recipient's full name"
                        />
                        {errors.recipientName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.recipientName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#2C1810] mb-2">
                          Recipient Email *
                        </label>
                        <input
                          type="email"
                          {...register("recipientEmail", {
                            required: "Recipient email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                          placeholder="recipient@example.com"
                        />
                        {errors.recipientEmail && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.recipientEmail.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Sender Information */}
                  <div className="bg-[#F9F1E7] p-6 rounded-2xl">
                    <h3 className="text-xl font-playfair font-semibold text-[#2C1810] mb-4 flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-[#D4AF37]" />
                      Your Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#2C1810] mb-2">
                          Your Name *
                        </label>
                        <input
                          {...register("senderName", {
                            required: "Your name is required",
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                          placeholder="Your full name"
                        />
                        {errors.senderName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.senderName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#2C1810] mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          {...register("senderEmail", {
                            required: "Your email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                        {errors.senderEmail && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.senderEmail.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Gift Card Details */}
                  <div className="bg-white border-2 border-[#D4AF37] p-6 rounded-2xl">
                    <h3 className="text-xl font-playfair font-semibold text-[#2C1810] mb-4 flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-[#D4AF37]" />
                      Gift Card Details
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#2C1810] mb-2">
                          Amount *
                        </label>
                        <select
                          {...register("amount", {
                            required: "Please select an amount",
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Select amount</option>
                          {giftCardAmounts.map((amount) => (
                            <option key={amount.value} value={amount.value}>
                              {amount.label}
                            </option>
                          ))}
                        </select>
                        {errors.amount && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.amount.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#2C1810] mb-2">
                          Delivery Date
                        </label>
                        <input
                          type="date"
                          {...register("deliveryDate")}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                          min={new Date().toISOString().split("T")[0]}
                        />
                        <p className="mt-1 text-xs text-[#5D4E37]">
                          Leave blank to send immediately
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-[#2C1810] mb-2">
                        Personal Message
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all duration-300"
                        placeholder="Add a personal message for the recipient..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                        <span>Processing Gift Card...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Purchase & Send Gift Card</span>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 bg-green-50 rounded-2xl border border-green-200"
              >
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-playfair font-bold text-green-800 mb-2">
                  Gift Card Sent Successfully!
                </h3>
                <p className="text-green-700 leading-relaxed">
                  Your digital gift card has been sent to the recipient. They
                  will receive an email with the gift card details and
                  instructions on how to redeem it.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-green-600 hover:text-green-800 font-medium transition-colors duration-300"
                >
                  Send Another Gift Card
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-[#FEFCF9]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-[#2C1810] mb-6">
              Why Choose Our <span className="text-gradient">Gift Cards</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Gift,
                title: "Instant Delivery",
                description:
                  "Digital gift cards are delivered instantly via email",
              },
              {
                icon: Heart,
                title: "No Expiry",
                description:
                  "Our gift cards never expire, giving complete flexibility",
              },
              {
                icon: Star,
                title: "Full Collection",
                description:
                  "Can be used for any hamper or jewelry in our collection",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-[#2C1810] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#5D4E37] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftCardsPage;
