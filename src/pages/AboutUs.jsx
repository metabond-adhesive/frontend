import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';
import Breadcrumb from '../components/Breadcrumb';

const AboutUs = () => {
  // initialize router navigation
  const navigate = useNavigate();

  const coreValues = [
    {
      icon: "🛡️",
      title: "Quality Excellence",
      description: "We maintain the highest standards in every product we manufacture, ensuring reliability and performance that exceeds industry benchmarks."
    },
    {
      icon: "💡",
      title: "Innovation First",
      description: "Continuously advancing our technology and processes to deliver cutting-edge solutions that meet evolving industry demands."
    },
    {
      icon: "👥",
      title: "Customer Partnership",
      description: "Building lasting relationships through dedicated support, transparent communication, and solutions tailored to unique needs."
    },
    {
      icon: "🌿",
      title: "Sustainable Practice",
      description: "Committed to environmentally responsible manufacturing processes that protect our planet for future generations."
    },
    {
      icon: "❤️",
      title: "Integrity & Trust",
      description: "Operating with honesty and ethical standards in all our business dealings, building trust that stands the test of time."
    },
    {
      icon: "📈",
      title: "Continuous Growth",
      description: "Investing in our people, technology, and processes to ensure we remain at the forefront of the industry."
    }
  ];

  const brandPromises = [
    { icon: "✓", title: "Uncompromising Quality" },
    { icon: "🏆", title: "Industry-Leading Solutions" },
    { icon: "🤝", title: "Reliable Partnership" },
    { icon: "🌍", title: "Global Standards" },
    { icon: "🎯", title: "Timely Delivery" },
    { icon: "🏗️", title: "Comprehensive Support" }
  ];

  return (
    <div className="about-page">      {/* Breadcrumb */}
      <div className="breadcrumb-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem 0' }}>
        <Breadcrumb items={[
          { label: 'Home', path: '/' },
          { label: 'About Us', path: '/about' }
        ]} />
      </div>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Engineering Excellence
            <span className="hero-subtitle">For Industrial Leaders™</span>
          </h1>
          <p className="hero-description">
            Pioneering advanced bonding solutions that power industries worldwide
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="intro-section">
        <div className="section-container">
          <div className="intro-content">
            <h2 className="section-title">Crafting Tomorrow's Industrial Solutions</h2>
            <div className="title-underline"></div>
            <p className="intro-text">
              For over two decades, Metabond has been at the forefront of manufacturing high-performance 
              industrial adhesives and bonding solutions. Our commitment to innovation, quality, and 
              customer success has made us a trusted partner for businesses across diverse industries.
            </p>
            <p className="intro-text">
              From automotive manufacturing to aerospace engineering, construction to electronics, 
              our products are the invisible force that holds industries together, enabling progress 
              and building a stronger future.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission-section">
        <div className="section-container">
          <div className="vm-grid">
            <div className="vm-card vision-card">
              <div className="vm-icon">🎯</div>
              <h2 className="vm-title">Our Vision</h2>
              <p className="vm-text">
                To be the global leader in innovative bonding solutions, recognized for our 
                unwavering commitment to quality, sustainability, and technological advancement.
              </p>
              <p className="vm-text">
                We envision a future where Metabond products are synonymous with reliability and 
                excellence, empowering industries to build stronger, safer, and more sustainable 
                infrastructure worldwide.
              </p>
            </div>
            <div className="vm-card mission-card">
              <div className="vm-icon">🏭</div>
              <h2 className="vm-title">Our Mission</h2>
              <p className="vm-text">
                To deliver superior bonding solutions that exceed customer expectations through 
                continuous innovation, rigorous quality control, and dedicated customer service.
              </p>
              <p className="vm-text">
                We are committed to understanding our customers' unique challenges and providing 
                tailored solutions that enhance productivity, reduce costs, and contribute to their 
                long-term success. Our mission extends beyond products—we build partnerships that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="section-container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            The principles that guide every decision we make and every product we create
          </p>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Promises */}
      <section className="promises-section">
        <div className="section-container">
          <h2 className="promises-title">Our Commitment to You</h2>
          <p className="promises-subtitle">
            Every interaction, every product, every solution—backed by these promises
          </p>
          <div className="promises-grid">
            {brandPromises.map((promise, index) => (
              <div key={index} className="promise-card">
                <span className="promise-icon">{promise.icon}</span>
                <h3 className="promise-title">{promise.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="leadership-section">
        <div className="section-container">
          <h2 className="section-title">Message from Leadership</h2>
          <div className="title-underline"></div>
          <div className="leadership-content">
            <div className="leader-photo-container">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop" 
                alt="Chairman and Managing Director" 
                className="leader-photo"
              />
              <div className="leader-info">
                <h3 className="leader-name">Rajesh Kumar</h3>
                <p className="leader-position">Chairman & Managing Director</p>
              </div>
            </div>
            <div className="leader-message">
              <div className="quote-mark">"</div>
              <p className="message-text">
                At Metabond, we don't just manufacture adhesives—we create solutions that strengthen 
                the foundations of modern industry. Our journey has been defined by an unwavering 
                commitment to excellence and a deep understanding of our customers' evolving needs.
              </p>
              <p className="message-text">
                As we look to the future, we remain dedicated to innovation, sustainability, and 
                building partnerships that stand the test of time. Our team's expertise, combined 
                with cutting-edge technology, positions us to continue delivering solutions that 
                exceed expectations.
              </p>
              <p className="message-text">
                Thank you for trusting Metabond as your partner in progress. Together, we are 
                building a stronger, more connected world.
              </p>
              <div className="message-signature">
                <div className="signature-name">Rajesh Kumar</div>
                <div className="signature-title">Chairman & Managing Director</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
