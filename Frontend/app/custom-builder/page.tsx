"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, Heart, Sparkles, Plus, Minus, ShoppingCart } from "lucide-react";

const CustomBuilderPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("hamper");
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [customization, setCustomization] = useState({
    message: "",
    packaging: "standard",
    delivery: "standard",
  });
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const hamperItems = [
    { id: 1, name: "Belgian Dark Chocolate", price: 25, category: "chocolate" },
    { id: 2, name: "Swiss Milk Chocolate", price: 20, category: "chocolate" },
    { id: 3, name: "Artisan Truffles", price: 30, category: "chocolate" },
    { id: 4, name: "Gourmet Cookies", price: 15, category: "treats" },
    { id: 5, name: "Premium Tea Selection", price: 18, category: "beverages" },
    { id: 6, name: "Champagne Bottle", price: 45, category: "beverages" },
  ];

  const jewelryOptions = [
    { id: 1, name: "Custom Bracelet", price: 75, category: "bracelet" },
    { id: 2, name: "Personalized Necklace", price: 85, category: "necklace" },
    { id: 3, name: "Custom Earrings", price: 65, category: "earrings" },
    { id: 4, name: "Engraved Ring", price: 95, category: "ring" },
  ];

  const addItem = (item: any) => {
    const existingItem = selectedItems.find(
      (selected) => selected.id === item.id
    );
    if (existingItem) {
      setSelectedItems(
        selectedItems.map((selected) =>
          selected.id === item.id
            ? { ...selected, quantity: selected.quantity + 1 }
            : selected
        )
      );
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (itemId: number) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, change: number) => {
    setSelectedItems(
      selectedItems
        .map((item) => {
          if (item.id === itemId) {
            const newQuantity = item.quantity + change;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotalPrice = () => {
    return selectedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleRequestQuote = async () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one item before requesting a quote.");
      return;
    }

    setIsLoading(true);

    try {
      const quoteData = {
        customerName: customerInfo.name,
        customerEmail: customerInfo.email,
        category: selectedCategory,
        selectedItems,
        customization,
        totalPrice: getTotalPrice(),
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/email/custom-builder`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(quoteData),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setSelectedItems([]);
        setCustomization({
          message: "",
          packaging: "standard",
          delivery: "standard",
        });
        setCustomerInfo({ name: "", email: "" });
      } else {
        throw new Error("Failed to send quote request");
      }
    } catch (error) {
      console.error("Error sending quote request:", error);
      alert("There was an error sending your quote request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
              Custom <span className="text-gradient">Builder</span>
            </h1>
            <p className="text-xl text-[#5D4E37] leading-relaxed">
              Create your perfect personalized gift by selecting items,
              customizations, and special touches that make it uniquely yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Message */}
      {isSubmitted && (
        <section className="py-8 bg-green-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-6 bg-green-100 rounded-2xl border border-green-200 max-w-2xl mx-auto"
            >
              <div className="text-green-600 text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-playfair font-bold text-green-800 mb-2">
                Quote Request Sent Successfully!
              </h3>
              <p className="text-green-700 leading-relaxed">
                Thank you for your custom request. Our team will review your
                requirements and get back to you within 24 hours with a detailed
                quote and timeline.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-green-600 hover:text-green-800 font-medium transition-colors duration-300"
              >
                Create Another Custom Order
              </button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Builder Interface */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Category Selection */}
            <div className="space-y-6">
              <h2 className="text-2xl font-playfair font-bold text-[#2C1810]">
                Choose Category
              </h2>

              <div className="space-y-3">
                <button
                  onClick={() => setSelectedCategory("hamper")}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                    selectedCategory === "hamper"
                      ? "bg-[#D4AF37] text-white"
                      : "bg-gray-100 text-[#2C1810] hover:bg-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Gift className="h-5 w-5" />
                    <span className="font-medium">Custom Hamper</span>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedCategory("jewelry")}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                    selectedCategory === "jewelry"
                      ? "bg-[#D4AF37] text-white"
                      : "bg-gray-100 text-[#2C1810] hover:bg-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-5 w-5" />
                    <span className="font-medium">Custom Jewelry</span>
                  </div>
                </button>
              </div>

              {/* Customer Information */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-playfair font-semibold text-[#2C1810]">
                  Your Information
                </h3>

                <div>
                  <label className="block text-sm font-medium text-[#2C1810] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2C1810] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Customization Options */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-playfair font-semibold text-[#2C1810]">
                  Customization
                </h3>

                <div>
                  <label className="block text-sm font-medium text-[#2C1810] mb-2">
                    Personal Message
                  </label>
                  <textarea
                    value={customization.message}
                    onChange={(e) =>
                      setCustomization({
                        ...customization,
                        message: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    rows={3}
                    placeholder="Add a personal message..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2C1810] mb-2">
                    Packaging
                  </label>
                  <select
                    value={customization.packaging}
                    onChange={(e) =>
                      setCustomization({
                        ...customization,
                        packaging: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  >
                    <option value="standard">Standard Box</option>
                    <option value="premium">Premium Gift Box</option>
                    <option value="luxury">Luxury Wooden Box</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Item Selection */}
            <div className="space-y-6">
              <h2 className="text-2xl font-playfair font-bold text-[#2C1810]">
                Select Items
              </h2>

              <div className="space-y-3">
                {(selectedCategory === "hamper"
                  ? hamperItems
                  : jewelryOptions
                ).map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 border border-gray-200 rounded-lg hover:border-[#D4AF37] transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-[#2C1810]">
                          {item.name}
                        </h4>
                        <p className="text-sm text-[#5D4E37] capitalize">
                          {item.category}
                        </p>
                        <p className="text-lg font-semibold text-[#D4AF37]">
                          ${item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => addItem(item)}
                        className="p-2 bg-[#D4AF37] text-white rounded-full hover:bg-[#B8941F] transition-colors duration-300"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Selected Items & Summary */}
            <div className="space-y-6">
              <h2 className="text-2xl font-playfair font-bold text-[#2C1810]">
                Your Selection
              </h2>

              {selectedItems.length === 0 ? (
                <div className="text-center py-8 text-[#5D4E37]">
                  <Heart className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>No items selected yet</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {selectedItems.map((item) => (
                    <div key={item.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-[#2C1810]">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 bg-gray-200 rounded"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 bg-gray-200 rounded"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-semibold text-[#D4AF37]">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Summary */}
              {selectedItems.length > 0 && (
                <div className="border-t border-gray-200 pt-4 space-y-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-[#D4AF37]">${getTotalPrice()}</span>
                  </div>

                  <button
                    onClick={handleRequestQuote}
                    disabled={isLoading}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-5 w-5" />
                        <span>Request Quote</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#5D4E37] text-center">
                    Final pricing will be confirmed via email
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomBuilderPage;
