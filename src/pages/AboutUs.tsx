import React from 'react';
import { Building2, Target, Heart, Shield, Users, Award, TrendingUp, Lightbulb, CheckCircle, Handshake, Globe, Leaf } from 'lucide-react';

const AboutUs: React.FC = () => {
  const coreValues = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in every product we manufacture, ensuring reliability and performance that exceeds industry benchmarks."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "Continuously advancing our technology and processes to deliver cutting-edge solutions that meet evolving industry demands."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Partnership",
      description: "Building lasting relationships through dedicated support, transparent communication, and solutions tailored to unique needs."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Practice",
      description: "Committed to environmentally responsible manufacturing processes that protect our planet for future generations."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integrity & Trust",
      description: "Operating with honesty and ethical standards in all our business dealings, building trust that stands the test of time."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Continuous Growth",
      description: "Investing in our people, technology, and processes to ensure we remain at the forefront of the industry."
    }
  ];

  const brandPromises = [
    { icon: <CheckCircle className="w-6 h-6" />, title: "Uncompromising Quality" },
    { icon: <Award className="w-6 h-6" />, title: "Industry-Leading Solutions" },
    { icon: <Handshake className="w-6 h-6" />, title: "Reliable Partnership" },
    { icon: <Globe className="w-6 h-6" />, title: "Global Standards" },
    { icon: <Target className="w-6 h-6" />, title: "Timely Delivery" },
    { icon: <Building2 className="w-6 h-6" />, title: "Comprehensive Support" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=500&fit=crop" 
            alt="Industrial facility" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Engineering Excellence
            <span className="block text-3xl md:text-4xl mt-4 text-blue-200">For Industrial Leaders™</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Pioneering advanced bonding solutions that power industries worldwide
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Crafting Tomorrow's Industrial Solutions
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For over two decades, Metabond has been at the forefront of manufacturing high-performance 
              industrial adhesives and bonding solutions. Our commitment to innovation, quality, and 
              customer success has made us a trusted partner for businesses across diverse industries.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From automotive manufacturing to aerospace engineering, construction to electronics, 
              our products are the invisible force that holds industries together, enabling progress 
              and building a stronger future.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop" 
                alt="Modern industrial facility" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To be the global leader in innovative bonding solutions, recognized for our 
                unwavering commitment to quality, sustainability, and technological advancement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision a future where Metabond products are synonymous with reliability and 
                excellence, empowering industries to build stronger, safer, and more sustainable 
                infrastructure worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Building2 className="w-10 h-10 text-blue-600 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To deliver superior bonding solutions that exceed customer expectations through 
                continuous innovation, rigorous quality control, and dedicated customer service.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to understanding our customers' unique challenges and providing 
                tailored solutions that enhance productivity, reduce costs, and contribute to their 
                long-term success. Our mission extends beyond products—we build partnerships that last.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop" 
                alt="Manufacturing excellence" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every product we create
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Promises */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Commitment to You</h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Every interaction, every product, every solution—backed by these promises
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {brandPromises.map((promise, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 bg-blue-800 bg-opacity-50 p-6 rounded-lg hover:bg-opacity-70 transition-all duration-300"
              >
                <div className="flex-shrink-0 text-blue-300">
                  {promise.icon}
                </div>
                <h3 className="text-lg font-semibold">{promise.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Message from Leadership</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop" 
                  alt="Chairman and Managing Director" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-gray-900">Rajesh Kumar</h3>
                  <p className="text-gray-600">Chairman & Managing Director</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="text-6xl text-blue-600 mb-4">"</div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    At Metabond, we don't just manufacture adhesives—we create solutions that strengthen 
                    the foundations of modern industry. Our journey has been defined by an unwavering 
                    commitment to excellence and a deep understanding of our customers' evolving needs.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    As we look to the future, we remain dedicated to innovation, sustainability, and 
                    building partnerships that stand the test of time. Our team's expertise, combined 
                    with cutting-edge technology, positions us to continue delivering solutions that 
                    exceed expectations.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Thank you for trusting Metabond as your partner in progress. Together, we are 
                    building a stronger, more connected world.
                  </p>
                  <div className="mt-8">
                    <div className="font-bold text-gray-900 text-lg">Rajesh Kumar</div>
                    <div className="text-gray-600">Chairman & Managing Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
