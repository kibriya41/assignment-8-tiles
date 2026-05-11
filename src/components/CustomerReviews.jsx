

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Interior Designer",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "The tile quality exceeded my expectations. My clients absolutely loved the modern designs!",
    },
    {
      id: 2,
      name: "Michael Brown",
      role: "Home Owner",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Amazing customer service and very fast delivery. The tiles look premium and luxurious.",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Architect",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
      review:
        "One of the best tile marketplaces I've worked with. Beautiful collections and affordable pricing.",
    },
  ];

  return (
    <section className="bg-gray-200">
      <div className="bg-gray-200 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">
            Customer Reviews
          </h2>

          <p className="text-slate-500 mt-3">
            Trusted by thousands of happy customers
            worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review */}
              <p className="text-slate-600 leading-relaxed mb-6">
                "{review.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-slate-800">
                    {review.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;