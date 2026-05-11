"use client";

import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Premium Quality",
      description:
        "Carefully selected high-quality tiles for every modern space.",
      icon: <FaCheckCircle size={28} />,
    },
    {
      id: 2,
      title: "Fast Delivery",
      description:
        "Quick and secure delivery service for all your tile orders.",
      icon: <FaShippingFast size={28} />,
    },
    {
      id: 3,
      title: "Trusted Materials",
      description:
        "Durable and long-lasting materials with elegant finishes.",
      icon: <FaShieldAlt size={28} />,
    },
    {
      id: 4,
      title: "24/7 Support",
      description:
        "Friendly customer support whenever you need assistance.",
      icon: <FaHeadset size={28} />,
    },
  ];

  return (
    <section className="bg-gray-200">
      <div className="bg-gray-200 container mx-auto px-4 
    py-16">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">
            Why Choose Us
          </h2>

          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            We provide premium tile collections with
            modern aesthetics, reliable quality, and
            excellent customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {feature.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;