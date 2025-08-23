export default function AboutUs() {
  return (
    <div>
      <section className="px-6 md:px-20 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">About LegalEase</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          At LegalEase, we aim to simplify legal processes and make professional
          legal assistance accessible to everyone. Our team of expert lawyers,
          consultants, and advisors are here to guide you at every step,
          ensuring that your rights are always protected.
        </p>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="bg-gray-100 px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide affordable, reliable, and effective
              legal solutions for individuals and businesses. We strive to make
              legal services transparent and approachable.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where legal help is accessible to all, where
              knowledge empowers people to make informed decisions, and where
              justice is within everyone’s reach.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
