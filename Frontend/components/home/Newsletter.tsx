"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const COMPANY_NAME =
    process.env.NEXT_PUBLIC_COMPANY_NAME || "Luxe Collections";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/email/newsletter`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        // setIsSubscribed(true);
        // setEmail("");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      alert(
        "There was an error subscribing to the newsletter. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-[#2C1810] to-[#1A0F08] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#D4AF37] rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#8B7355] rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-[#D4AF37] rounded-full" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex justify-center">
              <div className="p-4 bg-[#D4AF37] rounded-full">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-playfair font-bold">
              Stay in the <span className="text-[#D4AF37]">Loop</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Be the first to know about our new collections, exclusive offers,
              and special events. Join our community of luxury enthusiasts.
            </p>

            {!isSubscribed ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:bg-white/20 transition-all duration-300"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center space-x-2 text-[#D4AF37]"
              >
                <Check className="h-6 w-6" />
                <span className="text-lg font-medium">
                  Thank you for subscribing!
                </span>
              </motion.div>
            )}

            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/10">
              <div className="text-sm text-gray-400">Follow us on:</div>
              <div className="flex space-x-4">
                <a
                  href={process.env.NEXT_PUBLIC_FACEBOOK_URL || "#"}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-300"
                >
                  <span className="text-sm font-bold">f</span>
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_TWITTER_URL || "#"}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-300"
                >
                  <span className="text-sm font-bold">@</span>
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#"}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors duration-300"
                >
                  <span className="text-sm font-bold">in</span>
                </a>
              </div>
            </div>

            <p className="text-xs text-gray-500 max-w-lg mx-auto">
              We respect your privacy. Unsubscribe at any time. Read our{" "}
              <a href="/privacy" className="text-[#D4AF37] hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
