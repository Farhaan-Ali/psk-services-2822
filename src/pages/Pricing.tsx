import React, { useEffect } from "react";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      name: "Basic Player",
      price: "₹0",
      period: "Forever",
      description: "Perfect for casual players",
      features: [
        "Browse and book courts",
        "Join public matches",
        "Basic profile",
        "Community access",
        "Mobile app access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Premium Player",
      price: "₹299",
      period: "per month",
      description: "For serious sports enthusiasts",
      features: [
        "Everything in Basic",
        "Priority booking",
        "Create private matches",
        "Advanced analytics",
        "Exclusive tournaments",
        "No booking fees",
        "24/7 support"
      ],
      cta: "Upgrade Now",
      popular: true
    },
    {
      name: "Court Owner",
      price: "₹999",
      period: "per month",
      description: "Manage your sports facility",
      features: [
        "List unlimited courts",
        "Real-time booking management",
        "Revenue analytics",
        "Customer management",
        "Marketing tools",
        "Priority support",
        "Commission: 5% only"
      ],
      cta: "Start Listing",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent <span className="text-green-500">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Choose the perfect plan for your sports journey. All plans include our core features.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative glassmorphism p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "border-2 border-green-500 shadow-lg shadow-green-500/20"
                    : "border border-gray-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-green-500">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/ {plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/signup"
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">
                Can I change my plan later?
              </h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-300">
                We accept all major credit cards, debit cards, UPI, and net banking for Indian users.
              </p>
            </div>
            
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">
                Is there a commission on bookings?
              </h3>
              <p className="text-gray-300">
                Court owners pay a 5% commission on successful bookings. Players don't pay any additional fees with Premium plans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;