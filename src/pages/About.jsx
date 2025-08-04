import { Link } from "react-router-dom";

function About() {
  const values = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "Innovation",
      description:
        "We stay ahead of technology trends to provide cutting-edge solutions that give our clients a competitive advantage in their markets.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 1h9v2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h2v9c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4V5c0-2.21 1.79-4 4-4z" />
          <path d="M18.5 8.5L7 20H4v-3L15.5 5.5 18.5 8.5z" />
        </svg>
      ),
      title: "Reliability",
      description:
        "Our commitment to quality and 24/7 support ensures your systems work when you need them most, building trust with every project.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Ontario Expertise",
      description:
        "Deep understanding of Ontario business needs, regulations, and security requirements helps us deliver perfectly tailored solutions.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2v11h3v9l7-12h-4l3-8z" />
        </svg>
      ),
      title: "Efficiency",
      description:
        "Streamlined processes and rapid deployment minimize downtime and get your systems operational quickly and effectively.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.3C16,16.9 15.4,17.5 14.8,17.5H9.2C8.6,17.5 8,16.9 8,16.3V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" />
        </svg>
      ),
      title: "Security First",
      description:
        "Every solution is designed with security as a priority, protecting your business data and maintaining customer trust.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
        </svg>
      ),
      title: "Customer Focus",
      description:
        "We listen to your unique needs and create customized solutions that align perfectly with your business objectives and budget.",
    },
  ];

  const team = [
    {
      name: "Technical Excellence",
      role: "Our certified technicians bring years of experience in security systems, CCTV installation, audio-visual technology, and digital infrastructure throughout Ontario.",
    },
    {
      name: "Security Expertise",
      role: "Our security specialists understand the unique challenges of Ontario businesses and create comprehensive protection strategies.",
    },
    {
      name: "Customer Support",
      role: "Our dedicated support team provides 24/7 assistance, ensuring your systems and campaigns perform optimally at all times.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content about-hero">
            <h1>About AK Vision Systems</h1>
            <p>
              Leading provider of integrated technology and marketing solutions,
              empowering Canadian businesses to thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 style={{ color: "#1e3a8a", marginBottom: "1.5rem" }}>
                Our Story
              </h2>
              <p>
                Founded with a vision to bridge the gap between traditional
                business operations and modern technology, AK Vision Systems has
                become a trusted partner for businesses across Canada. We
                recognized that many companies struggle to navigate the complex
                world of security technology and digital marketing.
              </p>
              <p>
                Our journey began with a simple mission: to provide
                comprehensive, reliable, and innovative solutions that help
                businesses protect their assets, enhance their operations, and
                reach their target audiences effectively.
              </p>
              <p>
                Today, we proudly serve hundreds of clients across Canada, from
                small local businesses to large commercial enterprises,
                delivering results that exceed expectations and building lasting
                partnerships based on trust and excellence.
              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <span className="placeholder-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z" />
                  </svg>
                </span>
                <p>AK Vision Systems Office</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="placeholder-image">
                <span className="placeholder-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </span>
                <p>Our Mission & Vision</p>
              </div>
            </div>
            <div className="about-text">
              <h2 style={{ color: "#1e3a8a", marginBottom: "1.5rem" }}>
                Mission & Vision
              </h2>
              <div style={{ marginBottom: "2rem" }}>
                <h3 style={{ color: "#3b82f6", marginBottom: "1rem" }}>
                  Our Mission
                </h3>
                <p>
                  To empower Canadian businesses with cutting-edge technology
                  solutions and strategic marketing services that enhance
                  security, improve operations, and drive sustainable growth in
                  the digital economy.
                </p>
              </div>
              <div>
                <h3 style={{ color: "#3b82f6", marginBottom: "1rem" }}>
                  Our Vision
                </h3>
                <p>
                  To be Canada's most trusted technology and marketing solutions
                  provider, known for innovation, reliability, and exceptional
                  customer service that transforms how businesses operate and
                  connect with their customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            These fundamental principles guide everything we do and shape how we
            serve our clients.
          </p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <p className="section-subtitle">
            Our diverse team of professionals brings together technical
            expertise, creative marketing insights, and exceptional customer
            service.
          </p>
          <div className="services-grid">
            {team.map((member, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {index === 0 ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                    </svg>
                  ) : index === 1 ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  )}
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Serving All of Canada</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                AK Vision Systems proudly serves businesses across all Canadian
                provinces and territories. Our network of certified technicians
                and digital marketing specialists ensures that wherever you are
                in Canada, you receive the same high-quality service and
                support.
              </p>
              <h3 style={{ color: "#1e3a8a", margin: "2rem 0 1rem" }}>
                Key Service Areas:
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ padding: "0.5rem 0", color: "#4b5563" }}>
                  🏙️ Major Metropolitan Areas
                </li>
                <li style={{ padding: "0.5rem 0", color: "#4b5563" }}>
                  🏘️ Suburban Business Districts
                </li>
                <li style={{ padding: "0.5rem 0", color: "#4b5563" }}>
                  🏭 Industrial Complexes
                </li>
                <li style={{ padding: "0.5rem 0", color: "#4b5563" }}>
                  🍽️ Restaurant & Hospitality
                </li>
                <li style={{ padding: "0.5rem 0", color: "#4b5563" }}>
                  🏢 Corporate Offices
                </li>
                <li style={{ padding: "0.5rem 0", color: "#4b5563" }}>
                  🏪 Retail Establishments
                </li>
              </ul>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <span className="placeholder-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </span>
                <p>Serving All Canada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero" style={{ padding: "4rem 0" }}>
        <div className="container">
          <div className="hero-content">
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Ready to Work Together?
            </h2>
            <p>
              Let's discuss how AK Vision Systems can help transform your
              business with our comprehensive technology and marketing
              solutions.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
