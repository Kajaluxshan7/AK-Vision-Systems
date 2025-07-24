import { Link } from "react-router-dom";

function Home() {
  // Function to get service images from Unsplash
  const getServiceImage = (index) => {
    const images = [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop&crop=center", // Security cameras
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=250&fit=crop&crop=center", // Audio video setup
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center", // Digital marketing
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=center", // Social media
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop&crop=center", // Food ordering
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&crop=center", // Marketing strategy
    ];
    return images[index] || images[0];
  };

  const services = [
    {
      icon: "🛡️",
      title: "CCTV & Security Systems",
      description:
        "Professional surveillance solutions with HD cameras, remote monitoring, and 24/7 security coverage for your business and property.",
    },
    {
      icon: "🎵",
      title: "Commercial Audio Video",
      description:
        "Complete audio-visual installation and management for businesses, conferences, events, and commercial spaces across Canada.",
    },
    {
      icon: "📱",
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies including SEO, PPC, content marketing, and online brand development.",
    },
    {
      icon: "📲",
      title: "Social Media Management",
      description:
        "Expert social media handling and marketing across all platforms to boost your online presence and engagement.",
    },
    {
      icon: "🍽️",
      title: "Online Food Ordering Systems",
      description:
        "Custom food ordering platforms and management systems to streamline your restaurant's digital operations.",
    },
    {
      icon: "🎯",
      title: "Brand Strategy & Marketing",
      description:
        "Complete marketing solutions from brand development to campaign execution, tailored for Canadian businesses.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop&crop=center"
            alt="Professional Technology Services"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>Professional Technology & Marketing Solutions</h1>
            <p>
              AK Vision Systems delivers cutting-edge CCTV installation,
              commercial audio-video solutions, and comprehensive digital
              marketing services across Canada. Your success is our vision.
            </p>
            <div className="cta-buttons">
              <Link to="/services" className="btn btn-primary">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            From security systems to digital marketing, we provide comprehensive
            solutions to help your business thrive in the digital age.
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image-container">
                  <img
                    src={getServiceImage(index)}
                    alt={service.title}
                    className="service-image"
                  />
                  <div className="service-overlay">
                    <div className="service-icon">
                      <span>{service.icon}</span>
                    </div>
                  </div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to="/services" className="service-link">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Our Track Record</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose AK Vision Systems?</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🇨🇦</div>
              <h3>Canadian Expertise</h3>
              <p>
                Deep understanding of Canadian market needs and regulations,
                serving businesses across all provinces.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Rapid Response</h3>
              <p>
                Quick deployment and 24/7 support ensure your systems are always
                operational when you need them most.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Complete Solutions</h3>
              <p>
                From installation to ongoing maintenance and marketing, we
                handle everything so you can focus on your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>
                  "AK Vision transformed our restaurant with their online
                  ordering system. Sales increased by 40% in just 3 months!"
                </p>
                <div className="testimonial-author">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                    alt="Client"
                    className="author-image"
                  />
                  <div>
                    <h4>Mike Chen</h4>
                    <span>Restaurant Owner, Toronto</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>
                  "Their CCTV installation was professional and the remote
                  monitoring gives us peace of mind 24/7."
                </p>
                <div className="testimonial-author">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b1e41f42?w=60&h=60&fit=crop&crop=face"
                    alt="Client"
                    className="author-image"
                  />
                  <div>
                    <h4>Sarah Johnson</h4>
                    <span>Retail Manager, Vancouver</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>
                  "Outstanding digital marketing results! Our online presence
                  and lead generation improved dramatically."
                </p>
                <div className="testimonial-author">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                    alt="Client"
                    className="author-image"
                  />
                  <div>
                    <h4>David Williams</h4>
                    <span>Business Owner, Calgary</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="hero" style={{ padding: "4rem 0" }}>
        <div className="container">
          <div className="hero-content">
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Ready to Transform Your Business?
            </h2>
            <p>
              Let's discuss how our technology and marketing solutions can help
              you achieve your goals. Get a free consultation today.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Schedule Consultation
              </Link>
              <a href="tel:+1-xxx-xxx-xxxx" className="btn btn-secondary">
                Call Now: +1 (XXX) XXX-XXXX
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
