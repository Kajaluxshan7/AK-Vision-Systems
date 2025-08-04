import { Link } from "react-router-dom";
import { FaTasks, FaCloud, FaHeadset, FaStar } from "react-icons/fa";

function Home() {
  // Function to get service images from Unsplash - Security and CCTV focused
  const getServiceImage = (index) => {
    const images = [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop&crop=center", // Security cameras
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=250&fit=crop&crop=center", // Audio video conference room
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center", // Digital marketing analytics
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=250&fit=crop&crop=center", // Social media on devices
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center", // Technology/ordering system
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&crop=center", // Business strategy meeting
    ];
    return images[index] || images[0];
  };

  const services = [
    {
      icon: "Security",
      title: "CCTV & Security Systems",
      description:
        "Professional surveillance solutions with HD cameras, remote monitoring, and 24/7 security coverage for commercial and residential properties in Ontario.",
    },
    {
      icon: "Audio/Video",
      title: "Commercial Audio Video",
      description:
        "Complete audio-visual installation and management for businesses, conferences, events, and commercial spaces throughout Ontario.",
    },
    {
      icon: "Marketing",
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies including SEO, PPC, content marketing, and online brand development.",
    },
    {
      icon: "Social Media",
      title: "Social Media Management",
      description:
        "Expert social media handling and marketing across all platforms to boost your online presence and engagement.",
    },
    {
      icon: "Technology",
      title: "Online Food Ordering Systems",
      description:
        "Custom online food ordering system platforms and management systems to streamline your restaurant's digital operations.",
    },
    {
      icon: "Strategy",
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

  // Add new business stats section
  const businessStats = [
    {
      icon: <FaTasks style={{ color: "#00f5ff", fontSize: "2.5rem" }} />,
      title: "Projects",
      value: "500+",
      subtitle: "Projects Completed",
      description: "Successfully delivered across Canada",
    },
    {
      icon: <FaCloud style={{ color: "#00f5ff", fontSize: "2.5rem" }} />,
      title: "Uptime",
      value: "99.9%",
      subtitle: "Uptime Guarantee",
      description: "Industry-leading reliability",
    },
    {
      icon: <FaHeadset style={{ color: "#00f5ff", fontSize: "2.5rem" }} />,
      title: "Support",
      value: "24/7",
      subtitle: "Support Available",
      description: "Round-the-clock assistance",
    },
    {
      icon: <FaStar style={{ color: "#00f5ff", fontSize: "2.5rem" }} />,
      title: "Rating",
      value: "5",
      subtitle: "Customer Rating",
      description: "Consistently excellent service",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop&crop=center"
            alt="Professional CCTV Security Systems"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>Professional Security & Technology Solutions</h1>
            <p>
              AK Vision Systems specializes in professional CCTV installation,
              commercial security systems, and comprehensive digital marketing
              services throughout Ontario. Protecting your business is our
              mission.
            </p>
            <div className="cta-buttons">
              <Link to="/services" className="btn btn-primary">
                Explore Security Solutions
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get Free Security Assessment
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
              <div className="service-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3>Ontario Expertise</h3>
              <p>
                Deep understanding of Ontario business needs and security
                regulations, serving businesses throughout the province with
                local expertise.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2v11h3v9l7-12h-4l3-8z" />
                </svg>
              </div>
              <h3>Rapid Response</h3>
              <p>
                Quick deployment and 24/7 emergency support ensure your security
                systems are always operational when you need them most.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                </svg>
              </div>
              <h3>Complete Security Solutions</h3>
              <p>
                From CCTV installation to ongoing maintenance and monitoring, we
                handle everything so you can focus on your business security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Solutions Showcase */}
      <section className="section" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <h2 className="section-title">Our Security Solutions in Action</h2>
          <p
            style={{
              textAlign: "center",
              marginBottom: "3rem",
              fontSize: "1.1rem",
              color: "#6c757d",
            }}
          >
            See how we&apos;ve helped businesses across Ontario secure their
            properties and operations
          </p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&crop=center"
                alt="Professional CCTV Camera Installation"
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h4>Professional CCTV Installation</h4>
                <p>HD cameras with remote monitoring capabilities</p>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1586210527576-8e312a6e72c0?w=600&h=400&fit=crop&crop=center"
                alt="Security Control Room"
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h4>24/7 Monitoring Center</h4>
                <p>Round-the-clock security surveillance</p>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1558618644-fcd25c85cd64?w=600&h=400&fit=crop&crop=center"
                alt="Access Control System"
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h4>Access Control Systems</h4>
                <p>Secure entry and visitor management</p>
              </div>
            </div>
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop&crop=center"
                alt="Commercial Audio Video System"
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <h4>Commercial AV Systems</h4>
                <p>Professional audio-visual installations</p>
              </div>
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
                  AK Vision transformed our business with their online ordering
                  system. Sales increased by 40% in just 3 months!
                </p>
                <div className="testimonial-author">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                    alt="Mike Chen - Business Owner"
                    className="author-image"
                  />
                  <div>
                    <h4>Mike Chen</h4>
                    <span>Business Owner, Toronto, ON</span>
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
                    alt="Sarah Johnson - Retail Manager"
                    className="author-image"
                  />
                  <div>
                    <h4>Sarah Johnson</h4>
                    <span>Retail Manager, Ottawa, ON</span>
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
                    alt="David Williams - Business Owner"
                    className="author-image"
                  />
                  <div>
                    <h4>David Williams</h4>
                    <span>Business Owner, Hamilton, ON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Stats Section */}
      <section
        className="business-stats-section"
        style={{ background: "#101a2b", padding: "3rem 0" }}
      >
        <div
          className="container"
          style={{ maxWidth: "1440px", margin: "0 auto" }}
        >
          <h2
            style={{
              color: "#00f5ff",
              fontWeight: 700,
              fontSize: "2rem",
              textAlign: "center",
              marginBottom: "2.5rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 18,
                  background: "#00f5ff",
                  borderRadius: 4,
                  display: "inline-block",
                }}
              ></span>
              Trusted by Hundreds of Businesses
            </span>
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "center",
            }}
          >
            {businessStats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  background: "#181f36",
                  borderRadius: "18px",
                  boxShadow: "0 4px 24px rgba(0,245,255,0.08)",
                  padding: "2.5rem 2rem",
                  minWidth: 220,
                  maxWidth: 300,
                  flex: "1 1 220px",
                  textAlign: "center",
                  border:
                    idx === 0 ? "2px solid #00f5ff" : "2px solid transparent",
                }}
              >
                <div style={{ marginBottom: "1.2rem" }}>{stat.icon}</div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    color: "#222",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    letterSpacing: "1px",
                    color: "#fff",
                  }}
                >
                  {stat.title}
                </div>
                <div
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 700,
                    color: "#00f5ff",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.subtitle}
                </div>
                <div
                  style={{
                    color: "#b3c2e0",
                    fontSize: "1rem",
                  }}
                >
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="hero" style={{ padding: "4rem 0" }}>
        <div className="container">
          <div className="hero-content">
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Ready to Secure Your Business?
            </h2>
            <p>
              Let&apos;s discuss how our security and technology solutions can
              protect your business and help you achieve your goals. Get a free
              security assessment today.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Schedule Security Consultation
              </Link>
              <a href="tel:+14165084636" className="btn btn-secondary">
                Call Now: +1 (416) 508-4636
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
