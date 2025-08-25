const services = [
  {
    id: 1,
    title: "Legal Consultation",
    description: "Get expert advice from top legal professionals instantly.",
    icon: "⚖️",
  },
  {
    id: 2,
    title: "Document Drafting",
    description: "Create legally verified documents in just a few clicks.",
    icon: "📄",
  },
  {
    id: 3,
    title: "Case Tracking",
    description: "Track the progress of your legal cases in real-time.",
    icon: "📌",
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Get round-the-clock assistance from our legal experts.",
    icon: "🕑",
  },
];

export default function Services() {
  return (
    <div
      id="services"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Our <span className="text-blue-600">Legal Services</span>
        </h2>
        <p className="text-gray-600 text-center mt-3 text-lg max-w-2xl mx-auto">
          We provide a wide range of legal services designed to make your legal
          journey smooth, transparent, and stress-free.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 text-center transition-all duration-500 border border-gray-100 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-5xl mb-5 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Gradient Hover Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
